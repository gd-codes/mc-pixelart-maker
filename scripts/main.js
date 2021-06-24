
const icon = "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid black; border-radius: 15%;\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>";
const icon_noborder = "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>";
const questionmark = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-question-circle\" > <path d=\"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z\"/><path d=\"M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z\"/></svg>";

const default_colourlist = "white lightgrey grey black brown red orange yellow lime green cyan "+
   "lightblue blue purple magenta pink oak spruce crimson warped dirt sand clay stone deepslate nether quartz expocopper "+
   "oxicopper foliage birchleaves conifers lichen darkcrimson darkwarped crimsonylium warpwart turquoise steel"+
   "brightred gold emerald lapis rawiron calcite tuff dripstone slime web ice";

const structures = {
  azalea_leaves:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAE0SAABiAAAAcAAAAAA=",
  glow_lichen:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAIAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwIAAAAAAAAAAQAAAAMCAAAA//////////8JCABlbnRpdGllcwAAAAAACgcAcGFsZXR0ZQoHAGRlZmF1bHQJDQBibG9ja19wYWxldHRlCgIAAAAIBABuYW1lFQBtaW5lY3JhZnQ6Y29iYmxlc3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZRUAbWluZWNyYWZ0Omdsb3dfbGljaGVuCgYAc3RhdGVzAxkAbXVsdGlfZmFjZV9kaXJlY3Rpb25fYml0cz8AAAAAAwcAdmVyc2lvbgPSEAEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAABjEgAAZQAAAFoAAAAA"
};

window.addEventListener('beforeunload', function (event) {
  if (Number($("body").data("confirm-page-unload"))) {
    event.preventDefault();
    event.returnValue = '';
    return '';
  }
});

$(document).ready(function() {
  //Bind buttons and links to their actions
  console.log("Minecraft Pixel Art Maker - Document Ready !");
  $("input.custom-file-input").on('change', function(event){
    fileInputHandler(this, event.target.files[0]);
    $("body").data("confirm-page-unload", "1");
  }); 
  $("input[type='reset']").closest('form').on('reset', function() {
    resetImgHandler(this);
  }); 
  $("div[id^='3dOption']").on('click', function() {
    displayPaletteOptions(this);
  });
  $("button[id^='materialChooseBtn']").on('click', function() {
    configureColourModal(this);
  });
  $("form[id^='imageForm']").submit(function(event){
    submitImgFormHandler(this, event);
    $("body").data("confirm-page-unload", "1");
  });
  $("button[id^='deleteBtn']").click( function() { 
    deleteImgForm(this); 
  });
  $("#addNewImgBtn").click(newImageUpload);
  
  $("#writePackBtn").click(function(event) {
    startCreateBhvPack(event);
    $("body").data("confirm-page-unload", "1");
  });
  $("#resetAddonDiv").click(function(event) {
    clearBehaviourPack();
  });
  
  /*Colour Palette modalview and related UI*/
  $(".colour-insert").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html("<span style=\"color:"+$(elem).data('colour')+";\">"+icon+"</span>"+h);
  });
  $(".add-questionmark").each(function (index, elem) {
    let h = $(elem).html();
    $(elem).html(h+questionmark);
  });
  
  //Bind Colour table modal's selection controls
  $("#clrSelBtn_All").click(function() { $("input[name='clrSelect']").prop('checked', true); });
  $("#clrSelBtn_None").click(function() { $("input[name='clrSelect']").prop('checked', false); });
  $("#clrSelBtn_Inv").click(function() {  
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', !$(elem).prop('checked'));
    });
  });
  $("#clrSelBtn_Dye").click(function() {
    $("input[name='clrSelect']").each(function(index, elem) {
      $(elem).prop('checked', ((index < 16)? true : false));
    });
  });
  $("#clrSelBtn_NB").click(function() { 
    $("input[name='clrSelect']").eq(30).prop('checked', false);
    $("input[name='clrSelect']").eq(31).prop('checked', false);
  });
  
  
  //Initial setup
  $("#resetImageFormBtn_000001").click();
  
  $("#materialOptsDisplay_000001").data("selected", default_colourlist);
  
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).on('load', function() {
  refreshColourDisplay("000001");
  
  for (var i=1; i<=5; i++) {
    $("div#cari"+i+" > img").attr('src', "images/d"+i+".png");
  }
  $("#demoCarousel").carousel({interval: 2000});
});

