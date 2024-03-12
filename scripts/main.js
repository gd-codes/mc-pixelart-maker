/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

/** Colours that are selected on creation of a new image form. */
const default_palette = Array.from(Colours.keys()).join(' ');

let counter = 0;
/** 
 * Stores the raw & processed image data for all uploaded pictures,
 * indexed by the 6-digit random uid.
 */
const PictureData = {
  "000001": {
      originalImage: undefined,
      originalFileName: undefined,
      resizedImage: undefined,
      originalWasResized: undefined,
      fnName: undefined,
      configurationDirty: true,
      finalImage: undefined,
      shadeMap: undefined
  }
};


// 1. Ask user to confirm before closing the tab
window.addEventListener('beforeunload', confirmCloseTab);
// 2. Bind all UI elements to appropriate callbacks when DOM is loaded
$(document).ready(setup);
// 3. Lazy-load carousel images after page loads 
$(window).on('load', lazyload);


/**
 * Binds all document UI callbacks and displays initial dynamic page content on page load.
 */
function setup() {
  console.log("Minecraft Pixel Art Maker - Document Ready !");

  let uids = getStoredFormDataUids();
  let restoredAtLeastOne = restoreImageUploads(uids);
  if (!restoredAtLeastOne) {
    // Create the first form that is visible when page is opened
    newImageUpload("000001");
  }
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

  // Construct Colour palette selection table modal and its controls
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

  // Populate the colour palette selection table
  $("#colourPaletteTable tbody").html(ejs.render(EJStemplates.colourSelectionTable, {}));

  // add-questionmark indicators for tooltip helptext
  $(".add-questionmark").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html(h+SVGicons.questionmark);
  });

  // Activate all bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Setup default behaviour pack generation settings
  $('#buildWithStructures').prop('checked', true);

  // Prevent links in PWA window opening in browser
  const isPWA = window.matchMedia('(display-mode: standalone)');
  if (isPWA.matches) {
    $('a.alert-link[target="_blank"]').removeAttr('target');
  }
  
}

/** Make the browser display a confirmation prompt to the user on attempting to close the tab */
function confirmCloseTab(event) {
  if (Number($("body").data("confirm-page-unload"))) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }
}

/** Add image sources to and intialise the demoCarousel */
function lazyload() {
  // Add the carousel images to index.html
  for (var i=1; i<=5; i++) {
    $("div#cari"+i+" > img").attr('src', "images/d"+i+".png");
  }
  $("#demoCarousel").carousel({interval: 2000});
}


/** 
 * Generate a new Image Upload Form 
 * @param {string} uid - Optional 6 character suffix to uniquely identify image & elements of this form.
 *  Will be randomly generated if unspecified.
 */
