const colourlist = [[220,220,220],[180,180,180],[255,255,255],[132,132,132],[108,108,108],[153,153,153],[65,65,65],
      [53,53,53],[75,75,75],[22,22,22],[18,18,18],[26,26,26],[88,65,44],[72,53,36],[102,75,51],[132,44,44],
      [108,36,36],[153,51,51],[186,108,44],[152,88,36],[216,125,51],[198,198,44],[162,162,36],[230,230,51],[108,176,22],
      [88,144,18],[125,204,26],[88,108,44],[72,88,36],[102,125,51],[66,108,132],[54,88,108],[77,125,153],[88,132,186],
      [72,108,152],[102,153,216],[44,66,152],[36,54,124],[51,77,176],[108,55,152],[88,45,124],[125,64,176],[152,66,186],
      [124,54,152],[176,77,216],[208,108,142],[170,88,116],[241,125,165],[124,100,60],[101,82,49],[144,116,70],[112,74,42],
      [92,61,34],[130,86,49],[128,54,84],[105,44,69],[148,63,97],[50,122,120],[41,100,98],[58,141,139],[130,94,66],
      [106,77,54],[151,109,77],[212,200,140],[173,164,115],[246,232,162],[140,144,158],[115,118,129],[162,167,183],[96,96,96],
      [79,79,79],[111,111,111],[86,86,86],[70,70,70],[100,100,100],[96,0,0],[79,0,0],[111,0,0],[220,216,210],[180,177,172],
      [255,250,243],[116,92,84],[95,75,69],[134,107,97],[18,108,116],[15,88,95],[21,125,134],[0,108,0],[0,88,0],[0,125,0],
      [55,80,20],[45,65,16],[64,93,23],[60,78,38],[49,64,31],[70,90,44],[45,70,45],[37,57,37],[52,81,52],[68,97,27],
      [56,79,22],[79,112,31],[108,144,128],[88,118,105],[125,167,148],[80,20,25],[65,16,20],[93,23,29],[75,37,52],[61,30,43],
      [87,43,60],[162,42,42],[133,34,34],[188,49,49],[15,155,115],[12,127,94],[17,180,133],[78,188,182],[64,154,149],
      [90,218,211],[144,144,144],[118,118,118],[167,167,167],[220,0,0],[180,0,0],[255,0,0],[215,205,65],[176,168,53],
      [249,238,75],[0,188,50],[0,154,41],[0,218,58],[64,110,220],[52,90,180],[74,128,255],[185,150,125],[151,123,102],
      [214,174,145],[180,150,140],[147,123,115],[209,174,162],[50,35,30],[41,29,25],[58,41,35],[65,42,30],[53,34,25],
      [75,49,35],[108,152,48],[88,124,39],[125,176,56],[170,170,170],[139,139,139],[197,197,197],[138,138,220],[113,113,180],
      [160,160,255],[125,160,75],[102,131,61],[145,185,87]];
/*Do NOT change these values. The colours are the same as pixels will be, based on `colourmap` of `imageProcessor.js`
and each colour type appears thrice consecutively in colourlist - regular, dark variant, light variant 
The names in `blocks` are ordered to match colourlist.*/
const blocks = ["concrete 0","concrete 8","concrete 7","concrete 15","concrete 12","concrete 14","concrete 1",
      "concrete 4","concrete 5","concrete 13","concrete 9","concrete 3","concrete 11","concrete 10","concrete 2",
      "concrete 6","planks 0","planks 1","crimson_planks 0","warped_planks 0","dirt 1","sandstone 0","clay 0",
      "stone 0","deepslate 0","netherrack 0","quartz_block 0","waxed_exposed_copper 0","waxed_oxidized_copper 0", 
      "azalea_leaves 1","leaves 12","leaves 14","leaves 13","vine 15","glow_lichen 0","crimson_hyphae 0",
      "warped_hyphae 0","crimson_nylium 0","warped_wart_block 0","diamond_block 0","iron_block 0","redstone_block 0",
      "gold_block 0","emerald_block 0","lapis_block 0","raw_iron_block 0","calcite 0","tuff 0","dripstone_block 0",
      "slime 0","web 0","blue_ice 0","grass 0"];

