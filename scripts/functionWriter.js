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
 * with minecraft blocks.
 */
function findYMap(imgdata, maxY, shademap) {
  var Ymap = [], x, z, column, type, lastY, min;
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
    column = column.map(a => (a - min) % maxY);
    Ymap.push(column);
  }
  return Ymap;
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

  var zone_origins=[], x0, z0, yMap; 
    //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (let z0=0; z0<image.height; z0+=128) {
    for (let x0=0; x0<image.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  }
  var ymax = ($("#3dSwitch_"+uid+":checked").length > 0)? $("#heightInput_"+uid).val() : 0;
  if (ymax > 1) {
    yMap = findYMap(image, ymax, PictureData[uid]['shadeMap']); // Defined in `functionwriter.js`
  }

  // Begin creating the data for each zone
  // `tabledatas` has a matcing colour index and y coordinate for every pixel in the image
  // `blockcounts` has aggregate colour/material usage data from the image
  // Repeat these for each of the zones & append to html as seperate pages
  var blockcounts = new Array(zone_origins.length + 1);
  blockcounts[0] = new Array(MaterialNames.length).fill(0);
  var tabledatas = new Array(zone_origins.length);
  // blockcounts[0] has total count across all zones, 1..N contain zone-wise blockcounts
  for (let zone=0; zone<zone_origins.length; zone++) { 
    blockcounts[zone+1] = new Array(MaterialNames.length).fill(0);
    let pix, pixnorm, code, y;
    x0 = zone_origins[zone][0]; z0 = zone_origins[zone][1];
    tabledatas[zone] = new Array(128);
    for (let z=0; z<128; z++) {
      tabledatas[zone][z] = new Array(64);
      for (let x=0; x<64; x++) {
        pix = getPixelAt(x+x0,z+z0,image);
        code = Math.floor(indexOfArray(pix, ColourList) / 3);
        y = (ymax <= 1) ? 0 : yMap[x+x0][z+z0];
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

  return { uid: uid, 
    is3D: (ymax > 1), 
    numzones: zone_origins.length, 
    tabledatas:tabledatas, 
    blockcounts:blockcounts, 
    cindexns:cindexns
  };
}

/**
 * Generate minecraft command syntax to place all the blocks for a map art automatically,
 * as a series of function files each corresponding to a zone of 64x128 pixels from the image.
 * @param {string} name - Image name
 * @param {ImageData} imobj - Processed image data containing its dimensions.
 * @param {Number} palettesize - Number of colours used
 * @param {Number} height - Height limit (> 1) for a 3D map, otherwise 0 for a non-3D map
 * @param {Boolean} keep - Whether to keep existing blocks or replace all
 * @param {Boolean} linkpos - Whether to link command coordinates across functions
 * @param {Boolean} strucs - Whether to place blocks using the structure command, else setblock
 * @param {Array<Array<Number>>} shademap - Pixel light/dark variation data to pass to ``
 * @returns Array<string> of the minecraft commands to be saved in function files.
 */
function writeCommands(name, imobj, palettesize, height, keep, linkpos, strucs, shademap) {
  var zone_origins=[], x0, z0, i, fnlist=[], yMap, ymax=1;
  //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (z0=0; z0<imobj.height; z0+=128) {
    for (x0=0; x0<imobj.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  } 
  if (height > 1) {
    ymax = height;             
    yMap = findYMap(imobj, ymax, shademap); 
  }
  for (i=0; i<zone_origins.length; i++) {
    var fun="", x, y, z, xloop, zloop, pix, code, replMode;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    fun += "say Running commands ".concat((i+1), "/", zone_origins.length, 
            " of function group ", name, " (x=", x0, "-", x0+63, ", z=",
            z0, "-", z0+127, ")\nsay Common coords : ", linkpos,
            " | Do not destroy : ", keep, " | Structures : ", strucs,
            " | Colours : ", palettesize, " | Height : ", ymax, "\n");
    /* If positions are linked, coordinates for each zone have same origin (image's top left)
    Else iterate from (0,0) each time - user will have to shift by x=64/z=128 for each zone*/
    xloop = (linkpos)? x0 : 0;
    zloop = (linkpos)? z0 : 0;
    replMode = (keep)? " keep\n" : "\n";
    if (!keep) { //Replace any existing blocks with air
      for (var j=0; j<=ymax; j++) {
        fun+="fill ~".concat(xloop, " ~", j, " ~", zloop, " ~", xloop+63, 
                             " ~", j, " ~", zloop+127, " air [] replace\n");
      }
    }
    for (x=xloop; x < xloop+64; x++) {
      for (z=zloop; z < zloop+128; z++) {
        pix = (linkpos)? getPixelAt(x,z,imobj) : getPixelAt(x+x0,z+z0,imobj);
        code = ColourTokens[Math.floor(indexOfArray(pix, ColourList) / 3)];
        y = (height <= 1)? 0 : ((linkpos)? yMap[x][z] : yMap[x+x0][z+z0]);
        if (strucs) {
          // Load block as structure
          fun += ((keep)?`execute if block ~${x} ~${y} ~${z} air run `:"") + 
              `structure load mapart:${code} ~${x} ~${y} ~${z}\n`;
        } else {
          // Regular placement
          fun += `setblock ~${x} ~${y} ~${z} ${Colours.get(code).id}${replMode}`;
        }
      }
    }
    if (!linkpos && i<zone_origins.length-1) { //If not linked and there are more zones,
      var nextzone = zone_origins[i+1];        //Shift the user to the origin for next zone
      //Marker block
      fun += "structure load mapart:glowstone ~".concat(nextzone[0]-x0, " ~-1 ~", nextzone[1]-z0, "\n");
      fun += "teleport @p ~".concat(nextzone[0]-x0, " ~ ~", nextzone[1]-z0, "\n")
    }
    fun = fun.replace(/~0/gm, "~");
    fnlist.push(fun); //New function for each zone
  }
  return fnlist;
}
