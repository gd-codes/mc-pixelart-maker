/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

/**
 * For 3D map art, generate the height profile of the image.
 * @param {ImageData} imgdata - Processed image data containing dimensions and pixel array
 * @param {Number} maxY - Height limit (upper limit of allowed range from y=~0)
 * @param {Array<Array<Number>>} shademap - Pixel-wise light/dark variation data; each value in this
 *  is 255 if the pixel is the base colour of the material, 254 if darker variant, 253 if brighter variant
 * @returns 2D Array of pixel-wise height coordinates required to achieve the given light/dark variation
 * with minecraft blocks (result); and the total number of discontinuities caused by maxY limit (cuts).
 */
function findYMap(imgdata, maxY, shademap) {
  var Ymap = [], x, z, column, type, lastY, min, cuts=0;
  for (x=0; x<imgdata.width; x++) {
    column = [0]; min=0;
    for (z=1; z<imgdata.height; z++) {
      type = shademap[x][z];
      /* For type      255 ;        254;   253;
      Block must be at same height; lower; higher; than the one N of it accordingly */
      lastY = column[column.length - 1];
      switch (type) {
        case 255: 
          column.push(lastY);
          break;
        case 254:
          column.push(lastY - 2);
          if (lastY-2 < min) {
            min = lastY-2;
          }
          break;
        case 253:
          column.push(lastY + 2);
          break;
      }
    }
    //Bring everything within 0 and height limit
    let clamp = clampSequence(column, maxY);
    cuts += clamp.cuts;
    Ymap.push(clamp.result);
  }
  return {result:Ymap, cuts:cuts};
}

/**
 * Given an unrestricted sequence of integers, restrict it to the range 0..lim by "cutting"
 * at the fewest number of places possible and shifting the sections (i.e. preserve deltas
 * modified[i+1]-modified[i] == original[i+1]-original[i] as far as possible).
 * @param {Array<Number>} arr - Input integer sequence
 * @param {Number} lim - Max permissible value
 * @returns Bounded sequence same size as arr (result); Number of cuts made (cuts)
 */
function clampSequence(arr, lim) {
  let mn = Number.MAX_SAFE_INTEGER;
  let mx = Number.MIN_SAFE_INTEGER;
  const res = [];
  const buffer = [];
  let cuts = 0;
  for (let i = 0; i < arr.length; i++) {
      const lmn = mn; // Local (buffer) min
      const lmx = mx; // Local (buffer) max
      mn = Math.min(arr[i], mn);
      mx = Math.max(arr[i], mx);
      if (mx - mn > lim) {
          for (let j = 0; j < buffer.length; j++) {
              res.push(buffer[j] - lmn);
          }
          buffer.length = 0;
          cuts += 1;
          mn = arr[i];
          mx = arr[i];
      }
      buffer.push(arr[i]);
  }
  for (let j = 0; j < buffer.length; j++) {
      res.push(buffer[j] - mn);
  }
  return {result:res, cuts:cuts};
}

/**
 * Compute the palette block usage and placement statistics to display to the user within the survival guide,
 * in multiple panes each corresponding to a zone of 64x128 pixels from the image.
 * @param {string} uid - Guide image for which to perform the calculations.
 * @returns Parameters that can be passed to `EJStemplates.survivalGuide` to construct the HTML UI
 */
function getSurvivalGuideTableData(uid) {
  try {
    var image = PictureData[uid]['finalImage']; 
    var pal = $("#materialOptsDisplay_"+uid).data("selected").split(" ");
  } catch (err) {
    console.error(err);
    alert("Unexpected Error\n\nCould not generate the guide");
    return;
  }

  var absCoords = $("#absCoordsSwitch_"+uid+":checked").length > 0;
  var originX = absCoords ? Number($("#originInputX_"+uid).val()) : 0;
  var originY = absCoords ? Number($("#originInputY_"+uid).val()) : 0;
  var originZ = absCoords ? Number($("#originInputZ_"+uid).val()) : 0;

  var zone_origins=[], x0, z0, yMap; 
    //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (let z0=0; z0<image.height; z0+=128) {
    for (let x0=0; x0<image.width; x0+=64) {
      zone_origins.push([originX+x0, originZ+z0]);
    }
  }
  var ymax = ($("#3dSwitch_"+uid+":checked").length > 0)? $("#heightInput_"+uid).val() : 0;
  if (ymax > 1) {
    yMap = findYMap(image, ymax, PictureData[uid]['shadeMap']).result;
  }

  // Begin creating the data for each zone
  // `tabledatas` has a matcing colour index and y coordinate for every pixel in the image
  // `blockcounts` has aggregate colour/material usage data from the image
  // Repeat these for each of the zones & append to html as seperate pages
  var blockcounts = new Array(zone_origins.length + 1);
  blockcounts[0] = new Array(Colours.size).fill(0);
  var tabledatas = new Array(zone_origins.length);
  // blockcounts[0] has total count across all zones, 1..N contain zone-wise blockcounts
  for (let zone=0; zone<zone_origins.length; zone++) { 
    blockcounts[zone+1] = new Array(Colours.size).fill(0);
    let pix, pixnorm, code, y;
    x0 = zone_origins[zone][0]; z0 = zone_origins[zone][1];
    tabledatas[zone] = new Array(128);
    for (let z=0; z<128; z++) {
      tabledatas[zone][z] = new Array(64);
      for (let x=0; x<64; x++) {
        pix = getPixelAt(x+x0-originX, z+z0-originZ, image);
        code = Math.floor(indexOfArray(pix, ColourList) / 3);
        y = (ymax <= 1) ? originY : yMap[x+x0-originX][z+z0-originZ]+originY;
        tabledatas[zone][z][x] = [code, y];
        blockcounts[zone+1][code] += 1;
        blockcounts[0][code] += 1;
      }
    }
  } 
  var cindexns = [];
  for (let ct of pal) {
    cindexns.push(ColourTokens.indexOf(ct));
  }

  return { uid, 
    is3D: (ymax > 1), 
    numzones: zone_origins.length, 
    tabledatas, 
    blockcounts, 
    cindexns,
    absCoords,
    zone_origins,
  };
}

