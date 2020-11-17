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
      c = indexOf(getPixelAt(x,z,imgdata), all_colours);
      type = Math.floor(c/base_colours.length);
      // type 0 if it is in base colours, 1 if brighter, 2 if darker shade
      //Block must be at same height; higher; lower; than the one N of it
      lastY = column[column.length - 1];
      switch (type) {
        case 0: 
          column.push(lastY);
          break;
        case 1:
          column.push(lastY + 2);
          break;
        case 2:
          if (lastY < 2) {
            //Blocks can't go lower than base height
            column = column.map(a => a+2);
          }
          column.push(lastY);
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
  var zone_origins=[], x0, z0, i, fnlist=[], yMap, ymax=0;
  //Divide image area into 64x128 zones for individual functions (8164 pixels per zone)
  for (z0=0; z0<imobj.height; z0+=128) {
    for (x0=0; x0<imobj.width; x0+=64) {
      zone_origins.push([x0,z0]);
    }
  }
  if (palette=="extended") {
    ymax = extrainfo;             //If extended, extrainfo contains the max height
    yMap = findYMap(imobj, ymax); // Get the (y) heights if it is a 3D arrangement
  }
  for (i=0; i<zone_origins.length; i++) {
    var fun="", x, z, xloop, zloop, pix, code, replMode, yMap;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    fun += "say Running commands ".concat((i+1), "/", zone_origins.length, 
            " of function group ", name, " (x=", x0, "-", x0+63, ", z=",
            z0, "-", z0+127, ")\nsay Common coords : ", linkpos,
            " | Do not destroy : ", keep, " | Colours : ", palette, 
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
        switch (palette) {
          case "basic" : //2d
            code = indexOf(pix, dye_colours);
            fun += "setblock ~".concat(x, " ~ ~", z, " ", extrainfo, " ",
                  code, replMode); // If basic, extrainfo contains the material name
            break; 
          case "standard" : //2d
            code = base_blocks[indexOf(pix, base_colours)];
            fun += "setblock ~".concat(x, " ~ ~", z, " ", code, replMode);
            break;
          case "extended" : //3d
            code = base_blocks[indexOf(pix, all_colours) % base_colours.length];
            if (linkpos) {
              fun += "setblock ~".concat(x, " ~", yMap[x][z], " ~", z, " ", code,
                                        replMode);
            } else {
              fun += "setblock ~".concat(x, " ~", yMap[x+x0][z+z0], " ~", z, " ",
                                         code, replMode);
            }
            break;
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