function newImageUpload(uid, {fnName = "", active = true} = {}) {
  var charset = "abcdefghijklmnopqrstuvwxyz1234567890";
  if (typeof(uid) !== 'string' || uid.length !== 6) {
    uid = "";
    for(var rb=0; rb<6; rb++) {
      uid += charset.charAt(Math.floor(Math.random() * charset.length));
    }
  }
  // random 6-char uid appended to the HTML DOM id of all elements makes them distinguishable
  $("#navbarList").append(ejs.render(EJStemplates.imageNavTab, 
    {uid: uid, content: makeTabLabelContent(uid, fnName)}));
  
  $("#tempErrDialog").remove();
  $("#tabContainer").append(ejs.render(EJStemplates.imageForm, {uid, active}));

  // get fired when someone drops image in drop zone
  document.querySelector(`#dddisp_${uid}`).addEventListener('drop', (event) => {
    imgDropHandler(event, uid);
    counter--;
    $(`#dddisp_${uid}`).removeClass('d-flex');
    $(`#dddisp_${uid}`).addClass('d-none');
  });
  document.querySelector(`#dddisp_${uid}`).addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  // get fired when someone tries to drop image in drop zone
  document.querySelector(`#tabPane_${uid}`).addEventListener('dragenter', (event) => {
    if( $(`#imgInput_${uid}`).attr('disabled') === undefined){
      counter++;
      $(`#dddisp_${uid}`).removeClass('d-none');
      $(`#dddisp_${uid}`).addClass('d-flex');
    }
  });

  // get fired when someone takes the image out of drop zone
  document.querySelector(`#dddisp_${uid}`).addEventListener('dragleave', (event) => {
    if($(`#imgInput_${uid}`).attr('disabled') === undefined){
      counter--;
      if (counter <= 0) { 
        $(`#dddisp_${uid}`).removeClass('d-flex');
        $(`#dddisp_${uid}`).addClass('d-none');
      }
    }
  });

  // get fired when the tab pane is disabled but someone tries to drop the image
  document.querySelector(`#tabPane_${uid}`).addEventListener('dragover', (event) => {
    event.preventDefault();
  });  
  document.querySelector(`#tabPane_${uid}`).addEventListener('drop', (event) => {
    event.preventDefault();
  });
  
  console.info("New image form with id suffix", uid);
  
  // Perform all callback bindings of UI elements
  $("#imgInput_"+uid).on('change', function(event) {
    markDirty(uid);
    // enable mandatory flag; image was marked optional if the form was restored from local storage
    $("#imgInput_" + uid).attr("required", true);
    fileInputHandler(this, event.target.files[0]);
    $("body").data("confirm-page-unload", "1");
  }); 
  $("#resetImageFormBtn_"+uid).on('click', function() {
    resetImgHandler(uid);
  });
  $("#fnNameInput_"+uid).on('change', function(event) {
    PictureData[uid]['fnName'] = event.target.value;
    markDirty(uid);
  });
  $("#mapSizeInput_"+uid).on('change', function(event){
    if (event.target.type === 'radio' && event.target.name === `mapsizeopt_${uid}`) {
      markDirty(uid);
    }
  });
  $("#3dOption_"+uid).on('click', function() {
    markDirty(uid);
    displayPaletteOptions(uid);
  });
  $("#heightInput_"+uid).on('change', function() {
    markDirty(uid);
  });
  $("#ditherOption_"+uid).on('click', function() {
    markDirty(uid);
  });
  $("#materialChooseBtn_"+uid).on('click', function() {
    configureColourModal(uid);
  });
  $("#imageForm_"+uid).submit(function(event){
    submitImgFormHandler(uid, event);
  });
  $("#deleteBtn_"+uid).click( function() { 
    deleteImgForm(uid); 
  });
  $("#imgEditBtn_"+uid).click(function() {
    editImgForm(uid);
  });
  $("#saveFormDataBtn_"+uid).click(function() {
    saveImgForm(uid);
  });

  $("#materialOptsDisplay_"+uid).data("selected", default_palette);

  // must be created before clicking the reset button
  PictureData[uid] = {
    originalImage: undefined,
    originalFileName: undefined,
    resizedImage: undefined,
    finalImage: undefined,
    shadeMap: undefined
  }

  // Initialize bootstrap tooltips
  $(`#tabPane_${uid} [data-toggle="tooltip"]`).tooltip();
  // Reset to clean state for subsequent restoration
  $("#resetImageFormBtn_"+uid).click();
  // Select the new tab
  if (active) {
    $("li#link_"+uid+" a").click();
  }

  refreshColourDisplay(uid);
}

/** 
 * Grab content of dropped images and passes the files to file input handler.
 * @param {Event} event
 * @param {UID} uid - Uid for the imp input field
 */
function imgDropHandler(event, uid) {
  event.preventDefault();
  [...event.dataTransfer.items].forEach((item, i) => {
    if (item.kind === "file" && item.getAsFile().type.startsWith("image/")) {
      const file = item.getAsFile();
      const fileInput = document.querySelector(`#imgInput_${uid}`);
      fileInputHandler(fileInput, file);

      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInput.files = dataTransfer.files;
    }
  });
}

