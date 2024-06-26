/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

/**
 * Given raw image data, resize it to fit the specified area and quantize the colour palette
 * according to the map parameters, and save the processed image outputs.
 * @param {String} uid - Image upload form that the image belongs to.
 * @param {HTMLImageElement} image - Image data that can be painted to a canvas
 * @param {[Number,Number]} area - Number of maps to cover along width & height
 * @param {String} palette - Whitespace separated list of materials that can be used
 * @param {Boolean} is3D - Whether the map art can use height variation
 * @param {String} dither - Dithering algorithm to apply 
 * @returns {{converted:String, disph:Number, dispw:Number, h2low:Boolean}} 
 * Parameters that can be passed to `configureImgPreviewModal`
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
      var clr = Colours.get(cn); 
      // This order is important!! See correctShadeHeightEffect()
      p.push(clr.rgb);
      if (is3D) {
        p.push(darkPixel(clr.rgb)); 
        p.push(lightPixel(clr.rgb));
      }
    } else {
      alert("Unexpected Error\n\nSome colours in the palette are invalid (Is this image data restored from an older session?). Please re-upload the image and try in a new form.");
      throw new Error(`Missing colour ${cn}`);
    }
  }
  // Resize the image to fit number of pixels in minceraft maps, using browser canvas
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
  
  // Perform quantization/dithering pass, obtaining the unrestricted/natural heights
  var finalImgData = convertPalette(p, imgData, dither, PictureData[uid]['shadeMap']);
  // Edit the image to reflect errors that will be obtained due to height limit
  var heightTooLow = 0;
  if (is3D) {
    let ymax = $("#heightInput_"+uid).val();
    let ymap = findYMap(finalImgData, ymax, PictureData[uid]['shadeMap']);
    heightTooLow = ymap.cuts;
    correctShadeHeightEffect(finalImgData, p, ymap.result);
  }
  ctx.putImageData(finalImgData, 0, 0);
  var converted_image = canv.toDataURL("image/png");
  ctx.clearRect(0, 0, w, h);
  PictureData[uid]['resizedImage'] = resized_image;
  PictureData[uid]['finalImage'] = finalImgData;
  // Arbitrary threshold for h2low, average 4 cuts per column
  return {converted:converted_image, disph: h*dispScale, dispw: w*dispScale, h2low: heightTooLow > 4*h};
}

/**
 * Determine the most similar colour to a given RGB value from a palette of allowed colours,
 * using a Red-mean based weighted formula for colour distance
 * @param {Array<Number>} rgb - Initial colour
 * @param {Array<[Number,Number,Number,Number]>} palette - RGB values to choose from
 * @returns {[Number,Number,Number,Number]} Shallow copy of value from palette that is the closest
 */
function closestColour(rgb, palette) {
  var delta = Infinity;
  var clr, c, d;
  // Clamping necessary since some values can go beyond range due to the dithering algorithm
  r = Math.min(Math.max(rgb[0], 0), 255);
  g = Math.min(Math.max(rgb[1], 0), 255);
  b = Math.min(Math.max(rgb[2], 0), 255);
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
  return clr.slice(); // Important to copy in case of value modification
}

/**
 * Quantize an Image's colour palette to a set of allowed values, 
 * optionally applying Floyd-Steinberg dithering.
 * Also optionally identify light/dark colour variation data for each pixel, used in 3D map art.
 * @param {Array<[Number,Number,Number,Number]>} palette - RGBA values to choose from;
 *  the Alpha channel doesn't represent transparency but encodes the light/dark variation of a
 *  colour when multiple colours can be produced from the same source material.
 * @param {ImageData} pixels - Image data containing dimensions and RGBA pixel array
 * @param {'none'|'weak-bayer'|'strong-bayer'|'floyd-steinberg'|'atkinson'} dither - Algorithm to apply 
 * @param {Array<Array<Number>>|undefined} shademap - Output into which to write variation data for 3D maps
 * @returns Modified ImageData pixels with the replaced colours.
 */
