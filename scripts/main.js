/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

/** Colours that are selected on creation of a new image form. */
const default_palette = Array.from(Colours.keys()).join(' ');

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
      shadeMap: undefined,
      lastFocusedPopover: undefined,
  }
};


// 1. Ask user to confirm before closing the tab
window.addEventListener('beforeunload', confirmCloseTab);
// 2. Bind all UI elements to appropriate callbacks when DOM is loaded
$(document).ready(setup);


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
      if (Colours.get($(elem).attr('value')).is_dye) $(elem).prop('checked', true);
    });
  });
  $("#clrSelBtn_Terc").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      if (Colours.get($(elem).attr('value')).is_terc) $(elem).prop('checked', true);
    });
  });
  $("#clrSelBtn_greys").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      if (Colours.get($(elem).attr('value')).is_greyscale) $(elem).prop('checked', true);
    });
  });
  $("#clrSelBtn_NB").click(function() { 
    $("input[name='clrSelect']").each(function(index, elem) {
      if (Colours.get($(elem).attr('value')).is_biomevar) $(elem).prop('checked', false);
    });
  });

  // Populate the colour palette selection table
  $("#colourPaletteTable tbody").html(ejs.render(EJStemplates.colourSelectionTable, {}));

  $(".editable-clr-name").on('input', function() {
    Colours.get($(this).data('code')).name = this.innerText;
  });

  // add-questionmark indicators for tooltip helptext
  $(".add-questionmark").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html(h+SVGicons.questionmark);
  });

  // Activate all bootstrap tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Setup default behaviour pack generation settings
  $('#buildWithStructures').prop('checked', true);
  $('#doTeleport').prop('checked', true);

  // Activate bootstrap image carousel
  $("#demoCarousel").carousel({interval: 2000});

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
  $("#tabContainer").append(ejs.render(EJStemplates.imageForm, 
    {uid, active, emptyFileInput:EJStemplates.emptyFileInput}));
  
  // Perform all callback bindings of UI elements
  $("#imgInput_"+uid).on('change input', function(event) {
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
  $("#absCoordsOption_"+uid).on('click', function() {
    markDirty(uid);
    displayCoordinateOptions(uid);
  });
  $(`#heightInput_${uid}, #originInputX_${uid}, #originInputY_${uid}, #originInputZ_${uid}`
    ).on('change', function() {
    markDirty(uid);
  });
  $("#ditherSelect_"+uid).on('change', function() {
    markDirty(uid);
    const v = $("#ditherSelect_"+uid).find(":selected").val();
    $("#ditherIcon_"+uid).html(SVGicons['dither-'+v]);
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

  // Clear custom messages set by `postValidateImgForm()`
  $(`#fnNameInput_${uid}, #heightInput_${uid}`).on('change keyup textInput paste input', function() {
    this.setCustomValidity(''); 
  });
  $("#originInputY_"+uid).on('change keyup textInput paste input', function() {
    $(`#heightInput_${uid}`)[0].setCustomValidity(''); 
  });

  $("#materialOptsDisplay_"+uid).data("selected", default_palette);

  // must be created before clicking the reset button
  PictureData[uid] = {
    originalImage: undefined,
    originalFileName: undefined,
    resizedImage: undefined,
    finalImage: undefined,
    shadeMap: undefined,
    lastFocusedPopover: undefined,
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
  handleDragDropPasteEvents(uid);
}

/**
 * Respond to file drag/drop attempts over an image form.
 * @param {String} uid - Identifies the image form
 */
function handleDragDropPasteEvents(uid) {
  // Counter helps manage repeatedly fired drag enter+leave events
  var counter = 0;
  // get fired when someone drops image in drop zone
  $(`#dddisp_${uid}`).on('drop', (event) => {
    event.preventDefault();
    imgDropHandler(event.originalEvent.dataTransfer, uid);
    counter--;
    $(`#dddisp_${uid}`).removeClass('d-flex');
    $(`#dddisp_${uid}`).addClass('d-none');
  });
  $(`#dddisp_${uid}`).on('dragover', (event) => {
    event.preventDefault();
  });

  // get fired when someone tries to drop image in drop zone
  $(`#tabPane_${uid}`).on('dragenter', (event) => {
    if( $(`#imgInput_${uid}`).attr('disabled') === undefined){
      counter++;
      $(`#dddisp_${uid}`).removeClass('d-none');
      $(`#dddisp_${uid}`).addClass('d-flex');
    }
  });

  // get fired when someone takes the image out of drop zone
  $(`#dddisp_${uid}`).on('dragleave', (event) => {
    if($(`#imgInput_${uid}`).attr('disabled') === undefined){
      counter--;
      if (counter <= 0) { 
        $(`#dddisp_${uid}`).removeClass('d-flex');
        $(`#dddisp_${uid}`).addClass('d-none');
      }
    }
  });

  // get fired when the tab pane is disabled but someone tries to drop the image
  $(`#tabPane_${uid}`).on('dragover', (event) => {
    event.preventDefault();
  });  
  $(`#tabPane_${uid}`).on('drop', (event) => {
    event.preventDefault();
  });

  // fired on Clipboard paste
  $(`#tabPane_${uid}`).on('paste', (event) => {
    event.preventDefault();
    if ($(`#imgInput_${uid}`).attr('disabled') === undefined) {
      const dataTransfer = event.originalEvent.clipboardData || window.clipboardData;
      imgDropHandler(dataTransfer, uid);
    }
  });
}

/** 
 * Grab content of dropped or pasted images and passes the files to file input handler.
 * @param {DataTransfer} dataTransfer - Contains the item list with files from an event
 * @param {UID} uid - Uid for the input field
 */
function imgDropHandler(dataTransfer, uid) {
  [...dataTransfer.items].forEach((item, i) => {
    if (item.kind === "file" && item.type.startsWith("image/")) {
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
  if (file === undefined) {
    $(elem).next('.custom-file-label').html(EJStemplates.emptyFileInput);
    return;
  }
  let description = ejs.render(EJStemplates.uploadedFileInput, 
    {filename:file.name, filebytes:file.size, originalWasResized:false}
  );
  $(elem).next('.custom-file-label').html(description);
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
 * Describe number of bytes in a file to user
 * Credit : https://stackoverflow.com/a/18650828
 * @param {Number} bytes - File size in Bytes (integer)
 * @param {Number} decimals - Precision
 * @returns {String} Human Readable Representation
 */
function formatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 B';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['B', 'kB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
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
    $(`#ditherSelect_${uid} option[value="floyd-steinberg"]`).prop("selected", true);
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
 * Show or hide the extra fields in the image upload form for Absolute Coordinate Origin input.
 * @param {String} uid - Identifies the target form.
 */
function displayCoordinateOptions(uid) {
  if ($("#absCoordsSwitch_"+uid).prop('checked')) {
    $("#extraOriginOption_"+uid).collapse('show');
    $(`#originInputX_${uid}, #originInputY_${uid}, #originInputZ_${uid}`).attr("required", true);
  } else {
    $("#extraOriginOption_"+uid).collapse('hide');
    $(`#originInputX_${uid}, #originInputY_${uid}, #originInputZ_${uid}`).attr("required", false);
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
 * Perform complex client-side validation checks in a completed image upload form
 * in addition to browser automatic validation.
 * @param {String} uid - Identifies the target form.
 * @returns {Array<HTMLInputElement>} Elements that failed extra validation checks 
 */
function postValidateImgForm(uid) {
  // Validate no duplicate/conflicting names in multiple images
  const nameinp = $("#fnNameInput_"+uid)[0];
  const name = nameinp.value;
  for (var x of $("input[id^=fnName]")) {
    var otherid = $(x).attr('id').slice(-6);
    if ((otherid!=uid) && 
        ($(x).val().toUpperCase() == name.toUpperCase()) && 
        ($(x)[0].hasAttribute("disabled"))) {
      nameinp.setCustomValidity(`The function name "${name}" is currently in use for another image`);
      nameinp.reportValidity();
      return [nameinp];
    }
  }
  nameinp.setCustomValidity('');
  // Validate height with abs coordinates
  if ($("#absCoordsSwitch_"+uid).prop('checked') && $("#3dSwitch_"+uid).prop('checked')) {
    const hinp = $("#heightInput_"+uid)[0];
    const hlim = Number(hinp.value);
    const y = Number($("#originInputY_"+uid).val());
    if (y + hlim > 320) {
      hinp.setCustomValidity(`Height crosses the overworld build limit based on your specified origin Y-coordinate (${y} + ${hlim} > 320)`);
      hinp.reportValidity();
      return [hinp];
    }
    hinp.setCustomValidity('');
  }
  return [];
}

/**
 * Disable input fields on submission, process the image data in the form and
 * reset the linked survival guide, if any.
 * Also prevents the form submission event reloading the page.
 * @param {String} uid - Identifies the target form.
 * @param {Event} event - Form submit event
 */
function submitImgFormHandler(uid, event) {
  event.preventDefault();
  let invalids = postValidateImgForm(uid);
  if (invalids.length > 0) {
    return;
  }
  // Collect all data from form fields
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var palette = $("#materialOptsDisplay_"+uid).data("selected");
  var d3 = Boolean($("#3dSwitch_"+uid+":checked").length > 0);
  var dither = $("#ditherSelect_"+uid).find(":selected").val();
  // Read the uploaded image data from stored base64 URI, and disable the form and begin analysis
  var image = new Image();
  image.onload = function() {
    try {
      configureImgPreviewModal(
        uid, image,
        analyseImage(uid, image, area, palette, d3, dither)
      );
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
    } catch (error) {
      console.error(error);
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
 * Bind callbacks for the buttons to view original/resized/converted images
 * of a processed image form.
 * @param {String} uid - Identifies the target form.
 * @param {HTMLImageElement} origimg - Original Image that was uploaded by user
 * @param {String} converted - Base64 src data URI of the final converted image
 * @param {Number} disph - Preview img height (px) for resized and converted images
 * @param {Number} dispw - Preview img width (px) for resized and converted images
 * @param {Boolean} h2low - Whether to display the Height too low warning on converted preview
 */
function configureImgPreviewModal(uid, origimg, {converted, disph, dispw, h2low}) {
  $("#viewOrigImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', origimg.src).height(origimg.height).width(origimg.width);
    $('#downloadImageButton').attr('href', origimg.src);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-original.png'));
    if (PictureData[uid].originalWasResized === true) {
      $('#imgModalResizeWarning').removeClass('d-none');
    } else {
      $('#imgModalResizeWarning').addClass('d-none');
    }
    $('#imgModalHeightWarning').addClass('d-none');
    $("#imageDisplayModal").modal('show');
  });
  $("#viewResizedImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', PictureData[uid]['resizedImage']).height(disph).width(dispw);
    $('#downloadImageButton').attr('href', PictureData[uid]['resizedImage']);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-resized.png'));
    $('#imgModalResizeWarning').addClass('d-none');
    $('#imgModalHeightWarning').addClass('d-none');
    $("#imageDisplayModal").modal('show');
  });
  $("#viewFinalImgBtn_"+uid).click(function() {
    $("#displayImage").attr('src', converted).height(disph).width(dispw);
    $('#downloadImageButton').attr('href', converted);
    $('#downloadImageButton').attr('download', ($('#fnNameInput_'+uid).val() + '-converted.png'));
    if (h2low) {
      $('#imgModalHeightWarning').removeClass('d-none');
    } else {
      $('#imgModalHeightWarning').addClass('d-none');
    }
    $('#imgModalResizeWarning').addClass('d-none');
    $("#imageDisplayModal").modal('show');
  })
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
  let isProcessed = ($(`#imgInput_${uid}`).attr('disabled') !== undefined && 
    PictureData[uid] !== undefined && PictureData[uid].finalImage !== undefined);
  return ejs.render(EJStemplates.imageNavTabContent, 
    {tabTitle, tabDirty, tabSavedDataSize, originalWasResized, isProcessed});
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
  var dither = $("#ditherSelect_"+uid).find(":selected").val();
  var originX = Number($("#originInputX_"+uid).val());
  var originY = Number($("#originInputY_"+uid).val());
  var originZ = Number($("#originInputZ_"+uid).val());
  var useAbsCoords = Boolean($("#absCoordsSwitch_"+uid+":checked").length > 0);

  var success = saveFormData(uid, {
    PictureDataForUid: PictureData[uid], fnName: name, configuration: {
      area, palette, d3, maxHeight, dither, useAbsCoords, origin: {X:originX, Y:originY, Z:originZ}
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
    dither = 'floyd-steinberg',
    useAbsCoords = false,
    origin = {}
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
    $("#imgInput_" + uid).next('.custom-file-label').html(
      ejs.render(EJStemplates.uploadedFileInput,
        {filename:originalFileName, filebytes:originalImage.split(',')[1].length*3/4, originalWasResized}
    ));
  }

  var areaStr = "" + area[0] + "x" + area[1];
  $("input[name='mapsizeopt_" + uid + "'][value='" + areaStr + "']").prop('checked', true);

  $("#materialOptsDisplay_" + uid).data("selected", palette);

  $("#3dSwitch_" + uid).prop('checked', d3);
  if (maxHeight) {
    $("#heightInput_" + uid).val(maxHeight);
  }
  $(`#ditherSelect_${uid} option[value="${dither}"]`).prop("selected", true);
  $("#ditherIcon_"+uid).html(SVGicons['dither-'+dither]);

  $("#absCoordsSwitch_" + uid).prop('checked', useAbsCoords);
  if (origin.X) $("#originInputX_" + uid).val(origin.X);
  if (origin.Y) $("#originInputY_" + uid).val(origin.Y);
  if (origin.Z) $("#originInputZ_" + uid).val(origin.Z);

  refreshColourDisplay(uid);
  displayPaletteOptions(uid);
  displayCoordinateOptions(uid);

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
    deleteSurvivalGuide(uid);
    deleteSavedFormData(uid);
    setTimeout(function() {
      // Remove PictureData only after the other guides and UI!
      delete PictureData[uid]; 
    }, 2);
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
  $("span[id='tabLabel_"+uid+"']").html(makeTabLabelContent(uid));
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
      min_engine_version: [1,21,50]
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
  var teleport = Boolean($("#doTeleport:checked").length > 0);
  var strucs = Boolean($("#buildWithStructures:checked").length > 0);
  // Write the functions for each image - see `functionWriter.js`
  var fnfolder = pack.folder('functions');
  for (let o of images) {
    let hlim = ($("#3dSwitch_"+o.uid+":checked").length > 0)? $("#heightInput_"+o.uid).val() : 0;
    let shm = PictureData[o.uid]['shadeMap'];
    var absCoords = $("#absCoordsSwitch_"+o.uid+":checked").length > 0;
    var originX = absCoords ? Number($("#originInputX_"+o.uid).val()) : 0;
    var originY = absCoords ? Number($("#originInputY_"+o.uid).val()) : 0;
    var originZ = absCoords ? Number($("#originInputZ_"+o.uid).val()) : 0;
    let fnlist = writeCommands(
      name=o.name, imobj=o.pic, height=Number(hlim), 
      keep=keep, teleport=teleport, strucs=strucs, shademap=shm, 
      absCoords=absCoords, origin={X:originX, Y:originY, Z:originZ});
    for (let f=0; f<fnlist.length; f++) {
      fnfolder.file(o.name+"/"+(f+1)+".mcfunction", fnlist[f]);
    }
  }
  // Include structures
  var strfolder = pack.folder('structures');
  strfolder.file("mapart/glowstone.mcstructure", Structures.glowstone, {base64:true});
  if (strucs) {
    Colours.forEach(function(value, key){
      strfolder.file(`mapart/${key}.mcstructure`, value.structure, {base64:true});
    })
  }
  // Prepare the ZIP file for download
  const safeFileName = $("#bpackNameInput").val().replace(/[\/\\:<>\|\?\*\000-\037]/g, "");
  pack.generateAsync({type:"blob"})
    .then(function(blob) {
        setSaveAsZip(blob, safeFileName);
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
        saveAs(uri, `${safeFileName || 'mapart'}.mcpack`);
      })
    }, function(err) {
      alert("Uh oh\nSomething went wrong !");
      console.error("Unexpected error creating Data URL : \n", err);
  });
}


/**
 * Configure download link for the generated ZIP mcpack
 * @param {Blob} blob - ZIP file data in Blob format
 * @param {string} filename - Based on pack name entered by the user.
 */
function setSaveAsZip(blob, filename) {
  $("#packActionsPreProcess").addClass('d-none');
  $("#packActionsPostProcess").removeClass('d-none');
  $("#downloadPackBtn").click(function() {
    saveAs(blob, `${filename || 'mapart'}.mcpack`);
  });
}

/** Reset the generate addon form  */
function clearBehaviourPack() {
  $("#packActionsPostProcess").addClass('d-none');
  $("#packActionsPreProcess").removeClass('d-none');
  $("#downloadPackBtn").off("click");
  $("#altDownloadPack").off("click");
  $("#packForm")[0].reset();
  $('#buildWithStructures').prop('checked', true);
  $('#doTeleport').prop('checked', true);
}


/**
 * Add the UI pane in which the survival guide for an image can be generated, 
 * after the image form data has been processed, and make it the active tab.
 * @param {string} uid - The image for which to generate the guide.
 */
function addSurvGuideGenerator(uid) {
  let fname = $("#fnNameInput_"+uid).val();
  let area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [2*Number(area[0]), Number(area[2])];

  $("#guideTabsContainer").append(ejs.render(EJStemplates.guideTab, 
      {uid, fname, area:area[0]*area[1]}));

  $("#guideTabList").append(ejs.render(EJStemplates.guideNavTab,
      {uid, fname}));
  
  $("#deleteGuide_"+uid).click( function(){deleteSurvivalGuide(uid);} );
  
  // Callback binding to generate the guide within the added tab pane
  $("#genGuideBtn_"+uid).click(function() { 
    $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
    // Timeout to let "processing.." modal become visible; page appears to freeze otherwise
    setTimeout( function() {
      createSurvivalGuide(uid, area); 
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
 * @param {[Number,Number]} area - The number of zones in the image (width x height),
 *  1 pane will be created for each (see function `getSurvivalGuideTableData`).
 */
function createSurvivalGuide(uid, area) {
  let numzones = area[0] * area[1];
  $("#survGuidePlaceholderText").addClass('d-none');
  
  // Add the html string to DOM
  try {
    $("#guideTab_"+uid).html(
      ejs.render(EJStemplates.survivalGuide, getSurvivalGuideTableData(uid)));
  } catch (err) {
    console.error(err);
    return;
  }

  $(`#guidePageBar_${uid} li.page-item`).click(function() {
    switchActiveGuidePage(this);
  });

  /* Keeping 16,000+ popovers at once = horrible performance. 
  Hence create and destroy active one each time while focused */
  $(`.guide-tableareas td`).focus(function() {
    let lastFocus = PictureData[uid].lastFocusedPopover;
    if (lastFocus) {
      $(lastFocus).popover('dispose');
      $(lastFocus).removeData('toggle');
      $(lastFocus).removeClass('focused');
      if ($(lastFocus).attr('data-original-title').length > 0) {
        // Due to bootstrap, original title is not restored, affects browser native tooltips.
        $(lastFocus).attr('title', $(lastFocus).attr('data-original-title'));
      }
    }
    $(this).addClass('focused');
    $(this).data('toggle', 'popover');
    $(this).popover('show');
    PictureData[uid].lastFocusedPopover = this;
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

  $(`[type="checkbox"].visbox`).click(function() {
    showHideTableCells($(this));
  });
  $(`#hideGuideCells_${uid}`).click(function() {
    let toggles = $(`div[id^="survGuideBlockCount_"][id$="${uid}"] [type="checkbox"].visbox`);
    // Click event toggles :checked again and triggers the callback to update the table
    toggles.each(i => $(toggles[i]).prop('checked', true).trigger('click'));
  });
  $(`#showGuideCells_${uid}`).click(function() {
    let toggles = $(`div[id^="survGuideBlockCount_"][id$="${uid}"] [type="checkbox"].visbox`);
    toggles.each(i => $(toggles[i]).prop('checked', false).trigger('click'));
  });

  // Make page 1 visible & active
  $(`#guidePageBar_${uid} li.page-item`).eq(1).click();
  $(`#guidePage_1_map_${uid}`).addClass("show");

  // Display a preview of the section of the image covered by each zone
  let zoneX=0, zoneZ=0;
  for (let zone=1; zone<=numzones; zone++) {
    let canv = $(`#guideZoneImgCanv_${zone}_${uid}`)[0];
    let ctx = canv.getContext('2d');
    // Paint the zone rectangle on the image in each canvas.
    // Wrap promise evaluation in IIFE to capture current zone values before they
    // are updated by the outer loop
    ((zoneX, zoneZ) => createImageBitmap(PictureData[uid].finalImage).then((imgbmp) => {
      let imgh, imgw, imgx, imgy;
      if (imgbmp.width >= imgbmp.height) {
        imgw = canv.width;
        imgh = canv.height / (imgbmp.width / imgbmp.height);
      } else {
        imgw = canv.width * (imgbmp.width / imgbmp.height);
        imgh = canv.height;
      }
      imgx = Math.ceil((canv.width - imgw) / 2);
      imgy = Math.ceil((canv.height - imgh) / 2);
      ctx.drawImage(imgbmp, imgx, imgy, imgw, imgh);
      let rx = zoneX * imgw / imgbmp.width + imgx;
      let ry = zoneZ * imgh / imgbmp.height + imgy;
      ctx.beginPath();
      ctx.shadowColor = "#000";
      ctx.shadowBlur = 8;
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#fff";
      ctx.strokeRect(rx, ry, 64*imgw/imgbmp.width, 128*imgh/imgbmp.height);
    }))(zoneX, zoneZ);
    if (zone % area[0] === 0) {
      zoneX = 0; zoneZ += 128;
    } else {
      zoneX += 64;
    }
  }
}

/**
 * Show or Hide the table cells corresponding to a certain block in the survival guide.
 * @param {jQuery(HTMLInputElement)} triggerCheckbox - Visibility checkbox for the material to toggle 
 */
function showHideTableCells(triggerCheckbox) {
  let code = triggerCheckbox.data('code');
  let targets = triggerCheckbox
    .closest(`div[id^="survGuideBlockCount_"]`)
    .next(`div[id^="survGuideTableArea_"]`)
    .find(`td[data-code="${code}"]`);
  if (triggerCheckbox.prop('checked')) {
    targets.removeClass('minimized');
  } else {
    targets.addClass('minimized');
  }
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
  let handled = true;
  switch (event.code) {
    case 'Tab': 
      if (verticalTab.prop('checked')) {
        $(event.shiftKey? vprev : vnext).focus();
      } else {
        $(event.shiftKey? hprev : hnext).focus();
      }
      break;
    case 'ArrowUp': case 'KeyW': $(up).focus(); break;
    case 'ArrowDown': case 'KeyS': $(down).focus(); break;
    case 'ArrowLeft': case 'KeyA': $(left).focus(); break;
    case 'ArrowRight': case 'KeyD': $(right).focus(); break;
    default: handled = false; break;
  }
  if (handled) {
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
    for (let coln=3; coln<=6; coln++) {
      $(`#countlistTable_${i}_${uid} tr > *:nth-child(${coln})`).addClass('d-none');
    }
    var n = (showTotal) ? ((showStacks) ? 6 : 5) : ((showStacks) ? 4 : 3);
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
    $(PictureData[uid].lastFocusedPopover).popover('dispose');
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