/** 
 * Grab content of uploaded images and save it as a data-URI in `PictureData`.
 * @param {HTMLElement} elem - input type='file' of the upload
 * @param {File} file - Uploaded target file
 */
function fileInputHandler(elem, file) {
  $(elem).next('.custom-file-label').html(file.name);
  var uid = $(elem).attr('id').slice(-6);
  var reader = new FileReader();
  reader.onload = function(loadevent){
    PictureData[uid]['originalImage'] = loadevent.target.result;
    PictureData[uid]['originalFileName'] = file.name;
  }
  reader.onerror = function(e){
    alert("Error\n\nThere was a problem loading this image.");
  }
  reader.readAsDataURL(file);
}

/**
 * Reset an image upload form to its default blank state, and also pre-select default options.
 * @param {String} uid - Identifies the target form.
 */
function resetImgHandler(uid) {

  let data = getSavedFormData(uid);
  if (data) {
    // we have previously stored data, revert back to it
    restoreFormData(uid, data);
    return;
  }
  // 1 frame timeout to prevent some non-deterministic UI rendering and elem state glitches.
  setTimeout(function() {
    $("#fnNameInput_" + uid).val("");
    PictureData[uid]['fnName'] = "";
    $("#ditherSwitch_"+uid).prop("checked", true);
    $("#mapSize11_"+uid).prop("checked", true);
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
    refreshColourDisplay(uid);
    $("#3dSwitch_"+uid).prop('checked', false);
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
    markDirty(uid, false);
  });
}

/**
 * Show or hide the extra fields in the image upload form for 3D data input.
 * @param {String} uid - Identifies the target form.
 */
function displayPaletteOptions(uid) {
  if ($("#3dSwitch_"+uid).prop('checked')) {
    $("#extraHeightOption_"+uid).collapse('show');
    $("input#heightInput_"+uid).attr("required", true);
  } else {
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  }
}

/**
 * On opening the globally shared colour palette selection modal from a specific image form,
 * set the selection state of the checkboxes to match the stored palette values for the image.
 * Re-bind the callback to save the new palette to the same image form's data.
 * Then display the modal.
 * @param {String} uid - Identifies the target form.
 */
function configureColourModal(uid) {
  var sel = $("#materialOptsDisplay_"+uid).data("selected").split(" ");
  $("input[name='clrSelect']").each(function(index, chekbox) {
    $(chekbox).prop('checked', sel.indexOf($(chekbox).attr('value')) >= 0);
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
    markDirty(uid);
  });
  $("#colourTableModal").modal('show');
}

/**
 * Update the visual colour palette indicators on the image upload form.
 * @param {String} uid - Identifies the target form.
 */
function refreshColourDisplay(uid) {
  var htmlc = [];
  for (var c of $("#materialOptsDisplay_"+uid).data("selected").split(" ")) {
    let colourdata = Colours.get(c);
    if (colourdata!==undefined)
      htmlc.push(ejs.render(EJStemplates.colourPaletteIcon, {colourdata: colourdata}));
  }
  var content = htmlc.join("");
  if (content.search(/\w/i) < 0) {
    content = EJStemplates.colourPaletteFallback;
    $("#materialOptsDisplay_"+uid).data("selected", default_palette);
  } 
  $("#materialOptsDisplay_"+uid).html(content);
}

/**
 * Perform client-side validation of a completed image upload form,
 * disable input fields, process the image data in it and also reset
 * the linked survival guide, if any.
 * Also prevents the form submission event reloading the page.
 * @param {String} uid - Identifies the target form.
 * @param {Event} event - Form submit event
 */
