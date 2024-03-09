/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

/**
 * Given raw image data, resize it to fit the specified area and quantize the colour palette
 * according to the map parameters, and save the processed image outputs.
 * Also configure this image form's UI callbacks to allow downloading and viewing the output images.
 * @param {String} uid - Image upload form that the image belongs to.
 * @param {HTMLImageElement} image - Image data that can be painted to a canvas
 * @param {[Number,Number]} area - Number of maps to cover along width & height
 * @param {String} palette - Whitespace separated list of materials that can be used
 * @param {Boolean} is3D - Whether the map art can use height variation
 * @param {Boolean} dither - Whether to apply Dithering
 */
function analyseImage(uid, image, area, palette, is3D, dither) {
  var canv = $("#testCanvas")[0];
  var ctx = canv.getContext('2d', alpha=false, willReadFrequently=true);
  canv.height = image.height; canv.width = image.width;
  // Manage the display scale for preview
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
  // Construct the list of colours for quantization
  var p = [];
  for (var cn of palette.split(" ")) {
    if (Colours.get(cn) !== undefined) {
      var clr = Colours.get(cn); p.push(clr.rgb);
      if (is3D) {
        p.push(darkPixel(clr.rgb)); p.push(lightPixel(clr.rgb));
      }
    }
  }
  // Resize the image to fit number of pixels in minceraft maps
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

/**
 * Determine the most similar colour to a given RGB value from a palette of allowed colours,
 * using a Red-mean based weighted formula for colour distance
 * @param {Number} r 
 * @param {Number} g 
 * @param {Number} b 
 * @param {Array<[Number,Number,Number]>} palette - RGB values to choose from
 * @returns Value from palette that is the closest
 */
function closestColour(r, g, b, palette) {
  var delta = Infinity;
  var clr, c, d;
  // Clamping necessary since some values can go beyond range due to the dithering algorithm
  r = Math.min(Math.max(r, 0), 255);
  g = Math.min(Math.max(g, 0), 255);
  b = Math.min(Math.max(b, 0), 255);
  for (c of palette) {
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

/**
 * Quantize an Image's colour palette to a set of allowed values, 
 * optionally applying Floyd-Steinberg dithering.
 * Also optionally identify light/dark colour variation data for each pixel, used in 3D map art.
 * @param {Array<[Number,Number,Number,Number]>} palette - RGBA values to choose from;
 *  the Alpha channel doesn't represent transparency but encodes the light/dark variation of a
 *  colour when multiple colours can be produced from the same source material.
 * @param {ImageData} pixels - Image data containing dimensions and RGBA pixel array
 * @param {Boolean} dither - Whether to apply  Dithering
 * @param {Array<Array<Number>>} shademap - Output into which to write variation data for 3D maps
 * @returns Modified ImageData pixels with the replaced colours.
 */
function convertPalette(palette, pixels, dither, shademap) {
  //Quantize the image
  var c, dr, dg, db, i, j;
  var data = pixels.data;
  for(i=0; i < data.length; i+=4) {
    c = closestColour(data[i], data[i+1], data[i+2], palette);
    if (dither) {
      // Propagate colour difference errors to neighbouring pixels
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
    // Set Alpha to 255 in output - image is fully opaque.
    // Palette's alpha encoded value copied into shademap
    data[i] = c[0]; data[i+1] = c[1]; data[i+2] = c[2]; data[i+3] = 255;
    if (shademap !== undefined) {
      let x = (i/4) % pixels.width;
      let y = Math.floor(i/4 / pixels.width);
      shademap[x][y] = c[3];
    }
  }
  return pixels;
}

/**
 * Create a PNG image to be used as a logo for the generated add-on in Minecraft,
 * including the website's logo and a preview of contained artwork.
 * @param {Array<HTMLImageElement>} images - Processed map art preview images to include.
 * @returns Base-64 encoded image data of the logo
 */
function makeLogo(images) {
  //Called at the time of writing behaviour pack
  var canv = $("#testCanvas")[0], ctx = canv.getContext('2d', alpha=false, willReadFrequently=true);
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

/**
 * Extract the value of a pixel (x,z) from a continuous 1D ravelled RGBARGBA... byte seq
 * @param {Number} x - Pixel width coordinate
 * @param {Number} z - Pixel height coordinate
 * @param {ImageData} dataobj - Source Image Data array
 * @returns RGBA value at the given coordinate
 */
function getPixelAt(x, z, dataobj) {
  let i = 4*(dataobj.width*(z) + x);
  return [dataobj.data[i], dataobj.data[i+1], dataobj.data[i+2], dataobj.data[i+3]];
}

/**
 * Compute the index of a 3-tuple present within another array of similar tuples by comparing values
 * @param {Array<Number,Number,Number>} a - Array to search for
 * @param {Array<Array<Number,Number,Number>>} parent_arr - Array in which to search
 * @returns Integer index
 */
function indexOfArray(a, parent_arr) {
  for (var i=0; i<parent_arr.length; i++) {
    if (a[0]==parent_arr[i][0] && a[1]==parent_arr[i][1] && a[2]==parent_arr[i][2]) {
      return i;
    }
  }
}
