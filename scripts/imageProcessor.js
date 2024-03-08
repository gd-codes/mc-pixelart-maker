/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/


function analyseImage(uid, image, area, palette, d3, dither) {
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
  var p = [];
  for (var cn of palette.split(" ")) {
    if (Colours.get(cn) !== undefined) {
      var clr = Colours.get(cn); p.push(clr.rgb);
      if (d3) {
        p.push(darkPixel(clr.rgb)); p.push(lightPixel(clr.rgb));
      }
    }
  }
  ctx.drawImage(image, 0, 0, image.width, image.height);
  ctx.clearRect(0,0,canv.width,canv.height);
  canv.height = h; canv.width = w;
  ctx.drawImage(image, 0, 0, w, h);
  var imgData = ctx.getImageData(0,0,w,h);
  var resized_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  
  PictureData[uid]['shadeMap'] = new Array(w);
  for (let i=0; i<w; i++)
    PictureData[uid]['shadeMap'][i] = new Array(h); 
  
  var finalImgData = convertPalette(p, imgData, dither, PictureData[uid]['shadeMap']);
  ctx.putImageData(finalImgData, 0, 0);
  var converted_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  // $("#imageForm_"+uid).data('finalimage', finalImgData);
  PictureData[uid]['resizedImage'] = resized_image;
  PictureData[uid]['finalImage'] = finalImgData;
  
  // Processing done, configure the preview buttons
  $("#viewOrigImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', image.src)
      .height(image.height)
      .width(image.width);
    $('#downloadImageButton').attr('href', image.src);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-original.png'));
    $("#imageDisplayModal").modal('show');
  });
  $("#viewResizedImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', resized_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $('#downloadImageButton').attr('href', resized_image);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-resized.png'));
    $("#imageDisplayModal").modal('show');
  });
  $("#viewFinalImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', converted_image)
      .height(h*dispScale)
      .width(w*dispScale);
    $('#downloadImageButton').attr('href', converted_image);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-converted.png'));
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

function convertPalette(pal, pixels, dither, shademap) {
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
    if (shademap !== undefined) {
      let x = (i/4) % pixels.width;
      let y = Math.floor(i/4 / pixels.width);
      shademap[x][y] = c[3];
    }
    //No transparent pixels allowed in the actual image, alpha value copied into shademap
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
    console.error("Error forming a pack icon", err);
    return "data:image/png;base64,";
  } 
}

function getPixelAt(x, z, dataobj) {
  // Return RGBA of pixel (x,z) from image's continuous (1D) data byte seq
  let i = 4*(dataobj.width*(z) + x);
  return [dataobj.data[i], dataobj.data[i+1], dataobj.data[i+2], dataobj.data[i+3]];
}

function indexOfArray(a, parent_arr) {
  for (var i=0; i<parent_arr.length; i++) {
    if (a[0]==parent_arr[i][0] && a[1]==parent_arr[i][1] && a[2]==parent_arr[i][2]) {
      return i;
    }
  } //Arrays are in different variables -> normal comparison always false
}