function submitImgFormHandler(uid, event) {
  event.preventDefault();
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
  // Collect all data from form fields
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
      $("span[id='tabLabel_"+uid+"']").html(
          makeTabLabelContent(uid)
      );
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

/**
 * Mark the PictureData for an image form as dirty when there are unsaved changes.
 * Refresh the tab label to indicate status.
 * @param {String} uid - Identities the image form.
 * @param {Boolean} dirty - Value to set for dirty
 */
function markDirty(uid, dirty= true) {
  if (PictureData[uid]) {
    PictureData[uid]['configurationDirty'] = dirty;

    $("span[id='tabLabel_"+uid+"']").html(
        makeTabLabelContent(uid)
    );
  }
}

/**
 * Get content to be displayed in the navbar tab for an image form, including the title,
 * delete button and other state indicator icons.
 * @param {String} uid - Identifies the image form.
 * @param {String} tabTitle - Title to display for the image form.
 * @returns HTML navbar tab content
 */
function makeTabLabelContent(uid, tabTitle = ""){
  tabTitle = tabTitle || (PictureData[uid] && PictureData[uid]['fnName']) || "New Image";
  let tabDirty = PictureData[uid] ? !!PictureData[uid]['configurationDirty'] : false;
  let tabSavedDataSize = getSavedFormDataSize(uid);
  let originalWasResized = (tabSavedDataSize > 0) ? getSavedFormOriginalWasResized(uid) : false;
  return ejs.render(EJStemplates.imageNavTabContent, 
    {tabTitle, tabDirty, tabSavedDataSize, originalWasResized});
}

/**
 * Save the image form configuration to local storage.
 * @param {string} uid - The uid of the form to save.
 */
function saveImgForm(uid) {
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var name = $("#fnNameInput_" + uid).val();
  var palette = $("#materialOptsDisplay_"+uid).data("selected");
  var d3 = Boolean($("#3dSwitch_"+uid+":checked").length > 0);
  var maxHeight = $("#heightInput_" + uid).val() | 0;
  var dither = Boolean($("#ditherSwitch_"+uid+":checked").length > 0);

  var success = saveFormData(uid, {
    PictureDataForUid: PictureData[uid], fnName: name, configuration: {
      area, palette, d3, maxHeight, dither
    }
  });
  if (success) {
    markDirty(uid, false);
  } else {
    alert("Saving failed - likely due to limited storage capacity. Delete some other saved images and try again.");
  }
}

/**
 * Restores the content of an image form from local storage.
 * The image form must be created before calling this function.
 * @param {string} uid - The uid of the form to restore.
 * @param {string} originalImage - The base64 encoded data URL of image.
 * @param {string} originalFileName - The image file name.
 * @param {boolean} originalWasResized - Whether the resized image was stored rather than the original.
 * @param {string} fnName - The map function name.
 * @param {Array<number>} area - The map area.
 * @param {string} palette - The block palette.
 * @param {boolean} d3 - Whether height is enabled.
 * @param {number} maxHeight - The max height above the map's base layer to use.
 * @param {boolean} dither - Whether dithering is enabled.
 */
function restoreFormData(uid, {
  PictureDataForUid: {
    originalImage,
    originalFileName,
    originalWasResized
  },
  fnName = "",
  configuration: {
    area = [1, 1],
    palette = "",
    d3 = false,
    maxHeight = undefined,
    dither = true
  }
} = {}) {

  $("#fnNameInput_" + uid).val(fnName);

  PictureData[uid]['originalImage'] = originalImage;
  PictureData[uid]['originalFileName'] = originalFileName;
  PictureData[uid]['originalWasResized'] = originalWasResized;
  PictureData[uid]['fnName'] = fnName;
  // Mark image as optional, because we don't currently have an image file.
  // However, we do have all the data we need to process the image.
  // Once a file was selected, it becomes mandatory again.
  $("#imgInput_" + uid).attr("required", false);
  if (originalFileName) {
    $("#imgInput_" + uid).next('.custom-file-label').html(originalFileName);
  }

  var areaStr = "" + area[0] + "x" + area[1];
  $("input[name='mapsizeopt_" + uid + "'][value='" + areaStr + "']").prop('checked', true);

  $("#materialOptsDisplay_" + uid).data("selected", palette);

  $("#3dSwitch_" + uid).prop('checked', d3);
  if (maxHeight) {
    $("#heightInput_" + uid).val(maxHeight);
  }
  $("#ditherSwitch_" + uid).prop('checked', dither);

  refreshColourDisplay(uid);
  displayPaletteOptions(uid);

  markDirty(uid, false);
}

/**
 * Restores all listed forms from local storage.
 * @param {Array<string>} uids - The uids of the forms to restore.
 * @returns {boolean} - Whether at least one forms was restored.
 */
function restoreImageUploads(uids) {
  let countRestored = 0;
  for(let i = 0; i < uids.length; i++){
    countRestored = restoreImageUpload(uids[i], countRestored);
  }
  return countRestored > 0;
}

/**
 * Restores the given form from local storage.
 * @param {string} uid - The uid of the form to restore.
 * @param {number} countRestored - The number of forms restored before calling this function. Used to determine which form tab to activate.
 * @returns {number} - The number of forms restored after this function, i.e., either the given countRestored or one more.
 */
function restoreImageUpload(uid, countRestored) {
  let data = getSavedFormData(uid);
  if (data) {
    // The call to newImageUpload will trigger a form reset (resetImgHandler),
    // which in turn restores the rest of the content from local storage.
    if (countRestored === 0) {
      newImageUpload(uid, { fnName: data.fnName });
    } else {
      newImageUpload(uid, { fnName: data.fnName, active: false });
    }
    return countRestored + 1;
  }
  return countRestored;
}

/**
 * Delete an image upload form and all its associated data.
 * @param {String} uid - Identifies the target form.
 */
function deleteImgForm(uid) {
  var name = $("#fnNameInput_"+uid).val();
  if (! name) {name = "this image form";}
  var verify = confirm("Delete "+name+" : \nAre you sure ?");
  if (verify) {
    $("#link_"+uid).remove();
    $("#tabPane_"+uid).remove();
    delete PictureData[uid];
    deleteSurvivalGuide(uid);
    deleteSavedFormData(uid);
    $("#navbarList a.nav-link").first().click();
  }
}

/**
 * Re-enable a submitted image form's input fields and unbind callbacks, allowing editing.
 * @param {String} uid - Identifies the target form.
 */
function editImgForm(uid) {
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

/**
 * Used to generate UUIDs for the behaviour pack.
 * Credit: https://stackoverflow.com/a/2117523
 * @returns A Type-4 UUID string
 */
function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

/**
 * Collect processed image data from all complete forms on the page, 
 * and proceed to write the behaviour pack containing those images.
 * @param {MouseEvent} event - Click event from the Generate Pack button.
 */
function startCreateBhvPack(event) {
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


/**
 * Create the Add-on ZIP file structure and make it available for download via the UI.
 * @param {Array<{uid: string, name: string, pic: string}>} images -
 *  Collection of images to be added to the pack
 * @param {[string, string]} uuids - 2 UUIDs for pack manifest
 */
function writeBhvPack(images, uuids) {
  var pack = new JSZip();
  // Manifest
  var manifest = JSON.stringify({
    format_version: 2,
    header: {
      name: $("#bpackNameInput").val(),
      description: $("#bpackDescInput").val(),
      uuid: uuids[0],
      version: [1,0,0],
      min_engine_version: [1,20,0]
    },
    modules: [{
      description: "Created with https://gd-codes.github.io/mc-pixelart-maker, on " + 
        new Date().toDateString(),
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
    let fnlist = writeCommands(o.name, o.pic, palette.length, extrainfo, keep, link, strucs, shm);
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


/**
 * Configure download link for the generated ZIP mcpack
 * @param {Blob} blob - ZIP file data in Blob format
 */
function setSaveAsZip(blob) {
  $("#packActionsPreProcess").addClass('d-none');
  $("#packActionsPostProcess").removeClass('d-none');
  $("#downloadPackBtn").click(function() {
    saveAs(blob, "mapart.mcpack");
  });
}

/** Reset the generate addon form  */
function clearBehaviourPack() {
  $("#packActionsPostProcess").addClass('d-none');
  $("#packActionsPreProcess").removeClass('d-none');
  $("#downloadPackBtn").off("click");
  $("#altDownloadPack").off("click");
  $("#packForm")[0].reset();
}


/**
 * Add the UI pane in which the survival guide for an image can be generated, 
 * after the image form data has been processed, and make it the active tab.
 * @param {string} uid - The image for which to generate the guide.
 */
function addSurvGuideGenerator(uid) {
  let fname = $("#fnNameInput_"+uid).val();
  let area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = Number(area[0]) * Number(area[2]);

  $("#guideTabsContainer").append(ejs.render(EJStemplates.guideTab, 
      {uid, fname, area}));

  $("#guideTabList").append(ejs.render(EJStemplates.guideNavTab,
      {uid, fname}));
  
  $("#deleteGuide_"+uid).click( function(){deleteSurvivalGuide(uid);} );
  
  // Callback binding to generate the guide within the added tab pane
  $("#genGuideBtn_"+uid).click(function() { 
    $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
    // Timeout to let "processing.." modal become visible; page appears to freeze otherwise
    setTimeout( function() {
      createSurvivalGuide(uid, 2*area); 
      $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    }, 1);
  });

  $("#guideTabList a.nav-link").removeClass('active');
  $("#guideTabsContainer").children().removeClass('show active');
  $(`#guidelink_${uid} a`).tab('show');
}

/**
 * Create the survival guide for an image, displaying the block counts used and placement.
 * @param {string} uid - The image for which to generate the guide.
 * @param {Number} numzones - The number of zones in the image, 1 pane will be created for each
 *  (see function `getSurvivalGuideTableData`).
 */
function createSurvivalGuide(uid, numzones) {
  $("#survGuidePlaceholderText").addClass('d-none');
  
  // Add the html string to DOM
  $("#guideTab_"+uid).html(
    ejs.render(EJStemplates.survivalGuide, getSurvivalGuideTableData(uid)));

  $(`#guidePageBar_${uid} li.page-item`).click(function() {
    switchActiveGuidePage(this);
  });

  /* Keeping 16,000+ popovers at once = horrible performance. 
  Hence create and destroy active one each time while focused */
  $(`.guide-tableareas td`).focus(function() {
    $(this).data('toggle', 'popover');
    $(this).popover('show');
  });
  $(`.guide-tableareas td`).blur(function() {
    $(this).popover('dispose');
    $(this).removeData('toggle');
  });

  // Bind tab Direction modifier
  let tabDirectionCheck = $(`#tabDirection_${uid}`);
  $(`.guide-tableareas td`).on('keydown', function(event) {
    tableMovement(this, event, tabDirectionCheck);
  });

  // Bind count control checkboxes
  $(`#guideTotalBlockCount_${uid}`).click( function() {
    toggleCountListView(uid, 
      numzones, 
      $(this).prop('checked'), 
      $(`#guideStackViewCount_${uid}`).prop('checked'))
  });
  $(`#guideStackViewCount_${uid}`).click( function() {
    toggleCountListView(uid, 
      numzones, 
      $(`#guideTotalBlockCount_${uid}`).prop('checked'), 
      $(this).prop('checked'))
  });
  // Make page 1 visible & active
  $(`#guidePageBar_${uid} li.page-item`).eq(1).click();
  $(`#guidePage_1_map_${uid}`).addClass("show");
}

/**
 * On pressing [Shift+]Tab or Arrrow Keys on tabbable table cells, move focus row/column wise.
 * @param {HTMLTableCellElement} elem - Cell from which to shift focus
 * @param {KeyboardEvent} event - Event raised from a keystroke
 * @param {HTMLInputElement} verticalTab - Checkbox representing Whether Tab keypresses
 *  should cause vertical movement.
 */
function tableMovement(elem, event, verticalTab=false) {
  let i = $(elem).index();
  let tr = $(elem).parent();
  let lowerRow = tr.next();
  let upperRow = tr.prev();
  let up = upperRow.length ? upperRow.children()[i] : elem;
  let down = lowerRow.length ? lowerRow.children()[i] : elem;
  let left = (i > 0) ? $(elem).prev() : elem;
  let right = (i < 63) ? $(elem).next() : elem;
  let vprev = upperRow.length ? up : ( (i>0) ? tr.siblings().last().children()[i-1] : elem);
  let vnext = lowerRow.length ? down : ( (i<63) ? tr.siblings().first().children()[i+1] : elem);
  let hprev = (i > 0) ? left : (upperRow.length? upperRow.children().last() : elem);
  let hnext = (i < 63) ? right : (lowerRow.length? lowerRow.children().first() : elem);
  switch (event.code) {
    case 'Tab': 
      if (verticalTab.prop('checked')) {
        $(event.shiftKey? vprev : vnext).focus();
      } else {
        $(event.shiftKey? hprev : hnext).focus();
      }
      break;
    case 'ArrowUp': $(up).focus(); break;
    case 'ArrowDown': $(down).focus(); break;
    case 'ArrowLeft': $(left).focus(); break;
    case 'ArrowRight': $(right).focus(); break;
  }
  if (event.code === 'Tab' || event.code.slice(0,5) === 'Arrow') {
    event.preventDefault();
  }
}

/**
 * Show/hide the appropriate columns in each of the tables that list block counts
 * within a survival guide.
 * @param {string} uid - The guide to be modified.
 * @param {Number} l - Number of panes containing count list tables in this guide
 * @param {Boolean} showTotal - Whether to display the total count column
 * @param {Boolean} showStacks - Whether to display the count in stacks column
 */
function toggleCountListView(uid, l, showTotal, showStacks) {
  // Show the correct column in countlist table
  for (let i=0; i<l; i++) {
    for (let coln=2; coln<=5; coln++) {
      $(`#countlistTable_${i}_${uid} tr > *:nth-child(${coln})`).addClass('d-none');
    }
    var n = (showTotal) ? ((showStacks) ? 5 : 4) : ((showStacks) ? 3 : 2);
    $(`#countlistTable_${i}_${uid} tr > *:nth-child(${n})`).removeClass('d-none');
  }
}

/**
 * Highlight the current page number in the navbar listing the survival guide's zones/pages.
 * @param {HTMLElement} pagelink - Button for the page number that was clicked in the navbar.
 */
function switchActiveGuidePage(pagelink) {
  // Pagination active status does not change automatically
  let off = $(pagelink).hasClass("active");
  $(pagelink).closest("ul").find("li.active").removeClass('active');
  if (!off) {
    $(pagelink).addClass('active');
  }
}

/**
 * Remove a survival guide, permanently or clear it to be re-generated.
 * @param {string} uid - The guide to be removed.
 * @param {Boolean} readd - Whether to call `addSurvGuideGenerator` after deletion.
 */
function deleteSurvivalGuide(uid, readd=false) {
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  // Timeout to let "processing.." modal become visible; page appears to freeze otherwise
  setTimeout( function() {
    $("#guideTab_"+uid).remove();
    $("#guidelink_"+uid).remove();
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
    if (readd) {
      addSurvGuideGenerator(uid);
    } else {
      // Only if the form won't be re-added, need to make a different one active.
      $("#guideTabList a.nav-link").first().click();
    }
    if ($("#guideTabsContainer").children().length === 0) {
      $("#survGuidePlaceholderText").removeClass('d-none');
    }
  }, 1);
}