function convertPalette(palette, pixels, dither, shademap) {
  const bayer4x4 = [
    [ 0/16-.5,  8/16-.5,  2/16-.5, 10/16-.5],
    [12/16-.5,  4/16-.5, 14/16-.5,  6/16-.5],
    [ 3/16-.5, 11/16-.5,  1/16-.5,  9/16-.5],
    [15/16-.5,  7/16-.5, 13/16-.5,  5/16-.5]
  ];
  //Quantize the image
  for (z=0; z<pixels.height; z++) {
    for (x=0; x<pixels.width; x++) {
      const irgb = getPixelAt(x,z,pixels); // Input of this pixel
      let cc; // Final RGB+shademap value (output of this pixel)
      /* For Ordered dithering, pre-modify input pixel */
      if (dither === 'weak-bayer' || dither === 'strong-bayer') {
        let s = 5 * 255/Math.max(10, palette.length) * bayer4x4[z%4][x%4];
        if (dither === 'strong-bayer') s *= 3;
        const mrgb = [irgb[0]+s, irgb[1]+s, irgb[2]+s];
        cc = closestColour(mrgb, palette);
      } else {
        cc = closestColour(irgb, palette);
      }
      /* Copy map variant into shademap for 3D maps */
      if (shademap !== undefined) {
        shademap[x][z] = cc[3];
      }
      cc[3] = 255;
      setPixelAt(x, z, pixels, cc);
      /* For Error Diffusion Dithering, post-modify neighboring pixels */
      let dr = irgb[0]-cc[0], dg = irgb[1]-cc[1], db = irgb[2]-cc[2];
      if (dither === 'floyd-steinberg') {
        adjustPixelAt(x+1, z,   pixels, [dr*7/16, dg*7/16, db*7/16, 0]);
        adjustPixelAt(x,   z+1, pixels, [dr*5/16, dg*5/16, db*5/16, 0]);
        adjustPixelAt(x+1, z+1, pixels, [dr*1/16, dg*1/16, db*1/16, 0]);
        adjustPixelAt(x-1, z+1, pixels, [dr*3/16, dg*3/16, db*3/16, 0]);
      } else if (dither === 'atkinson') {
        dr/=8; dg/=8; db/=8;
        adjustPixelAt(x+1, z,   pixels, [dr, dg, db, 0]);
        adjustPixelAt(x+2, z,   pixels, [dr, dg, db, 0]);
        adjustPixelAt(x,   z+2, pixels, [dr, dg, db, 0]);
        adjustPixelAt(x,   z+1, pixels, [dr, dg, db, 0]);
        adjustPixelAt(x+1, z+1, pixels, [dr, dg, db, 0]);
        adjustPixelAt(x-1, z+1, pixels, [dr, dg, db, 0]);
      }
    }
  }
  return pixels;
}

/**
 * Edit pixel shades in the image to reflect in-game appearance according to the given height map.
 * @param {ImageData} pixels - to be modified
 * @param {Array<Array<Number>>} palette - sequence of colours present in the image - 
 *  ordered normal, dark, light, normal, dark, light... for each material
 * @param {Array<Array<Number>>} ymap - Actual clamped height values
 */
function correctShadeHeightEffect(pixels, palette, ymap) {
  for (let x=0; x < pixels.width; x++) {
    for (let z=0; z < pixels.height; z++) {
      let p = getPixelAt(x, z, pixels);
      let i = indexOfArray(p.slice(0,3), palette);
      let tc = Math.floor(i / 3) * 3;
      // For the top row, assume the block is higher (lighter) than the one N of it
      // even though that is outside the map.
      if (z === 0 || ymap[x][z] > ymap[x][z-1]) {
        tc += 2;
      } else if (ymap[x][z] < ymap[x][z-1]) {
        tc += 1;
      }
      setPixelAt(x, z, pixels, [...(palette[tc]), 255]);
    }
  }
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
  if (images.length === 0) {
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
  let loc = 4*(dataobj.width*(z) + x);
  return [dataobj.data[loc], dataobj.data[loc+1], dataobj.data[loc+2], dataobj.data[loc+3]];
}

/**
 * Set the value of pixel (x,z) in a continuous 1D ravelled RGBARGBA... byte seq
 * @param {Number} x - Pixel width coordinate
 * @param {Number} z - Pixel height coordinate
 * @param {ImageData} dataobj - Source Image Data array
 * @param {Array<Number>} rgba - Colour to write
 */
function setPixelAt(x, z, dataobj, rgba) {
  let loc = 4*(dataobj.width*(z) + x);
  for (i=0; i<4; i++) dataobj.data[loc+i] = rgba[i];
}

/**
 * Add an amount to the value of pixel (x,z) in a continuous 1D ravelled RGBARGBA... byte seq
 * if it is within the bounds of 2D image
 * @param {Number} x - Pixel width coordinate
 * @param {Number} z - Pixel height coordinate
 * @param {ImageData} dataobj - Source Image Data array
 * @param {Array<Number>} drgba - Delta Colour to add
 */
function adjustPixelAt(x, z, dataobj, drgba) {
  if (x<0 || x>=dataobj.width || z<0 || z>=dataobj.height) return;
  let loc = 4*(dataobj.width*(z) + x);
  for (i=0; i<4; i++) dataobj.data[loc+i] += drgba[i];
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
