/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/

const materialnames = [];
Colours.forEach(function(value, key) {
  materialnames.push(value.name)
});
const colourtokens = Array.from(Colours.keys());



function newImageUpload(uid) {
  /* Generate a new Image Form */
  var charset = "abcdefghijklmnopqrstuvwxyz1234567890";
  if (typeof(uid) !== 'string' || uid.length !== 6) {
    uid = "";
    for(var rb=0; rb<6; rb++) {
      uid += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  }
  // random 6-char uid appended to the HTML DOM id of all elements makes them distinguishable
  $("#navbarList").append(`<li class="nav-item" id="link_${uid}"><a class="nav-link" data-toggle="tab" 
      href="#tabPane_${uid}">New Image<span id="deleteBtn_${uid}" class="delete-X"> &nbsp; &times;</span></a></li>`);
  

  var formHTMLcontent = `
  <div class="tab-pane fade show active" id="tabPane_${uid}">
  <form id="imageForm_${uid}">
    <div class="form-group">
      <label for="imgInput_${uid}" class="text-primary font-weight-bold">Select an Image</label>
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="imgInput_${uid}" accept="image/*" required/>
        <label for="imgInput_${uid}" class="custom-file-label">Choose file</label>
      </div></div>
    <div class="form-group row">
      <label for="fnNameInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Function name</label>
      <div class="col-sm-10">
      <input type="text" id="fnNameInput_${uid}" class="form-control" pattern="[A-Za-z0-9_&#92;.&#92;-()]+"
             placeholder="Enter a short identifier for this image..." required/>
      <small class="form-text text-muted text-sm-left pl-sm-2">The name can only contain alphanumeric characters
        (case <i>in</i>sensitive), periods, underscores, hyphens and parentheses.</small></div>
    </div>
    <div class="form-group row">
      <label for="mapSizeInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Area</label>
      <div class="col-sm-10">
        <span class="form-text text-muted">Select the number of Level 0 (128x128) maps that the image should cover :</span>
        <div id="mapSizeInput_${uid}">
  `;
  for (var i=1; i<=4; i++) {
    formHTMLcontent += "<div class=\"mx-auto\">";
    for (var j=1; j<=4; j++) {
      formHTMLcontent += `<div class="form-check form-check-inline">
          <input class="form-check form-check-input" id="mapSize${j}${i}_${uid}" type="radio" name="mapsizeopt_${uid}" value="${j}x${i}" required/>
          <label for="mapSize${j}${i}_${uid}" class="form-check-label">${j}x${i}&nbsp;</label></div>`;
      if (i==1 && j%2) formHTMLcontent += "&nbsp;";
    } 
    formHTMLcontent += "</div>";
  }
  formHTMLcontent += `
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="materialOpts_${uid}" class="col-sm-2 col-form-label text-primary text-center">Palette</label>
      <div class="col-sm-10" id="materialOpts_${uid}">
        <div class="row">
          <div class="col-auto">
            <button class="btn btn-info btn-sm my-auto" type="button" id="materialChooseBtn_${uid}">Customise</button>
          </div>
          <div class="col overflow-hidden" style="line-height: 18px;" id="materialOptsDisplay_${uid}" data-selected="">
            <i class="text-muted">By default, all colours will be used</i>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group row">
      <label for="3dOption_${uid}" class="col-sm-2 col-form-label text-primary text-center">3D</label>
      <div class="col-sm-10 pt-sm-2" id="3dOption_${uid}"><div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="3dSwitch_${uid}"/>
        <label for="3dSwitch_${uid}" class="custom-control-label">Use height variation of blocks to obtain additional 
          lighter and darker shades of each colour (3x the palette !)
        </label>
      </div></div>
    </div>
    <div class="form-group row collapse" id="extraHeightOption_${uid}">
      <label for="heightInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Height</label>
      <div class="col-sm-10">
        <small class="form-text text-muted pb-sm-1">Height range of the 3D structure, between 5 and 380 blocks:</small>
        <input type="number" class="form-control" id="heightInput_${uid}" min="5" max="380" 
               placeholder="Enter a height range (recommended - at least 50 blocks)">
      </div>
    </div>
    <div class="form-group row">
      <label for="ditherOption_${uid}" class="col-sm-2 col-form-label text-primary text-center">Dither</label>
      <div class="col-sm-10 pt-sm-2" id="ditherOption_${uid}"><div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="ditherSwitch_${uid}"/>
        <label for="ditherSwitch_${uid}" class="custom-control-label">Dither converted image <small>(Recommended)</small>
        </label> &nbsp;
        <a data-toggle="tooltip" data-placement="top" data-html="true" title="Apply Floyd-Steinberg Dithering <br> 
          <a href=&quot;https://en.wikipedia.org/wiki/Dither&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;> 
          en.wikipedia.org/wiki/Dither</a><br> This is good for photographs, but may not be necessary for cartoons/etc with
          solid colours (no gradients)" data-delay="{&quot;show&quot;:100, &quot;hide&quot;:2000}" 
        class="text-info">${icons.questionmark}</a>
      </div></div>
    </div>
    <div class="form-group d-flex justify-content-center" id="formActionsPreSubmit_${uid}">
      <input type="reset" class="btn btn-outline-danger mx-md-2" id="resetImageFormBtn_${uid}"/>
      <button class="btn btn-primary mx-md-2" id="processImageBtn_${uid}" type="submit">Process Image &nbsp; &nbsp;
        <svg width="1em" height="1em" viewbox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" 
             xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
        </svg></button>
    </div>
  </form>
  <div class="row d-none justify-content-between" id="formActionsPostSubmit_${uid}">
    <div></div>
    <div class="d-inline">
      <span class="text-right mr-md-1"> View Images </span>
      <div class="btn-group">
        <button class="btn btn-outline-info" id="viewOrigImgBtn_${uid}">Original</button>
        <button class="btn btn-outline-info" id="viewResizedImgBtn_${uid}">Resized</button>
        <button class="btn btn-info font-weight-bold" id="viewFinalImgBtn_${uid}">Converted</button>
      </div>
    </div>
    <button class="btn btn-warning mr-sm-3" id="imgEditBtn_${uid}">Edit</button>
  </div>
  </div>
  `;
  $("#tempErrDialog").remove();
  $("#tabContainer").append(formHTMLcontent);
  
  console.info("New image form with id suffix", uid);
  
  //Perform all the bindings similar to $document.ready in main.js
  $("#imgInput_"+uid).on('change', function(event) {
    fileInputHandler(this, event.target.files[0]);
    $("body").data("confirm-page-unload", "1");
  }); 
  $("#resetImageFormBtn_"+uid).closest('form').on('reset', function() {
    resetImgHandler(this);
  }); 
  $("#3dOption_"+uid).on('click', function() {
    displayPaletteOptions(this);
  });
  $("#materialChooseBtn_"+uid).on('click', function() {
    configureColourModal(this);
  });
  $("#imageForm_"+uid).submit(function(event){
    submitImgFormHandler(this, event);
  });
  $("#deleteBtn_"+uid).click( function() { 
    deleteImgForm(this); 
  });
  $("#imgEditBtn_"+uid).click(function() {
    editImgForm(this);
  });
  $("#materialOptsDisplay_"+uid).data("selected", default_palette);
  $('[data-toggle="tooltip"]').tooltip();
  $("li#link_"+uid+" a").click();
  $("#resetImageFormBtn_"+uid).click();
  
  PictureData[uid] = {
    originalImage: undefined,
    finalImage: undefined,
    shadeMap: undefined
  }
  refreshColourDisplay(uid);
}



function createSurvivalGuide(uid) {
  $("#survGuidePlaceholderText").html(`<p class="d-block"><strong class="text-muted">Note </strong>: For convenience, each 
artwork is divided into a number of zones (the same way that <a rel="nofollow" href="manual.html#in-mc" target="_blank">
the commands</a> are), 2 halves per map. <br/>Coordinates in each zone are specified relative to its top-left (NW) corner. </p>`);
  var divlist = [], htm = [], navlist = [`<li class="page-item disabled"><a class="page-link text-dark bg-light border-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-window-reverse" viewBox="0 0 16 16">
    <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
    <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"/></svg></a></li>`];

  try {
    var image = PictureData[uid]['finalImage']; 
    //let fname = $("#fnNameInput_"+uid).val();
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
  // `table` has a matcing coloured cell for every pixel in the image
  // `countlist` is a table of the total occurrences
  // Repeat these for each of the zones & append to html as seperate pages
  var counts = new Array(zone_origins.length).fill(0);
  counts[0] = new Array(materialnames.length).fill(0);
  // counts[0] has total block counts across all zones, 1..N contain zone-wise counts
  for (let i=0; i<zone_origins.length; i++) { // begin outer for loop ------------------------
    counts[i+1] = new Array(materialnames.length).fill(0);
    let table = [`<table class="table table-responsive">`], 
        countlist = [`<table class="table table-hover table-sm" id="countlistTable_${i}_${uid}">`,
                     `<caption class="text-dark">Palette Usage - Zone ${i+1}</caption><thead class="thead-light"><tr class="py-3">`,
                     `<th scope="col" class="pl-3">Material</th><th scope="col">Count</th><th scope="col" class="d-none">Count</th>`,
                     `<th scope="col" class="d-none">Count (Total)</th><th scope="col" class="d-none">Count (Total)</th></tr></thead><tbody>`];
    let pix, pixnorm, code, y;
    x0 = zone_origins[i][0]; z0 = zone_origins[i][1];
    for (let z=0; z<128; z++) {
      table.push("<tr>");
      for (let x=0; x<64; x++) {
        pix = getPixelAt(x+x0,z+z0,image);
        code = Math.floor(indexOfArray(pix, colourlist) / 3);
        pixnorm = colourlist[3*code]; // Regular shade (not light/dark pixel), even for 3D colours
        y = (ymax <= 1) ? 0 : yMap[x+x0][z+z0] ;
        table.push(`<td tabindex="0" style="background-color: rgb(${pixnorm[0]},${pixnorm[1]},${pixnorm[2]});" `+
        `data-trigger="focus" data-content="Position : &lt;b&gt;~${x} ~${y} ~${z}&lt;/b&gt;" data-html="true" ` + 
        `data-placement="top" title="${materialnames[code]}"></td>`);
        counts[i+1][code] += 1;
        counts[0][code] += 1;
      }
      table.push("</tr>");
    }
    table.push("</table>");
    
    countlist.push(`</tbody></table>`);
    
    htm = [`<div class="collapse" id="guidePage_${i+1}_map_${uid}" data-parent="#survGuide_${uid}">`,
           `<div class="row"><div class="col-md-4" id="survGuideBlockCount_${i+1}_${uid}"><div class="alert alert-info">`,
           `<p class="alert-heading">${icons.infosquare}</p>`,
           `<p>Click on any of the squares in the table to view a popup with its block type and coordinates.`,
           `<br/>You can also use the <code>Tab</code> key to navigate row-by-row.</p>`+
           ((ymax <= 1) ? `` : `<p>For 3D map art, the shading of lighter/darker blocks is not shown here to make it easier to distinguish between different blocks. Refer to the converted image preview for the actual colours.</p>`),
           `</div><div class="px-2 py-2"><input type="checkbox" class="mx-2" id="guideTotalBlockCount_${i}_${uid}"/>`,
           `<label for="guideTotalBlockCount_${i}_${uid}">View total count for all zones</label><br/>`,
           `<input type="checkbox" class="mx-2" id="guideStackViewCount_${i}_${uid}"/><label for="guideStackViewCount_${i}_${uid}">Display values in stacks of 64</label></div>`
          ].concat(
        countlist, 
        [`</div><div class="col-md-8 guide-tableareas" id="survGuideTableArea_${i+1}_${uid}">`], 
        table, 
        [`</div></div></div>`]);
    
    navlist.push(`<li class="page-item"><a class="page-link" data-toggle="collapse" ` + 
                 `href="#guidePage_${i+1}_map_${uid}">${i+1}</a></li>`);
    divlist.push(htm.join(""));
  // end outer for loop ------------------------
  } 
  
  // Add the html string to DOM
  $("#guideTab_"+uid).html([`<nav aria-label="Pagination" id="guidePageBar_${uid}">`,
      `<ul class="pagination justify-content-center">`,
      navlist.join(""), 
      `</ul></nav><div class="accordion border-top border-light pt-2" id="survGuide_${uid}">`,
      divlist.join(""),
      `</div>`].join(""));
  $(`#guidePageBar_${uid} li.page-item`).click(function() {
    switchActiveGuidePage(this);
  });

  // Populate values in the counts table
  for (let i=0; i<zone_origins.length; i++) {
    var tdata = "";
    for (let ct of pal) {
      let indexn = colourtokens.indexOf(ct);
      tdata += `<tr><td class="pl-4">${materialnames[indexn]}</td><td class="text-right pr-3">${counts[i+1][indexn]}</td>
              <td class="d-none text-right pr-3">${Math.floor(counts[i+1][indexn] / 64)}s + ${counts[i+1][indexn] % 64}</td>
              <td class="d-none text-right pr-3">${counts[0][indexn]}</td>
              <td class="d-none text-right pr-3">${Math.floor(counts[0][indexn] / 64)}s + ${counts[0][indexn] % 64}</td>
              </tr>`;
    }
    $(`#countlistTable_${i}_${uid} > tbody`).html(tdata);
  }

  // Keeping 16,000+ popovers at once = horrible performance. Hence create and destroy active one each time while focused
  $(`.guide-tableareas td`).focus(function() {
    $(this).data('toggle', 'popover');
    $(this).popover('show');
  });
  $(`.guide-tableareas td`).blur(function() {
    $(this).popover('dispose');
    $(this).removeData('toggle');
  });
  // Bind count control checkboxes
  for (let i=0; i<zone_origins.length; i++) {
    $(`#guideTotalBlockCount_${i}_${uid}`).click( function() {
      toggleCountListView(uid, zone_origins.length, $(this).prop('checked'), $(`#guideStackViewCount_${i}_${uid}`).prop('checked'))
    });
    $(`#guideStackViewCount_${i}_${uid}`).click( function() {
      toggleCountListView(uid, zone_origins.length, $(`#guideTotalBlockCount_${i}_${uid}`).prop('checked'), $(this).prop('checked'))
    });
  }
  // Make page 1 visible & active
  $(`#guidePageBar_${uid} li.page-item`).eq(1).click();
  $(`#guidePage_1_map_${uid}`).addClass("show");
}


function toggleCountListView(uid, l, total, stacks) {
  // Show the correct column in countlist table
  for (let i=0; i<l; i++) {
    $(`#guideTotalBlockCount_${i}_${uid}`).prop('checked', total)
    $(`#guideStackViewCount_${i}_${uid}`).prop('checked', stacks)
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(2)`).addClass('d-none');
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(3)`).addClass('d-none');
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(4)`).addClass('d-none');
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(5)`).addClass('d-none');
    var n = (total) ? ((stacks) ? 5 : 4) : ((stacks) ? 3 : 2);
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(${n})`).removeClass('d-none');
  }
}


function switchActiveGuidePage(pagelink) {
  // Pagination active status does not change automatically
  let off = $(pagelink).hasClass("active");
  $(pagelink).closest("ul").find("li.active").removeClass('active');
  if (!off) {
    $(pagelink).addClass('active');
  }
}
