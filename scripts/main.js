
const icon = "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" style=\"border: 1px solid black; border-radius: 15%;\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>";
const icon_noborder = "<svg width=\"1.0em\" height=\"1.0em\" viewBox=\"0 0 16 16\" class=\"bi bi-square-fill\" "+
      "fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">"+
      "<path d=\"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z\"/></svg>";

const default_colourlist = "white lightgrey grey black brown red orange yellow lime green cyan "+
   "lightblue blue purple magenta pink oak spruce crimson warped dirt sand clay stone deepslate nether quartz expocopper "+
   "oxicopper foliage birchleaves conifers vines lichen darkcrimson darkwarped crimsonylium warpwart turquoise steel"+
   "brightred gold emerald lapis rawiron calcite tuff dripstone slime web ice";

window.addEventListener('beforeunload', function (event) {
  //Confirm before reloading or exiting
  /*event.preventDefault();
  event.returnValue = '';
  return '';*/
});

$(document).ready(function() {
  //Bind buttons and links to their actions
  console.log("Minecraft Pixel Art Maker - Document Ready !");
  $("input.custom-file-input").on('change', function(event){
    fileInputHandler(this, event.target.files[0]);
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
  });
  $("button[id^='deleteBtn']").click(function(){deleteImgForm(this);});
  $("#addNewImgBtn").click(newImageUpload);
  
  $("#writePackBtn").click(function(event) {
    startCreateBhvPack(event);
  });
  
  /*Colour Palette modalview and related UI*/
  $(".colour-insert").each(function (index, elem) {
    var h = $(elem).html();
    $(elem).html("<span style=\"color:"+$(elem).data('colour')+";\">"+icon+"</span>"+h);
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
  
  for (var i=1; i<=7; i++) {
    $("div#cari"+i+" > img").attr('src', "images/d"+i+".png");
  }
  $("#demoCarousel").carousel({interval: 2000});
});

$(document).on('load', function() {refreshColourDisplay("000001");});

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
      $("#paletteStd_"+uid).click(); //prop("checked", true);
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
  $("input[name='clrSelect']").each(function(index, elem) {
    $(elem).prop('checked', (sel.includes($(elem).attr('value'))));
  });
  $("#saveColoursBtn").click(function() {
    var clrset = [];
    $("input[name='clrSelect']").each(function(index, elem) {
      if ($(elem).prop('checked')) {
        clrset.push($(elem).attr('value'));
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
  if (! content.search(/\w/i)) {
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
  var area = $("input[name='mapsizeopt_"+uid+"']:checked").val();
  area = [Number(area[0]), Number(area[2])];
  var palette = $("input[name=paletteopt_"+uid+"]:checked").val();
  var dither = Boolean($("#ditherSwitch_"+uid+":checked").length > 0);
  var image = new Image();
  image.onload = function() {
    var analysis = analyseImage(uid, image, area, palette, dither);
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
  }
  image.onerror = function() {
    alert("Error\n\nThere was a problem reading the uploaded image !");
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
    var w = confirm("Warning\n\n"+l+" of the image forms have not been processed."+
                    "These will not be included in the pack - Continue anyway ?");
    if (!w) {return;}
  }
  $("#spinnerModal").addClass('d-block');
  $("#spinnerModal").removeClass('d-none');
  /*var uuidreq = new XMLHttpRequest();
  uuidreq.addEventListener("load", function() {
    console.log(this.responseText);
  });
  uuidreq.open('GET', "http://www.uuidgenerator.net/api/version4/2", true);
  uuidreq.send();*/
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
      min_engine_version: [1,16,0]
    },
    modules: [{
      description: "Created with https://gd-codes.github.io/mc-pixelart-maker, on "+Date(),
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
  for (var o of images) {
    var palette = $("input[name=paletteopt_"+o.uid+"]:checked").val();
    var extrainfo = null;
    switch (palette) {
      case "basic" :
        extrainfo = $("input[name=materialopt_"+o.uid+"]:checked").val();
        break;
      case "extended" :
        extrainfo = $("#heightInput_"+o.uid).val();
        break;
    }
    var fnlist = writeCommands(o.name, o.pic, palette, extrainfo, keep, link);
    for (var f=0; f<fnlist.length; f++) {
      fnfolder.file(o.name+"/"+(f+1)+".mcfunction", fnlist[f]);
    }
  }
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
