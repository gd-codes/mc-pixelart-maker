/*Dynamically addd new form elements to the HTML
They appear identical to the oriiginal ones in index.html
but can be distinguished by a 6 character 'uid' suffix to all
the HTML id attributes, that will be unique (randomly generated)*/

function newImageUpload() {
  var uid = "";
  var charset = "abcdefghijklmnopqrstuvwxyz1234567890";
  for(var rb=0; rb<6; rb++) {
    uid += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  $("#navbarList").append("<li class=\"nav-item\" id=\"link_"+uid+"\">"+
        "<a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabPane_"+uid+"\">New Image</a></li>");
  
  var newpane = [`<div class="tab-pane fade show active" id="tabPane_${uid}"><form id="imageForm_${uid}"><div class="form-group">`,
`<label for="imgInput_${uid}" class="text-primary font-weight-bold">Select an Image</label><div class="custom-file">`,
`<input type="file" class="custom-file-input" id="imgInput_${uid}" accept="image/*" required/>`,
`<label for="imgInput_${uid}" class="custom-file-label">Choose file</label></div></div><div class="form-group row">`,
`<label for="fnNameInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Function name</label>`,
`<div class="col-sm-10"><input type="text" id="fnNameInput_${uid}" class="form-control" pattern="[A-Za-z0-9_.\-()]+"`,
`placeholder="Enter a short identifier for this image..." required/>`,
`<small class="form-text text-muted text-sm-left pl-sm-2">The name can only contain alphanumeric characters`,
`(case <i>in</i>sensitive), periods, underscores, hyphens and parentheses.</small></div></div><div class="form-group row">`,
`<label for="mapSizeInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Area</label>`,
`<div class="col-sm-10"><span class="form-text text-muted">Select the number of Level 0 (128x128) maps that the image `,
`should cover :</span><div id="mapSizeInput_${uid}">`];
  for (var i=1; i<=4; i++) {
    newpane.push("<div class=\"mx-auto\">");
    for (var j=1; j<=4; j++) {
      newpane.push(`<div class="form-check form-check-inline"><input class="form-check form-check-input" 
                 id="mapSize${j}${i}_${uid}" type="radio" name="mapsizeopt_${uid}" value="${j}x${i}" required/>
                <label for="mapSize${j}${i}_${uid}" class="form-check-label">${j}x${i}&nbsp;</label></div>`);
    } newpane.push("</div>");
  }
  newpane = newpane.concat([`</div></div></div><div class="form-group row">`,
`<label for="materialOpts_${uid}" class="col-sm-2 col-form-label text-primary text-center">Palette</label>`,
`<div class="col-sm-10" id="materialOpts_${uid}"><div class="row"><div class="col-auto">`,
`<button class="btn btn-info btn-sm my-auto" type="button" id="materialChooseBtn_${uid}">Customise</button></div>`,
`<div class="col overflow-hidden" style="line-height: 18px;" id="materialOptsDisplay_${uid}"><i class="text-muted">`,
`By default, all colours will be used</i></div></div></div></div><div class="form-group row">`,
`<label for="3dOption_${uid}" class="col-sm-2 col-form-label text-primary text-center">3D</label>`,
`<div class="col-sm-10 pt-sm-2" id="3dOption_${uid}"><div class="custom-control custom-switch">`,
`<input type="checkbox" class="custom-control-input" id="3dSwitch_${uid}"/>`,
`<label for="3dSwitch_${uid}" class="custom-control-label">Use height variation of blocks to obtain additional `,
`lighter and darker shades of each colour (3x the palette !)</label></div></div></div>`,
`<div class="form-group row collapse" id="extraHeightOption_${uid}">`,
`<label for="heightInput_${uid}" class="col-sm-2 col-form-label text-primary text-center">Height</label>`,
`<div class="col-sm-10">`,
`<small class="form-text text-muted pb-sm-1">Maximum height of the 3D structure, between 5 and 255 blocks:</small>`,
`<input type="number" class="form-control" id="heightInput_${uid}" min="5" max="255" placeholder="Enter height... `,
`(at least 50 blocks recommended)"></div></div><div class="form-group row">`,
`<label for="ditherOption_${uid}" class="col-sm-2 col-form-label text-primary text-center">Dither</label>`,
`<div class="col-sm-10 pt-sm-2" id="ditherOption_${uid}"><div class="custom-control custom-switch">`,
`<input type="checkbox" class="custom-control-input" id="ditherSwitch_${uid}"/>`,
`<label for="ditherSwitch_${uid}" class="custom-control-label">Dither converted image <small>(Recommended)</small>`,
`&nbsp;<a data-toggle="tooltip" data-placement="top" data-html="true" title="Apply Floyd-Steinberg Dithering <br>`,
`<a href=&quot;https://en.wikipedia.org/wiki/Dither&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;> `,
`en.wikipedia.org/wiki/Dither</a>" data-delay="{&quot;show&quot;:100, &quot;hide&quot;:2000}" class="text-info">`,
`${questionmark}</a></label></div></div></div><div class="form-group d-flex justify-content-center"`,
`id="formActionsPreSubmit_${uid}"><input type="reset" class="btn btn-outline-danger mx-md-2" id="resetImageFormBtn_${uid}"/>`,
`<button class="btn btn-primary mx-md-2" id="processImageBtn_${uid}" type="submit">Process Image &nbsp; &nbsp;`,
`<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" `,
`xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 `,
`2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 `,
`0 0 1-.708-.708L10.293 8.5H4.5z"/></svg></button></div></form><div class="row d-none justify-content-between" `,
`id="formActionsPostSubmit_${uid}"><div></div><div class="d-inline"><span class="text-right mr-md-1"> View Images </span>`,
`<div class="btn-group"><button class="btn btn-info" id="viewOrigImgBtn_${uid}">Original</button>`,
`<button class="btn btn-info" id="viewResizedImgBtn_${uid}">Resized</button>`,
`<button class="btn btn-info font-weight-bold" id="viewFinalImgBtn_${uid}">Converted</button></div></div>`,
`<button class="btn btn-danger mr-sm-3" id="deleteBtn_${uid}">Delete</button></div></div>`]);
  
  $("#tabContainer").append(newpane.join(""));
  
  console.info("New image form with id suffix", uid);
  
  //Perform all the bindings similar to $document.ready in main.js
  $("#imgInput_"+uid).on('change', function(event) {
    fileInputHandler(this, event.target.files[0]);
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
  $("#materialOptsDisplay_"+uid).data("selected", default_colourlist);
  $("#deleteBtn_"+uid).click(function(){deleteImgForm(this);});
  $('[data-toggle="tooltip"]').tooltip();
  $("li#link_"+uid+" a").click();
  $("#resetImageFormBtn_"+uid).click();
}
