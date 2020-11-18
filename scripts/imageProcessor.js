
const dye_colours = [
  [218,218,218], [175,112,55], [140,72,175], [95,130,180],
  [195,195,75], [125,175,56], [195,115,135], [64,64,64],
  [128,128,128], [64,108,128], [108,53,150], [42,64,150],
  [88,64,42], [88,108,42], [128,42,42], [20,20,20]
]; 
//None of these values should be > 220
const base_colours = dye_colours.concat([
  [218,218,205], [136,136,218], [96,96,96], [128,96,64],
  [120,100,60], [54,78,21], [45,70,45], [96,0,0],
  [218,0,0], [218,128,0], [0,104,0], [218,160,80],
  [120,70,42], [78,185,180], [64,108,218], [0,184,48],
  [0,0,0], [146,28,28], [16,128,112], [75,58,48],
  [208,208,64], [169,169,169], [208,198,138], [139,144,156],
  [108,150,48], [64,108,128]
]);
const all_colours = base_colours.concat(
  base_colours.map(function(c){
    return [Math.round(255/220*c[0]), Math.round(255/220*c[1]), Math.round(255/220*c[2])]}),
  base_colours.map(function(c){
    return [Math.round(180/220*c[0]), Math.round(180/220*c[1]), Math.round(180/220*c[2])]})
); //Don't change the indices/order of any of these lists
const base_blocks = [
  "concrete 0", "concrete 1", "concrete 2", "concrete 3",
  "concrete 4", "concrete 5", "concrete 6", "concrete 7", 
  "concrete 8", "concrete 9", "concrete 10", "concrete 11", 
  "concrete 12", "concrete 13", "concrete 14", "concrete 15",
  "quartz_block 0", "blue_ice 0", "stone 0", " dirt 1",
  "crafting_table 0", "leaves 12", "leaves 13", "netherrack 0",
  "redstone_block 0", "shroomlight 0", "dried_kelp_block 0", "glowstone 0",
  "redstone_lamp 0", "diamond_block 0", "lapis_block 0", "emerald_block 0",
  "netherite_block 0", "crimson_nylium 0", "warped_nylium 0", "soul_soil 0",
  "gold_block 0", "web 0", "end_stone 0", "iron_block 0",
  "slime 0", "prismarine 0"
];


function analyseImage(uid, image, area, palette, dither) {
  //Manage the display etc
  var canv = $("#testCanvas")[0];
  var ctx = canv.getContext('2d');
  canv.height = image.height; canv.width = image.width;
  var w = area[0]*128, h = area[1]*128;
  var dispScale;
  switch (Math.max(w, h)) {
    case 128:
    case 256:
      dispScale = 4; break;
    case 384:
      dispScale = 2; break;
    default:
      dispScale = 1;      
  }
  ctx.drawImage(image, 0, 0, image.width, image.height);
  //var origCanvImg = ctx.getImageData(0,0,image.width,image.height);
  ctx.clearRect(0,0,canv.width,canv.height);
  canv.height = h; canv.width = w;
  ctx.drawImage(image, 0, 0, w, h);
  var imgData = ctx.getImageData(0,0,w,h);
  var resized_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  var finalImgData ;
  switch (palette) {
    case "basic" :
      finalImgData = convertPalette(dye_colours, imgData, dither);
      break;
    case "standard" :
      finalImgData = convertPalette(base_colours, imgData, dither);
      break;
    case "extended" :
      finalImgData = convertPalette(all_colours, imgData, dither);
      break;
  }
  ctx.putImageData(finalImgData, 0, 0);
  var converted_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  $("#imageForm_"+uid).data('finalimage', finalImgData);
  
  $("#viewOrigImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', image.src)
      .height(image.height)
      .width(image.width);
    $("#imageDisplayModal").modal('show');
  });
  $("#viewResizedImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', resized_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $("#imageDisplayModal").modal('show');
  });
  $("#viewFinalImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', converted_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $("#imageDisplayModal").modal('show');
  })
}

function closestColour(r, g, b, palette) {
  var delta = Infinity;
  var clr, c, d;
  /* Clamping necessary since some values can go beyond range
  due to the dithering algorithm */
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);
  for (c of palette) {
    /*Redmean based weighted formula for colour distance*/
    if (r+c[0] > 256) { 
      d = 2*(r-c[0])*(r-c[0]) + 4*(g-c[1])*(g-c[1]) + 3*(b-c[2])*(b-c[2]);
    } else {
      d = 3*(r-c[0])*(r-c[0]) + 4*(g-c[1])*(g-c[1]) + 2*(b-c[2])*(b-c[2]);
    }
    if (d < delta) {
      delta = d; clr = c;
    }
  }
  return clr;
}

function convertPalette(pal, pixels, dither) {
  //Quantize the image
  var c, dr, dg, db, i, j;
  var data = pixels.data;
  for(i=0; i < data.length; i+=4) {
    c = closestColour(data[i], data[i+1], data[i+2], pal);
    if (dither) { // Apply floyd-steinberg dither
      dr = data[i] - c[0]; dg = data[i+1] - c[1]; db = data[i+2] - c[2];
      if ((i/4 + 1)%pixels.width != 0) { //pixel is not on right edge of image
        j = i + 4; 
        data[j] += 7/16*dr; data[j+1] += 7/16*dg; data[j+2] += 7/16*db;
      }
      if (i/4 < data.length/4 - pixels.width) { //pixel is not on bottom edge of image
        j = i + 4*pixels.width;
        data[j] += 5/16*dr; data[j+1] += 5/16*dg; data[j+2] += 5/16*db;
        if ((i/4 + 1)%pixels.width != 0) { //also not on right edge
          j = i + 4*pixels.width + 4;
          data[j] += 1/16*dr; data[j+1] += 1/16*dg; data[j+2] += 1/16*db;
        }
        if ((i/4)%pixels.width != 0) { //also not on left edge
          j = i + 4*pixels.width - 4;
          data[j] += 3/16*dr; data[j+1] += 3/16*dg; data[j+2] += 3/16*db;
        }
      }
      
    }
    data[i] = c[0]; data[i+1] = c[1]; data[i+2] = c[2]; data[i+3] = 255;
    //No transparent pixels allowed
  }
  return pixels;
}

function makeLogo(images) {
  //Called at the time of writing behaviour pack
  var canv = $("#testCanvas")[0], ctx = canv.getContext('2d');
  var logodata = $("#logoImg")[0];
  canv.width = 128; canv.height = 128;
  if (images == []) {
    ctx.drawImage(logodata, 0, 0, 128, 128);
  } else {
    for (var i=0; i<images.length; i++) {
      ctx.putImageData(images[i], 16*i, 16*i);
    }
    ctx.drawImage(logodata, 88, 88, 32, 32);
  }
  try {
    return canv.toDataURL('image/png');
  } catch (err) {
    return "data:image/png;base64,";
  } 
}
