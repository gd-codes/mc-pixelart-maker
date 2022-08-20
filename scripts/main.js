/*
Minecraft Pixel Art Maker
© gd-codes 2020
https://gd-codes.github.io/mc-pixelart-maker/
*/
const icons = {
  square : "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid black; border-radius: 15%;\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>",
  square_noborder : "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>",
  questionmark : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-question-circle\" > <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z\"/></svg>",
  infosquare : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`
};

const default_palette = Array.from(Colours.keys()).join(' ');

/* NOTE
Many other constants used here are defined in `data.js` and methods in other JS files.
See the order of <script> tags in index.html
*/


/*---------------------------------------------------------
                  Check for events
1. Ask user to confirm before closing the tab
2. Bind all UI elements to appropriate callbacks when DOM is loaded
3. Lazy-load carousel images after page loads 
-----------------------------------------------------------*/




function setup() {
  //Bind buttons and links to their actions
  // ---------------------------------------------
  console.log("Minecraft Pixel Art Maker - Document Ready !");
  
  // Create the first form that is visible when page is opened
  newImageUpload("000001");
  /* NOTE
  Dynamically generated image forms (green plus button to add extra images) have a random 6 character suffix
  in HTML ids of all DOM elements within the form that have an `id` attribute. 
  This is refered to as `uid` in most functions that use it here in JS.
  The uid of the one form already on the page when the website is opened (index.html) is "000001"
   */

  $("#addNewImgBtn").click(newImageUpload);
  
  $("#writePackBtn").click(function(event) {
    startCreateBhvPack(event);
    $("body").data("confirm-page-unload", "1");
  });
  $("#resetAddonDiv").click(function(event) {
    clearBehaviourPack();
  });

  //Construct Colour table modal and setup controls
  $("#clrSelBtn_All").click(function() { $("input[name='clrSelect']").prop('checked', true); });
  $("#clrSelBtn_None").click(function() { $("input[name='clrSelect']").prop('checked', false); });
  $("#clrSelBtn_Inv").click(function() {  
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', !$(elem).prop('checked'));
    });
  });
  $("#clrSelBtn_Dye").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', Colours.get($(elem).attr('value')).is_dye);
    });
  });
  $("#clrSelBtn_greys").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', Colours.get($(elem).attr('value')).is_greyscale);
    });
  });
  $("#clrSelBtn_NB").click(function() { 
    $("input[name='clrSelect']").each(function(index, elem) {
      if (Colours.get($(elem).attr('value')).is_biomevar) $(elem).prop('checked', false);
    });
  });

  let clrTable = "";
  Colours.forEach(function(value, key) {
      clrTable += `<tr>
      <td><div class="form-check checkbox-scaled">
        <input type="checkbox" class="form-check-input position-static" name="clrSelect" value="${key}"/>
      </div></td>
      <td class="colour-insert display-4" data-colour="rgb(${value.rgb[0]},${value.rgb[1]},${value.rgb[2]})">
        <span style="color: rgb(${value.rgb[0]},${value.rgb[1]},${value.rgb[2]});">${icons.square}</span>
      </td>
      <td> ${value.name} </td>
      <td> ${value.description} </td>
    </tr>`;
  });
  $("#colourPaletteTable tbody").html(clrTable);
  

  //Initial setup

  $(".add-questionmark").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html(h+icons.questionmark);
  });

  $('[data-toggle="tooltip"]').tooltip();

  // Prevent links in PWA window opening in browser
  const isPWA = window.matchMedia('(display-mode: standalone)');
  if (isPWA.matches) {
    $('a.alert-link[target="_blank"]').removeAttr('target');
  }
  
  //----------------------------------------------
  // End of setup function
}


function confirmCloseTab(event) {
  if (Number($("body").data("confirm-page-unload"))) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }
}

function lazyload() {
  // Add the carousel images to index.html
  for (var i=1; i<=5; i++) {
    $("div#cari"+i+" > img").attr('src', "images/d"+i+".png");
  }
  $("#demoCarousel").carousel({interval: 2000});
}



window.addEventListener('beforeunload', confirmCloseTab);
$(document).ready(setup);
$(window).on('load', lazyload);




/* --------------------- Begin Callback definitions ------------------------ */

function fileInputHandler(elem, file) {
  /* When a file is chosen, save it as a data: URI in the `PictureData` global object */
  $(elem).next('.custom-file-label').html(file.name);
  var uid = $(elem).attr('id').slice(-6);
  var reader = new FileReader();
  reader.onload = function(loadevent){
    PictureData[uid]['originalImage'] = loadevent.target.result;
  }
  reader.onerror = function(e){
    alert("Error\n\nThere was a problem loading this image.");
  }
  reader.readAsDataURL(file);
}


function resetImgHandler(elem) {
  /* Reset an image upload form to its default blank state, 
  and also pre-select default options in checkboxes/radiobuttons */
  var uid = $(elem).attr('id').slice(-6);
  setTimeout(function() {
    $("#ditherSwitch_"+uid).prop("checked", true);
    $("#mapSize11_"+uid).prop("checked", true);
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
    refreshColourDisplay(uid);
    $("#3dSwitch_"+uid).prop('checked', false);
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  });
}


function displayPaletteOptions(elem) {
  /* Display the correct extra fields in the image upload form */
  var uid = $(elem).attr('id').slice(-6);
  if ($("#3dSwitch_"+uid).prop('checked')) {
    $("#extraHeightOption_"+uid).collapse('show');
    $("input#heightInput_"+uid).attr("required", true);
  } else {
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  }
}


function configureColourModal(elem) {
  /* Set the state of the checkboxes in the colour table modal to match the selected values
  in the material/palette. Called initially and whenever the modal is opened. */
  var uid = $(elem).attr('id').slice(-6);
  var sel = $("#materialOptsDisplay_"+uid).data("selected");
  $("input[name='clrSelect']").each(function(index, chekbox) {
    $(chekbox).prop('checked', (sel.includes($(chekbox).attr('value'))));
  });
  $("#saveColoursBtn").off('click');
  $("#saveColoursBtn").click(function() {
    var clrset = [];
    $("input[name='clrSelect']").each(function(index, chekbox2) {
      if ($(chekbox2).prop('checked')) {
        clrset.push($(chekbox2).attr('value'));
      }
    });
    $("#materialOptsDisplay_"+uid).data("selected", clrset.join(" "));
    refreshColourDisplay(uid);
  });
  $("#colourTableModal").modal('show');
}


function refreshColourDisplay(uid) {
  /* Set the small square colour markers in the currently selected palette display on the image upload form.
   Called initially and whenever the selected palette changes */
  var htmlc = [];
  for (var c of $("#materialOptsDisplay_"+uid).data("selected").split(" ")) {
    let cd = Colours.get(c);
    if (cd!==undefined)
      htmlc.push(`<span style="color:rgb(${cd.rgb[0]},${cd.rgb[1]},${cd.rgb[2]}); padding: 2px;">${icons.square_noborder}</span>`);
  }
  var content = htmlc.join("");
  if (content.search(/\w/i) < 0) {
    content = "<i class=\"text-muted\">By default, all colours will be used</i>";
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
  } 
  $("#materialOptsDisplay_"+uid).html(content);
}


function submitImgFormHandler(elem, event) {
  /*Client side validation, 
  disable fields to prevent changes as some data is retrieved again later,
  then process the image (`analyseImage` of imageProcessor.js)*/
  event.preventDefault();
  var uid = $(elem).attr('id').slice(-6);
  var name = $("#fnNameInput_"+uid).val();
  // Validate no duplicate/conflicting names in multiple images
  for (var x of $("input[id^=fnName]")) {
    var otherid = $(x).attr('id').slice(-6);
    if ((otherid!=uid) && 
        ($(x).val().toUpperCase() == name.toUpperCase()) && 
        ($(x)[0].hasAttribute("disabled"))) {
      alert("Error \n\nYou have already used the function name \""+name+
           "\" for another image.\nPlease enter a new unique name !");
      return;
    }
  }
  // Collect all data from image upload form fields
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var palette = $("#materialOptsDisplay_"+uid).data("selected");
  var d3 = Boolean($("#3dSwitch_"+uid+":checked").length > 0);
  var dither = Boolean($("#ditherSwitch_"+uid+":checked").length > 0);
  // Read the uploaded image data from stored base64 URI, and disable the form and begin analysis
  var image = new Image();
  image.onload = function() {
    var analysis = analyseImage(uid, image, area, palette, d3, dither);
    if (!analysis) {
      $("form#imageForm_"+uid+" :input").prop('disabled', true);
      $("form#imageForm_"+uid+" :radio").prop('disabled', true);
      $("form#imageForm_"+uid+" :checkbox").prop('disabled', true);
      $("form#imageForm_"+uid+" :file").prop('disabled', true);
      $("#formActionsPreSubmit_"+uid).addClass("d-none");
      $("#formActionsPreSubmit_"+uid).removeClass("d-flex");
      $("#formActionsPostSubmit_"+uid).addClass("d-flex");
      $("#formActionsPostSubmit_"+uid).removeClass("d-none");
      $("#navbarList li[id='link_"+uid+"'] a").html(
        name + `<span id="deleteBtn_${uid}" class="delete-X"> &nbsp; &times;</span>`
      );
      $("#deleteBtn_"+uid).click( function(event){deleteImgForm(this);} );
      
      deleteSurvivalGuide(uid, true);
      
    } else {
      alert("Error\n\nAn unknown error occurred while processing");
      console.error("Error processing image "+uid);
    }
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.onerror = function() {
    alert("Error\n\nThere was a problem reading the uploaded image !");
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.src = PictureData[uid]['originalImage'];
}


function deleteImgForm(elem) {
  /* Delete an image upload form and all its associated data */
  var uid = $(elem).attr('id').slice(-6);
  var name = $("#fnNameInput_"+uid).val();
  if (! name) {name = "this image form";}
  var verify = confirm("Delete "+name+" : \nAre you sure ?");
  if (verify) {
    $("#link_"+uid).remove();
    $("#tabPane_"+uid).remove();
    delete PictureData[uid];
    console.info("Removed image form ", uid);
    deleteSurvivalGuide(uid);
    $("#navbarList a.nav-link").first().click();
  }
}


function editImgForm(elem) {
  /* Un-disable a submitted image form's fields */
  var uid = $(elem).attr('id').slice(-6);
  $("form#imageForm_"+uid+" :input").prop('disabled', false);
  $("form#imageForm_"+uid+" :radio").prop('disabled', false);
  $("form#imageForm_"+uid+" :checkbox").prop('disabled', false);
  $("form#imageForm_"+uid+" :file").prop('disabled', false);
  $("#formActionsPreSubmit_"+uid).removeClass("d-none");
  $("#formActionsPreSubmit_"+uid).addClass("d-flex");
  $("#formActionsPostSubmit_"+uid).removeClass("d-flex");
  $("#formActionsPostSubmit_"+uid).addClass("d-none");
  $("#viewOrigImgBtn_"+uid).off('click');
  $("#viewResizedImgBtn_"+uid).off('click');
  $("#viewFinalImgBtn_"+uid).off('click');
}


function uuidv4() {
  // https://stackoverflow.com/a/2117523
  // Used to generate UUIDs for the behaviour pack
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

function startCreateBhvPack(event) {
  /* Collect all processed image data on the page, generate 2 UUIDs, and proceed to write
  the behaviour pack containing all images that have complete data (submitted forms) */
  event.preventDefault();
  var f, processed=[];
  for (f of $("form[id^='imageForm']")) {
    let uid = $(f).attr('id').slice(-6);
    if (PictureData[uid]['finalImage']!=undefined) {
      processed.push({uid: uid,
                      name: $("#fnNameInput_"+uid).val(),
                      pic: PictureData[uid]['finalImage']
                    });
    } 
  }
  var l = $("form[id^='imageForm']").length - processed.length;
  if (l > 0) {
    let w = confirm("Warning\n\n"+l+" of the image forms have not been processed."+
                    "These will not be included in the pack - Continue anyway ?");
    if (!w) {return;}
  }
  $("#spinnerModal").addClass('d-block');
  $("#spinnerModal").removeClass('d-none');
  
  writeBhvPack(processed, [uuidv4(), uuidv4()]);
}



function writeBhvPack(images, uuids) {
  /* Create the Add-on ZIP file and make it available for download */
  var pack = new JSZip();
  // Manifest
  var manifest = JSON.stringify({
    format_version: 2,
    header: {
      name: $("#bpackNameInput").val(),
      description: $("#bpackDescInput").val(),
      uuid: uuids[0],
      version: [1,0,0],
      min_engine_version: [1,19,0]
    },
    modules: [{
      description: "Created with https://gd-codes.github.io/mc-pixelart-maker, on " + new Date().toDateString(),
      type: "data",
      uuid: uuids[1],
      version: [1,0,0]
    }]
  }, null, 2);
  pack.file('manifest.json', manifest);
  // Icon, containing site logo and preview of up to 4 images that are in the pack
  var icon;
  if (images.length>4) {
    icon = makeLogo(images.reverse().slice(-4).map(x => x.pic));
  } else if (images.length==0) {
    icon = makeLogo([]);
  } else {
    icon = makeLogo(images.reverse().map(x => x.pic));
  }
  pack.file('pack_icon.png', icon.split(',')[1], {base64:true});
  // Get values of pack settings
  var keep = Boolean($("#keepBlocks:checked").length > 0);
  var link = Boolean($("#useLinkedPos:checked").length > 0);
  var strucs = Boolean($("#buildWithStructures:checked").length > 0);
  // Write the functions for each image - see `functionWriter.js`
  var fnfolder = pack.folder('functions');
  for (let o of images) {
    let palette = $("#materialOptsDisplay_"+o.uid).data("selected").split(" ");
    let extrainfo = ($("#3dSwitch_"+o.uid+":checked").length > 0)? $("#heightInput_"+o.uid).val() : 0;
    let shm = PictureData[o.uid]['shadeMap'];
    let fnlist = writeCommands(o.name, o.pic, palette, extrainfo, keep, link, strucs, shm);
    for (let f=0; f<fnlist.length; f++) {
      fnfolder.file(o.name+"/"+(f+1)+".mcfunction", fnlist[f]);
    }
  }
  // Include structures
  var strfolder = pack.folder('structures');
  strfolder.file("mapart/azalea_leaves.mcstructure", Structures.azalea_leaves, {base64:true});
  strfolder.file("mapart/glow_lichen.mcstructure", Structures.glow_lichen, {base64:true});
  strfolder.file("mapart/glowstone.mcstructure", Structures.glowstone, {base64:true});
  if (strucs) {
    Colours.forEach(function(value, key){
      strfolder.file(`mapart/${key}.mcstructure`, value.structure, {base64:true});
    })
  }
  // Prepare the ZIP file for download
  pack.generateAsync({type:"blob"})
    .then(function(blob) {
        setSaveAsZip(blob);
        $("#spinnerModal").addClass('d-none');
        $("#spinnerModal").removeClass('d-block');
    }, function (err) {
        alert("Uh oh\nSomething went wrong !");
        console.error("Unexpected error creating blob : \n", err);
        $("#spinnerModal").addClass('d-none');
        $("#spinnerModal").removeClass('d-block');
  });
  pack.generateAsync({type:"base64"})
    .then(function(uri) {
     uri = "data:application/zip;base64," + uri;
      $("#altDownloadPack").click(function(event) {
        event.preventDefault();
        saveAs(uri, "mapart.mcpack");
      })
    }, function(err) {
      alert("Uh oh\nSomething went wrong !");
      console.error("Unexpected error creating Data URL : \n", err);
  });
}



function setSaveAsZip(blob) {
  /* Configure download link for the generated ZIP above */
  $("#packActionsPreProcess").addClass('d-none');
  $("#packActionsPostProcess").removeClass('d-none');
  $("#downloadPackBtn").click(function() {
    saveAs(blob, "mapart.mcpack");
  });
}

function clearBehaviourPack() {
  /* Reset the generate addon form */
  $("#packActionsPostProcess").addClass('d-none');
  $("#packActionsPreProcess").removeClass('d-none');
  $("#downloadPackBtn").off("click");
  $("#altDownloadPack").off("click");
  $("#packForm")[0].reset();
}


function addSurvGuideGenerator(uid) {
  /* Add the generate survival guide form for an image. 
  Called after an image form is succesfully submitted. */
  let fname = $("#fnNameInput_"+uid).val();
  let big = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  big = Number(big[0]) * Number(big[2]); // Additional warning for large picures
  if (big > 6) {
    $("#guideTabsContainer").append(`<div class="tab-pane fade show" id="guideTab_${uid}">
<div class="row mb-2"><div class="col-md-4"></div><div class="col-md-4 btn btn-outline-info btn-block" 
id="genGuideBtn_${uid}">View Map Guide for ${fname}</div><div class="col-md-4"></div></div>
<div class="alert alert-danger mx-auto p-2 mt-3 mb-0"><p class="text-center mb-0"><strong class="text-dark">Warning &nbsp; </strong>
Generating the detailed guide for such a large image may possibly cause lag/performance issues. Proceed with caution.
</p></div></div>`);
  } else {
    $("#guideTabsContainer").append(`<div class="tab-pane fade show" id="guideTab_${uid}">
<div class="row mb-2"><div class="col-md-4"></div><div class="col-md-4 btn btn-outline-info btn-block" 
id="genGuideBtn_${uid}">View Map Guide for ${fname}</div><div class="col-md-4"></div></div></div>`);
  }
  
  $("#guideTabList").append(`<li class="nav-item" id="guidelink_${uid}"><a class="nav-link" data-toggle="tab" 
      href="#guideTab_${uid}">${fname} <span id="deleteGuide_${uid}" class="delete-X"> &nbsp; &times;</span></a></li>`);
  
  $("#deleteGuide_"+uid).click( function(){deleteSurvivalGuide(uid);} );
  
  $("#genGuideBtn_"+uid).click(function() { 
    $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
    setTimeout( function() {
      createSurvivalGuide(uid); // Defined in `dynamichtml.js`
      $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    }); // Timeout to let "processing.." modal become visible; page appears to freeze otherwise
  });
  $("#guidelink_"+uid+" a").click();
}


function deleteSurvivalGuide(uid, readd=false) {
  /* Remove the survival guide - either because the image for which it was generated has been edited 
  (must be re-added with new settings), or deleted */
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  setTimeout( function() {
    $("#guideTab_"+uid).remove();
    $("#guidelink_"+uid).remove();
    $("#guideTabList a.nav-link").first().click();
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    if (readd) {
      addSurvGuideGenerator(uid);
    }
  });
}