function fileInputHandler(elem, file) {
  /*Image is stored as data: URI in the input's HTML data-imagecontent
  attribute till retrieved later */
  $(elem).next('.custom-file-label').html(file.name);
  var reader = new FileReader();
  reader.onload = function(loadevent){
    $(elem).data('imagecontent', loadevent.target.result);
  }
  reader.onerror = function(e){
    alert("Error\n\nThere was a problem loading this image.");
  }
  reader.readAsDataURL(file);
}

function resetImgHandler(elem) {
  var uid = $(elem).attr('id').slice(-6);
  setTimeout(function() {
    $("#ditherSwitch_"+uid).prop("checked", true);
    $("#mapSize11_"+uid).prop("checked", true);
    $("#materialOptsDisplay_"+uid).data("selected", default_colourlist);
    $("#materialOptsDisplay_"+uid).html("<i class=\"text-muted\">By default, all colours will be used</i>");
    $("#3dSwitch_"+uid).prop('checked', false);
    $("#extraHeightOption_"+uid).collapse('hide');
    $("input#heightInput_"+uid).attr("required", false);
  });
}

function displayPaletteOptions(elem) {
  //Display the correct extra options
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
  //colourmap is defined in imageProcessor.js
  var htmlc = [];
  for (var c of $("#materialOptsDisplay_"+uid).data("selected").split(" ")) {
    if (colourmap[c]!==undefined) {
      htmlc.push("<span style=\"color:rgb(" + colourmap[c].toString() + "); padding: 2px;\">"+
               icon_noborder +"<\span>");
    } else {
      continue;
    }
  }
  var content = htmlc.join("");
  if (content.search(/\w/i) < 0) {
    content = "<i class=\"text-muted\">By default, all colours will be used</i>";
    $("#materialOptsDisplay_"+uid).data("selected", default_colourlist);
  } 
  $("#materialOptsDisplay_"+uid).html(content);
}

function submitImgFormHandler(elem, event) {
  /*Client side validation, 
  disable fields to prevent changes as some data is retrieved again later,
  then process the image (analyseImage of imageProcessor.js)*/
  event.preventDefault();
  var uid = $(elem).attr('id').slice(-6);
  var name = $("#fnNameInput_"+uid).val();
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
  $("#spinnerModal").addClass('d-block'); $("#spinnerModal").removeClass('d-none');
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var palette = $("#materialOptsDisplay_"+uid).data("selected");
  var d3 = Boolean($("#3dSwitch_"+uid+":checked").length > 0);
  var dither = Boolean($("#ditherSwitch_"+uid+":checked").length > 0);
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
      $("#navbarList li[id='link_"+uid+"'] a").text(name);
    } else {
      alert("Error\n\nAn unknown error occurred while processing");
    }
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.onerror = function() {
    alert("Error\n\nThere was a problem reading the uploaded image !");
    $("#spinnerModal").addClass('d-none'); $("#spinnerModal").removeClass('d-block');
  }
  image.src = $("#imgInput_"+uid).data('imagecontent');
}

function deleteImgForm(elem) {
  var uid = $(elem).attr('id').slice(-6);
  var verify = confirm("Delete "+$("#fnNameInput_"+uid).val()+" : \nAre you sure ?");
  if (verify) {
    $("#link_"+uid).remove();
    $("#tabPane_"+uid).remove();
    console.info("Removed image form ", uid);
    $("a.nav-link").first().click();
  }
}