/**
 * Generate minecraft command syntax to place all the blocks for a map art automatically,
 * as a series of function files each corresponding to a zone of 64x128 pixels from the image.
 * @param {string} name - Image name
 * @param {ImageData} imobj - Processed image data containing its dimensions.
 * @param {Number} height - Height limit (> 1) for a 3D map, otherwise 0 for a non-3D map
 * @param {Boolean} keep - Whether to keep existing blocks or replace all
 * @param {Boolean} teleport - Whether to tp player across functions
 * @param {Boolean} strucs - Whether to place blocks using the structure command, else setblock
 * @param {Array<Array<Number>>} shademap - Pixel light/dark variation data to pass to ``
 * @param {Boolean} absCoords - Whether absolute coordinates are used for this image
 * @param {{X:Number, Y:Number, Z:Number}} origin - Map Origin Coordinates, all set to 0 if `absCoords` is false
 * @returns {Array<string>} of the minecraft commands to be saved in function files.
 */
function writeCommands(name, imobj, height, keep, teleport, strucs, shademap, absCoords, origin) {
  var zone_origins=[], x0, z0, i, fnlist=[], yMap, ymax=1;
  //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (z0=0; z0<imobj.height; z0+=128) {
    for (x0=0; x0<imobj.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  } 
  if (height > 1) {
    ymax = height;             
    yMap = findYMap(imobj, ymax, shademap).result; 
  }
  for (i=0; i<zone_origins.length; i++) {
    var fun="", pix, code, replMode;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    fun += "say Running commands ".concat((i+1), "/", zone_origins.length, 
            " of function group ", name, absCoords?" at ":" at ~",
            "(x=", origin.X + x0, ":",  origin.X + x0 + 63 , 
            ", y=", origin.Y, ":", origin.Y+ymax, 
            ", z=", origin.Z + z0, ":", origin.Z + z0 + 127, 
            ")", keep?"":" (Overwriting)", strucs?" (Using structures)":"", "\n");
    /* If positions are linked, coordinates for each zone have same origin (image's top left)
    Else iterate from (0,0) each time - user will have to shift by x=64/z=128 for each zone*/
    let xloop = (absCoords)? x0 : 0;
    let zloop = (absCoords)? z0 : 0;
    replMode = (keep)? " keep\n" : "\n";
    if (!keep) { //Replace any existing blocks with air
      for (var j=0; j<=ymax; j++) {
        if (absCoords) {
          fun += "fill ".concat(origin.X+xloop, " ", origin.Y+j, " ", origin.Z+zloop,
            " ", origin.X+xloop+63, " ", origin.Y+j, " ", origin.Z+zloop+127, " air [] replace\n");
        } else {
          fun += "fill ~".concat(xloop, " ~", j, " ~", zloop, " ~", xloop+63, 
                               " ~", j, " ~", zloop+127, " air [] replace\n");
        }
      }
    }
    for (let x=xloop; x < xloop+64; x++) {
      for (let z=zloop; z < zloop+128; z++) {
        pix = (absCoords)? getPixelAt(x,z,imobj) : getPixelAt(x+x0,z+z0,imobj);
        code = ColourTokens[Math.floor(indexOfArray(pix, ColourList) / 3)];
        let y = (height <= 1)? 0 : ((absCoords)? yMap[x][z] : yMap[x+x0][z+z0]);
        let pos = (absCoords)? `${origin.X+x} ${origin.Y+y} ${origin.Z+z}` : `~${x} ~${y} ~${z}`;
        if (strucs) {
          // Load block as structure
          fun += ((keep)?`execute if block ${pos} air run `:"") + 
              `structure load mapart:${code} ${pos}\n`;
        } else {
          // Regular placement
          fun += `setblock ${pos} ${Colours.get(code).id}${replMode}`;
        }
      }
    }
    if (teleport && i<zone_origins.length-1) { //If not linked and there are more zones,
      var nextzone = zone_origins[i+1];        //Shift the user to the origin for next zone
      //Marker block - always as structure
      if (absCoords) {
        fun += "structure load mapart:glowstone ".concat(
          nextzone[0]+origin.X, " ", origin.Y-1, " ", nextzone[1]+origin.Z, "\n");
        fun += "teleport @p ".concat(nextzone[0]+origin.X, " ", origin.Y, " ", nextzone[1]+origin.Z, "\n")
      } else {
        fun += "structure load mapart:glowstone ~".concat(nextzone[0]-x0, " ~-1 ~", nextzone[1]-z0, "\n");
        fun += "teleport @p ~".concat(nextzone[0]-x0, " ~ ~", nextzone[1]-z0, "\n")
      }
    }
    fun = fun.replace(/~0/gm, "~");
    fnlist.push(fun); //New function for each zone
  }
  return fnlist;
}