function getPixelAt(x, z, dataobj) {
  var i = 4*(dataobj.width*(z) + x);
  return [dataobj.data[i], dataobj.data[i+1], dataobj.data[i+2]];
}

function indexOf(x, arr) {
  for (var i=0; i<arr.length; i++) {
    if (x[0]==arr[i][0] && x[1]==arr[i][1] && x[2]==arr[i][2]) {
      return i;
    }
  } //Arrays are in different variables -> normal comparison always false
}

function findYMap(imgdata, maxY) {
  var Ymap = [], x, z, column, c, type, lastY;
  for (x=0; x<imgdata.width; x++) {
    column = [0];
    for (z=0; z<imgdata.height; z++) {
      c = indexOf(getPixelAt(x,z,imgdata), colourlist);
      type = c % 3;
      // type 0 if it is in base colours, 1 if darker, 2 if brighter shade
      //Block must be at same height; lower; higher; than the one N of it
      lastY = column[column.length - 1];
      switch (type) {
        case 0: 
          column.push(lastY);
          break;
        case 1:
          if (lastY < 2) { //Blocks can't go lower than base height
            column = column.map(a => a+2);
          }
          column.push(lastY);
          break;
        case 2:
          column.push(lastY + 2);
          break;
      }
    }
    //Bring everything within height limit
    column = column.map(a => a % maxY);
    Ymap.push(column);
  }
  return Ymap;
}

function writeCommands(name, imobj, palette, extrainfo, keep, linkpos) {
  var zone_origins=[], x0, z0, i, fnlist=[], yMap, ymax=1;
  //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (z0=0; z0<imobj.height; z0+=128) {
    for (x0=0; x0<imobj.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  } 
  if (extrainfo > 1) {
    ymax = extrainfo;             //If extended, extrainfo contains the max height
    yMap = findYMap(imobj, ymax); // Get the (y) heights if it is a 3D arrangement
    console.log(yMap);
  }
  for (i=0; i<zone_origins.length; i++) {
    var fun="", x, z, xloop, zloop, pix, code, replMode, yMap;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    fun += "say Running commands ".concat((i+1), "/", zone_origins.length, 
            " of function group ", name, " (x=", x0, "-", x0+63, ", z=",
            z0, "-", z0+127, ")\nsay Common coords : ", linkpos,
            " | Do not destroy : ", keep, " | Colours : ", palette.length, 
            " | Height : ", ymax, "\n");
    /* If positions are linked, coordinates for each zone have same origin (image's top left)
    Else iterate from (0,0) each time - user will have to shift by x=64/z=128 for each zone*/
    xloop = (linkpos)? x0 : 0;
    zloop = (linkpos)? z0 : 0;
    replMode = (keep)? " keep\n" : "\n";
    if (!keep) { //Replace any existing blocks with air
      for (var j=0; j<=ymax; j++) {
        fun+="fill ~".concat(xloop, " ~", j, " ~", zloop, " ~", xloop+63, 
                             " ~", j, " ~", zloop+127, " air 0 replace\n");
      }
    }
    for (x=xloop; x < xloop+64; x++) {
      for (z=zloop; z < zloop+128; z++) {
        pix = (linkpos)? getPixelAt(x,z,imobj) : getPixelAt(x+x0,z+z0,imobj);
        code = blocks[Math.floor(indexOf(pix, colourlist) / 3)];
        if (extrainfo <= 1) { //2d
          fun += "setblock ~".concat(x, " ~ ~", z, " ", code, replMode);
        } else { //3d
          fun += "setblock ~".concat(x, " ~", yMap[x][z], " ~", z, " ", code, replMode);
        }
      }
    }
    if (!linkpos && i<zone_origins.length-1) { //If not linked and there are more zones,
      var nextzone = zone_origins[i+1];        //Shift the user to the origin for next zone
      fun += "setblock ~".concat(nextzone[0]-x0, " ~ ~", nextzone[1]-z0, 
                                 " cobblestone 0\n"); //Marker block
      fun += "teleport @p ~".concat(nextzone[0]-x0, " ~ ~", nextzone[1]-z0, "\n")
    }
    fun = fun.replace(/~0/gm, "~");
    fnlist.push(fun); //New function for each zone
  }
  return fnlist;
}