function startCreateBhvPack(event) {
  event.preventDefault();
  var f, processed=[];
  for (f of $("form[id^='imageForm']")) {
    if ($(f).data('finalimage')!=undefined) {
      processed.push({uid: $(f).attr('id').slice(-6),
                      name: $("#fnNameInput_"+$(f).attr('id').slice(-6)).val(),
                      pic: $(f).data('finalimage')});
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
  
  $.ajax({
    url: "https://www.uuidtools.com/api/generate/v4/count/2",
    success: function(data) {
      console.log("Succesfully received uuids ", data);
      writeBhvPack(processed, data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error(jqXHR, textStatus, errorThrown);
      var manual = confirm("Error\n\nThe server at www.uuidtools.com did not\
respond with the requested data. Do you want to specify 2 UUIDs manually ?");
      if (manual) {
        var uuid1 = prompt("Enter a UUID (any version - ensure that it is in the valid format)", 
                           "00000000-0000-0000-0000-000000000000");
        var uuid2 = prompt("Enter another UUID", "00000000-0000-0000-0000-000000000000");
        writeBhvPack(processed, [uuid1, uuid2]);
      } else {
        $("#spinnerModal").addClass('d-none');
        $("#spinnerModal").removeClass('d-block');
      }
    }
  });
}

function writeBhvPack(images, uuids) {
  var pack = new JSZip();
  var manifest = JSON.stringify({
    format_version: 2,
    header: {
      name: $("#bpackNameInput").val(),
      description: $("#bpackDescInput").val(),
      uuid: uuids[0],
      version: [1,0,0],
      min_engine_version: [1,17,0]
    },
    modules: [{
      description: "Created with https://gd-codes.github.io/mc-pixelart-maker, on " + new Date().toDateString(),
      type: "data",
      uuid: uuids[1],
      version: [1,0,0]
    }]
  }, null, 2);
  pack.file('manifest.json', manifest);
  var icon;
  if (images.length>4) {
    icon = makeLogo(images.reverse().slice(-4).map(x => x.pic));
  } else if (images.length==0) {
    icon = makeLogo([]);
  } else {
    icon = makeLogo(images.reverse().map(x => x.pic));
  }
  pack.file('pack_icon.png', icon.split(',')[1], {base64:true});
  var keep = Boolean($("#keepBlocks:checked").length > 0);
  var link = Boolean($("#useLinkedPos:checked").length > 0);
  var fnfolder = pack.folder('functions');
  for (let o of images) {
    let palette = $("#materialOptsDisplay_"+o.uid).data("selected").split(" ");
    let extrainfo = ($("#3dSwitch_"+o.uid+":checked").length > 0)? $("#heightInput_"+o.uid).val() : 0;
    let fnlist = writeCommands(o.name, o.pic, palette, extrainfo, keep, link);
    for (let f=0; f<fnlist.length; f++) {
      fnfolder.file(o.name+"/"+(f+1)+".mcfunction", fnlist[f]);
    }
  }
  var strfolder = pack.folder('structures');
  strfolder.file("mapart/azalea_leaves.mcstructure", structures.azalea_leaves, {base64:true});
  strfolder.file("mapart/glow_lichen.mcstructure", structures.glow_lichen, {base64:true});
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
        saveAs(uri, "pixelart.mcpack");
      })
    }, function(err) {
      alert("Uh oh\nSomething went wrong !");
      console.error("Unexpected error creating Data URL : \n", err);
  });
}

function setSaveAsZip(blob) {
  $("#packActionsPreProcess").addClass('d-none');
  $("#packActionsPostProcess").removeClass('d-none');
  $("#downloadPackBtn").click(function() {
    saveAs(blob, "pixelart.mcpack");
  });
}

function clearBehaviourPack() {
  $("#packActionsPostProcess").addClass('d-none');
  $("#packActionsPreProcess").removeClass('d-none');
  $("#downloadPackBtn").off("click");
  $("#altDownloadPack").off("click");
  $("#packForm")[0].reset();
}
