/*Dynamically addd new form elements to the HTML
They appear identical to the oriiginal ones in index.html
but can be distinguished by a 6 character 'uid' suffix to all
the HTML id attributes, that will be unique (randomly generated)*/

function newImageUpload() {
  var uid = "";
  var charset = "abcdefghijklmnopqrstuvwxyz1234567890";
  for(var i=0; i<6; i++) {
    uid += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  $("#navbarList").append("<li class=\"nav-item\" id=\"link_"+uid+"\">"+
        "<a class=\"nav-link\" data-toggle=\"tab\" href=\"#tabPane_"+uid+"\">New Image</a></li>");
  $("#tabContainer").append("<div class=\"tab-pane fade show\" id=\"tabPane_"+uid+"\">"+
"  <form id=\"imageForm_"+uid+"\">"+
"    <div class=\"form-group\">"+
"      <label for=\"imgInput_"+uid+"\" class=\"text-primary font-weight-bold\">Select an Image</label>"+
"      <div class=\"custom-file\">"+
"        <input type=\"file\" class=\"custom-file-input\" id=\"imgInput_"+uid+"\" accept=\"image/*\" required/>"+
"        <label for=\"imgInput_"+uid+"\" class=\"custom-file-label\">Choose file</label>"+
"      </div></div>"+
"    <div class=\"form-group row\">"+
"      <label for=\"fnNameInput_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Function name</label>"+
"      <div class=\"col-sm-10\">"+
"      <input type=\"text\" id=\"fnNameInput_"+uid+"\" class=\"form-control\" pattern=\"[A-Za-z0-9_.\\-()]+\""+
"             placeholder=\"Enter a short identifier for this image...\" required/>"+
"      <small class=\"form-text text-muted text-sm-left pl-sm-2\">The name can only contain alphanumeric characters "+
"        (case <i>in</i>sensitive), periods, underscores, hyphens and parentheses.</small></div>"+
"    </div>"+
"    <div class=\"form-group row\">"+
"      <label for=\"mapSizeInput_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Area</label>"+
"      <div class=\"col-sm-10\">"+
"        <span class=\"form-text text-muted\">Select the number of Level 0 (128x128) maps that the image should cover :</span>"+
"        <div id=\"mapSizeInput_"+uid+"\">"+
"          <div class=\"mx-auto\">"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize11_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"1x1\" required/>"+
"            <label for=\"mapSize11_"+uid+"\" class=\"form-check-label\">1x1&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize21_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"2x1\"/>"+
"            <label for=\"mapSize21_"+uid+"\" class=\"form-check-label\">2x1&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize31_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"3x1\"/>"+
"            <label for=\"mapSize31_"+uid+"\" class=\"form-check-label\">3x1&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize41_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"4x1\"/>"+
"            <label for=\"mapSize41_"+uid+"\" class=\"form-check-label\">4x1</label></div>"+
"          </div><div class=\"mx-auto\">"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize12_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"1x2\" required/>"+
"            <label for=\"mapSize12_"+uid+"\" class=\"form-check-label\">1x2&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize22_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"2x2\"/>"+
"            <label for=\"mapSize22_"+uid+"\" class=\"form-check-label\">2x2</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize32_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"3x2\"/>"+
"            <label for=\"mapSize32_"+uid+"\" class=\"form-check-label\">3x2</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize42_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"4x2\"/>"+
"            <label for=\"mapSize42_"+uid+"\" class=\"form-check-label\">4x2</label></div>"+
"          </div><div class=\"mx-auto\">"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize13_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"1x3\" required/>"+
"            <label for=\"mapSize13_"+uid+"\" class=\"form-check-label\">1x3&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize23_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"2x3\"/>"+
"            <label for=\"mapSize23_"+uid+"\" class=\"form-check-label\">2x3</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize33_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"3x3\"/>"+
"            <label for=\"mapSize33_"+uid+"\" class=\"form-check-label\">3x3</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize43_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"4x3\"/>"+
"            <label for=\"mapSize43_"+uid+"\" class=\"form-check-label\">4x3</label></div>"+
"          </div><div class=\"mx-auto\">"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize14_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"1x4\" required/>"+
"            <label for=\"mapSize14_"+uid+"\" class=\"form-check-label\">1x4&nbsp;</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize24_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"2x4\"/>"+
"            <label for=\"mapSize24_"+uid+"\" class=\"form-check-label\">2x4</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize34_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"3x4\"/>"+
"            <label for=\"mapSize34_"+uid+"\" class=\"form-check-label\">3x4</label></div>"+
"            <div class=\"form-check form-check-inline\">"+
"            <input class=\"form-check form-check-input\" id=\"mapSize44_"+uid+"\" type=\"radio\" "+
"                   name=\"mapsizeopt_"+uid+"\" value=\"4x4\"/>"+
"            <label for=\"mapSize44_"+uid+"\" class=\"form-check-label\">4x4</label></div>"+
"          </div>"+
"        </div>"+
"      </div>"+
"    </div>"+
"    <div class=\"form-group row\">"+
"      <label for=\"paletteOptions_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Structure</label>"+
"      <div class=\"col-sm-10\" id=\"paletteOptions_"+uid+"\">"+
"        <span class=\"form-text text-muted\">Choose a material set / colour palette for the image : </span>"+
"        <div class=\"form-check\">"+
"          <!--a href=\"#extraMaterialOptions\" class=\"text-decoration-none text-dark\" data-toggle=\"collapse\"-->"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"paletteBsc_"+uid+"\" "+
"                 name=\"paletteopt_"+uid+"\" value=\"basic\" required/>"+
"          <label for=\"paletteBsc_"+uid+"\" class=\"form-check form-check-label pb-sm-2\">Basic<br/>"+
"          <small>Use only the 16 dye colours in a flat arrangement, and select which material to build with</small></label>"+
"        </div>"+
"        <div class=\"form-check\">"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"paletteStd_"+uid+"\" "+
"                 name=\"paletteopt_"+uid+"\" value=\"standard\"/>"+
"          <label for=\"paletteStd_"+uid+"\" class=\"form-check form-check-label pb-sm-2\">Standard<br/>"+
"          <small>Use all unique blocks in a flat arrangement to get as many colours as possible</small></label>"+
"        </div>"+
"        <div class=\"form-check\">"+
"          <!--a href=\"#extraHeightOption\" class=\"text-decoration-none text-dark\" data-toggle=\"collapse\"-->"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"paletteExt_"+uid+"\" "+
"                 name=\"paletteopt_"+uid+"\" value=\"extended\"/>"+
"          <label for=\"paletteExt_"+uid+"\" class=\"form-check form-check-label pb-sm-2\">Extended<br/>"+
"          <small>Use all unique blocks in a 3D arrangement to get lighter and darker shades of standard colours</small></label>"+
"        </div>"+
"      </div>"+
"    </div>"+
"    <div class=\"form-group row collapse\" id=\"extraMaterialOptions_"+uid+"\">"+
"      <label for=\"materialInput_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Material</label>"+
"      <div class=\"col-sm-10\" id=\"materialInput_"+uid+"\">"+
"        <span class=\"form-text text-muted\">Build the image out of :</span>"+
"        <div class=\"form-check\">"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"materialWool_"+uid+"\" "+
"                 name=\"materialopt_"+uid+"\" value=\"wool\"/>"+
"          <label for=\"materialWool_"+uid+"\" class=\"form-check form-check-label\">Wool</label>"+
"        </div><div class=\"form-check\">"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"materialConcrete_"+uid+"\" "+
"                 name=\"materialopt_"+uid+"\" value=\"concrete\"/>"+
"          <label for=\"materialConcrete_"+uid+"\" class=\"form-check form-check-label\">Concrete</label>"+
"        </div><div class=\"form-check\">"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"materialClay_"+uid+"\" "+
"                 name=\"materialopt_"+uid+"\" value=\"clay\"/>"+
"          <label for=\"materialClay_"+uid+"\" class=\"form-check form-check-label\">Terracotta</label>"+
"        </div>"+"<div class=\"form-check\">"+
"          <input type=\"radio\" class=\"form-check form-check-input\" id=\"materialGlass_"+uid+"\" "+ 
"                 name=\"materialopt_"+uid+"\" value=\"stained_glass\"/>"+
"          <label for=\"materialGlass_"+uid+"\" class=\"form-check form-check-label\">Stained Glass</label>"+
"        </div>"+
"      </div>"+
"    </div>"+
"    <div class=\"form-group row collapse\" id=\"extraHeightOption_"+uid+"\">"+
"      <label for=\"heightInput_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Height</label>"+
"      <div class=\"col-sm-10\">"+
"        <small class=\"form-text text-muted pb-sm-1\">Maximum height of the 3D structure, between 7 and 255 blocks:</small>"+
"        <input type=\"number\" class=\"form-control\" id=\"heightInput_"+uid+"\" min=\"7\" max=\"255\" "+
"               placeholder=\"Enter height... (100 blocks recommended)\">"+
"      </div>"+
"    </div>"+
"    <div class=\"form-group row\">"+
"      <label for=\"ditherOption_"+uid+"\" class=\"col-sm-2 col-form-label text-primary text-center\">Dither</label>"+
"      <div class=\"col-sm-10 pt-sm-2\" id=\"ditherOption_"+uid+"\"><div class=\"custom-control custom-switch\">"+
"        <input type=\"checkbox\" class=\"custom-control-input\" id=\"ditherSwitch_"+uid+"\"/>"+
"        <label for=\"ditherSwitch_"+uid+"\" class=\"custom-control-label\">Dither converted image <small>(Recommended)</small>"+
"        </label>"+
"      </div></div>"+
"    </div>"+
"    <div class=\"form-group d-flex justify-content-center\" id=\"formActionsPreSubmit_"+uid+"\">"+
"      <input type=\"reset\" class=\"btn btn-outline-danger mx-md-2\" id=\"resetImageFormBtn_"+uid+"\"/>"+
"      <button class=\"btn btn-primary mx-md-2\" id=\"processImageBtn_"+uid+"\" type=\"submit\">Process Image &nbsp; &nbsp;"+
"        <svg width=\"1em\" height=\"1em\" viewBox=\"0 0 16 16\" class=\"bi bi-arrow-right-square-fill\" fill=\"currentColor\" "+
"             xmlns=\"http://www.w3.org/2000/svg\">"+
"          <path fill-rule=\"evenodd\" d=\"M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z\"/>"+
"        </svg></button>"+
"    </div>"+
"  </form>"+
"  <div class=\"row d-none justify-content-between\" id=\"formActionsPostSubmit_"+uid+"\">"+
"    <div></div>"+
"    <div class=\"d-inline\">"+
"      <span class=\"text-right mr-md-1\"> View Images </span>"+
"      <div class=\"btn-group\">"+
"        <button class=\"btn btn-info\" id=\"viewOrigImgBtn_"+uid+"\">Original</button>"+
"        <button class=\"btn btn-info\" id=\"viewResizedImgBtn_"+uid+"\">Resized</button>"+
"        <button class=\"btn btn-info font-weight-bold\" id=\"viewFinalImgBtn_"+uid+"\">Converted</button>"+
"      </div>"+
"    </div>"+
"    <button class=\"btn btn-danger mr-sm-3\" id=\"deleteBtn_"+uid+"\">Delete</button>"+
"  </div>"+
"  </div>");
  
  console.info("New image form with id suffix", uid);
  
  //Perform all the bindings similar to $document.ready in main.js
  $("#imgInput_"+uid).on('change', function(event) {
    fileInputHandler(this, event.target.files[0]);
  }); 
  $("#resetImageFormBtn_"+uid).closest('form').on('reset', function() {
    resetImgHandler(this);
  }); 
  $("#paletteOptions_"+uid).on('click', function() {
    displayPaletteOptions(this);
  });
  $("#imageForm_"+uid).submit(function(event){
    submitImgFormHandler(this, event);
  });
  $("#deleteBtn_"+uid).click(function(){deleteImgForm(this);});
  $("li#link_"+uid+" a").click();
  $("#resetImageFormBtn_"+uid).click();
}
