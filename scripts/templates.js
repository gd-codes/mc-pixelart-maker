/*
Minecraft Pixel Art Maker
© gd-codes 2020
*/

const SVGicons = {
  square : `<svg width="1.0em" height="1.0em" viewBox="0 0 16 16" class="bi bi-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style="border: 1px solid black; border-radius: 15%;"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/></svg>`,
  square_noborder : `<svg width="1.0em" height="1.0em" viewBox="0 0 16 16" class="bi bi-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2z"/></svg>`,
  questionmark : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-question-circle" > <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/></svg>`,
  infosquare : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>`,
  save : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2" viewBox="0 0 16 16"><path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v3.5A1.5 1.5 0 0 1 11.5 6h-7A1.5 1.5 0 0 1 3 4.5V1H1.5a.5.5 0 0 0-.5.5m9.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"/></svg>`,
  edit : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16"><path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/></svg>`,
  shrink : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-angle-contract" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"/></svg>`,
  goarrow : `<svg width="1em" height="1em" viewbox="0 0 16 16" class="bi bi-arrow-right-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 8.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/></svg>`,
  menubar : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-window-reverse" viewBox="0 0 16 16"><path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/><path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"/></svg>`
};


const EJStemplates = {
  colourSelectionTable: `
<% Colours.forEach(function(colourdata, colourcode) { %>
  <tr>
    <td><div class="form-check checkbox-scaled">
      <input type="checkbox" class="form-check-input position-static" name="clrSelect" value="<%=colourcode%>"/>
    </div></td>
    <td class="colour-insert display-4" data-colour="rgb(<%=colourdata.rgb[0]%>,<%=colourdata.rgb[1]%>,<%=colourdata.rgb[2]%>)">
      <span style="color: rgb(<%=colourdata.rgb[0]%>,<%=colourdata.rgb[1]%>,<%=colourdata.rgb[2]%>);"><%-SVGicons.square%></span>
    </td>
    <td> <%=colourdata.name%> </td>
    <td> <%-colourdata.description%> </td>
  </tr>
<% }) %>`,

/** 
 * Note: Template must contain no newline or whitespaces!
 * @param {{rgb:[Number,Number,Number]}} colourdata
 */
  colourPaletteIcon: `<span style="color:rgb(<%=colourdata.rgb[0]%>,<%=colourdata.rgb[1]%>,<%=colourdata.rgb[2]%>); padding: 2px;"><%-SVGicons.square_noborder%></span>`,
  
  /** 
   * @param {String} uid
   * @param {String} content
   * @see imageNavTabContent
   */
  imageNavTab: `
<li class="nav-item" id="link_<%=uid%>">
  <a class="nav-link" data-toggle="tab" href="#tabPane_<%=uid%>">
    <span id="tabLabel_<%=uid%>"><%- content %></span>
    <span id="deleteBtn_<%=uid%>" class="delete-X"> &nbsp; &times;</span>
  </a>
</li>`,
  
  /** 
   * @param {String} tabTitle
   * @param {Boolean} tabDirty
   * @param {Number} tabSavedDataSize
   * @param {Boolean} originalWasResized
   */
  imageNavTabContent: `
<%=tabTitle%>
<% if (tabDirty) { %><small title="Has unsaved changes">&nbsp;*</small><% } %>
<% if (tabSavedDataSize > 0) { %>
  <small title="Local storage: <%=((tabSavedDataSize / 1024 + 1) | 0)%> kb<% if (originalWasResized) { %> (stored resized image because original was too big; re-select the image to change area)<% } %>">
    &nbsp;&nbsp;<%-SVGicons.save%><% if (originalWasResized) { %>&nbsp;&nbsp;<%-SVGicons.shrink%><% } %>
  </small>
<% } %>`,
  
  /** 
   * @param {String} uid
   * @param {String} fname
   */
  guideNavTab: `
<li class="nav-item" id="guidelink_<%=uid%>">
  <a class="nav-link active" data-toggle="tab" href="#guideTab_<%=uid%>">
    <%=fname%> <span id="deleteGuide_<%=uid%>" class="delete-X"> &nbsp; &times;</span>
  </a>
</li>`,
  
  /** 
   * @param {String} uid
   * @param {String} fname
   * @param {Number} area
   */
  guideTab: `
<div class="tab-pane fade show active" id="guideTab_<%=uid%>">
  <div class="row mb-2">
    <div class="col-md-4"></div>
    <div class="col-md-4 btn btn-outline-info btn-block" id="genGuideBtn_<%=uid%>">
      View Map Guide for <%=fname%>
    </div>
    <div class="col-md-4"></div>
    <p class="mt-2 mx-auto text-center text-info">You will need to place <%=(area * 128 * 128)%> blocks!</p>
  </div>
  <% if (area > 6) { %>
    <div class="alert alert-danger mx-auto p-2 mt-3 mb-0">
      <p class="text-center mb-0"><strong class="text-dark">Warning &nbsp; </strong>
      Generating the detailed guide for such a large image may possibly cause lag/performance issues on this site. Proceed with caution.
      </p>
    </div>
  <% } %>
</div>`,
  
  /** 
   * @param {String} uid
   * @param {Boolean} active
   */
  imageForm: `
  <div id="dddisp_<%=uid%>" class="dragDropDisplay h-100 w-100 position-absolute justify-content-center d-none">
    <div  class="dragDropButton d-flex justify-content-center align-self-center w-50">
      Drop the Image HERE
    </div>
  </div>
  <div class="tab-pane fade <% if (active) { %>show active<% } %> py-3 px-4" id="tabPane_<%=uid%>">
  <form id="imageForm_<%=uid%>">
  <div class="form-group">
    <label for="imgInput_<%=uid%>" class="text-primary font-weight-bold">Select an Image</label>
    <div class="custom-file">
    <input type="file" class="custom-file-input" id="imgInput_<%=uid%>" accept="image/*" required/>
    <label for="imgInput_<%=uid%>" class="custom-file-label">Choose file</label>
    </div>
  </div>
  <div class="form-group row">
    <label for="fnNameInput_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">Function name</label>
    <div class="col-sm-10">
    <input type="text" id="fnNameInput_<%=uid%>" class="form-control" pattern="[A-Za-z0-9_\\.\\-\\(\\)]+"
        placeholder="Enter a short identifier for this image..." required/>
    <small class="form-text text-muted text-sm-left pl-sm-2">The name can only contain alphanumeric characters
      (case <i>in</i>sensitive), periods, underscores, hyphens and parentheses.</small>
    </div>
  </div>
  <div class="form-group row">
    <label for="mapSizeInput_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">Area</label>
    <div class="col-sm-10">
    <span class="form-text text-muted">Select the number of Level 0 (128x128) maps that the image should cover :</span>
      <table class="table-borderless" id="mapSizeInput_<%=uid%>"><tbody>
      <% for (var i=1; i<=4; i++) { %>
        <tr>
        <% for (var j=1; j<=4; j++) { %>
          <td class="px-1 py-1">
            <div class="form-check form-check-inline">
              <input class="form-check form-check-input" id="mapSize<%=j%><%=i%>_<%=uid%>" type="radio" 
                  name="mapsizeopt_<%=uid%>" value="<%=j%>x<%=i%>" required/>
              <label for="mapSize<%=j%><%=i%>_<%=uid%>" class="form-check-label"><%=j%>x<%=i%>&nbsp;</label>
            </div>
          </td>
        <% } %>
        </tr>
      <% } %>
      </tbody></table>
    </div>
  </div>
  <div class="form-group row">
    <label for="materialOpts_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">Palette</label>
    <div class="col-sm-10" id="materialOpts_<%=uid%>">
    <div class="row">
      <div class="col-auto">
      <button class="btn btn-info btn-sm my-auto" type="button" id="materialChooseBtn_<%=uid%>">Customise</button>
      </div>
      <div class="col overflow-hidden" style="line-height: 18px;" id="materialOptsDisplay_<%=uid%>" data-selected="">
      <i class="text-muted">By default, all colours will be used</i>
      </div>
    </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="3dOption_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">3D</label>
    <div class="col-sm-10 pt-sm-2" id="3dOption_<%=uid%>"><div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="3dSwitch_<%=uid%>"/>
    <label for="3dSwitch_<%=uid%>" class="custom-control-label">Use height variation of blocks to obtain additional 
      lighter and darker shades of each colour (3x the palette !)
    </label>
    </div></div>
  </div>
  <div class="form-group row collapse" id="extraHeightOption_<%=uid%>">
    <label for="heightInput_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">Height</label>
    <div class="col-sm-10">
    <small class="form-text text-muted pb-sm-1">Height range of the 3D structure, between 5 and 380 blocks:</small>
    <input type="number" class="form-control" id="heightInput_<%=uid%>" min="5" max="380" 
        placeholder="Enter a height range (recommended - at least 50 blocks)">
    </div>
  </div>
  <div class="form-group row">
    <label for="ditherOption_<%=uid%>" class="col-sm-2 col-form-label text-primary text-center">Dither</label>
    <div class="col-sm-10 pt-sm-2" id="ditherOption_<%=uid%>"><div class="custom-control custom-switch">
    <input type="checkbox" class="custom-control-input" id="ditherSwitch_<%=uid%>"/>
    <label for="ditherSwitch_<%=uid%>" class="custom-control-label">Dither converted image <small>(Recommended)</small>
    </label> &nbsp;
    <a data-toggle="tooltip" data-placement="top" data-html="true" title="Apply Floyd-Steinberg Dithering <br> 
      <a href=&quot;https://en.wikipedia.org/wiki/Dither&quot; target=&quot;_blank&quot; rel=&quot;noreferrer&quot;> 
      en.wikipedia.org/wiki/Dither</a><br> This is good for photographs, but may not be necessary for cartoons/etc with
      solid colours (no gradients)" data-delay="{&quot;show&quot;:100, &quot;hide&quot;:2000}" 
    class="text-info"><%-SVGicons.questionmark%></a>
    </div></div>
  </div>
  <div class="form-group d-flex justify-content-center" id="formActionsPreSubmit_<%=uid%>">
    <button class="btn btn-outline-danger mx-md-2" id="resetImageFormBtn_<%=uid%>" type="button">Reset</button>
    <button class="btn btn-primary mx-md-2" id="processImageBtn_<%=uid%>" type="submit">Process Image &nbsp; &nbsp; <%-SVGicons.goarrow%></button>
  </div>
  </form>
  <div class="row d-none justify-content-between" id="formActionsPostSubmit_<%=uid%>">
    <div></div>
    <div class="d-inline">
      <span class="text-right mr-md-1"> View Images </span>
      <div class="btn-group">
      <button class="btn btn-outline-info" id="viewOrigImgBtn_<%=uid%>">Original</button>
      <button class="btn btn-outline-info" id="viewResizedImgBtn_<%=uid%>">Resized</button>
      <button class="btn btn-info font-weight-bold" id="viewFinalImgBtn_<%=uid%>">Converted</button>
      </div>
    </div>
    <div>
      <button class="btn btn-info" id="saveFormDataBtn_<%=uid%>"><%-SVGicons.save%> Save
        <a data-toggle="tooltip" data-placement="top" data-html="true" title="Save to the browser's local storage.
          No data is sent to the server. This form will be restored the next time you visit this site."
          data-delay="{&quot;show&quot;:100, &quot;hide&quot;:2000}"
          class="text-info text-info-inverted">&nbsp;<%-SVGicons.questionmark%></a>
      </button>
      <button class="btn btn-warning mr-sm-3" id="imgEditBtn_<%=uid%>"><%-SVGicons.edit%> Edit</button>
    </div>
  </div>
</div>`,
  
  /** 
   * @param {string} uid
   * @param {Boolean} is3D
   * @param {Number} numzones
   * @param {Array<Array<Array<[Number,Number]>>>} tabledatas
   * @param {Array<Array<Number>>} blockcounts
   * @param {Array<Number>} cindexns
   * @see getSurvivalGuideTableData()
   */
  survivalGuide: `
<nav aria-label="Pagination" id="guidePageBar_<%=uid%>">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link text-dark bg-light border-0"><%-SVGicons.menubar%>&nbsp; Zone </a>
    </li>
    <% for( let zone = 0; zone < numzones; zone++ ) { %>
      <li class="page-item">
        <a class="page-link" data-toggle="collapse" href="#guidePage_<%=zone+1%>_map_<%=uid%>"><%=zone+1%></a>
      </li>
    <% } %>
  </ul>
</nav>
<div class="row">
  <div class="col-sm-4 px-3 py-2">
    <p class="text-primary"> &nbsp; Preferences</p>
    <input type="checkbox" class="mx-2" id="tabDirection_<%=uid%>" />
    <label for="tabDirection_<%=uid%>">Enable Vertical <code>Tab</code> movement</label>
    <br/>
    <input type="checkbox" class="mx-2" id="guideTotalBlockCount_<%=uid%>" />
    <label for="guideTotalBlockCoun>_<%=uid%>">View total count for all zones</label>
    <br/>
    <input type="checkbox" class="mx-2" id="guideStackViewCount_<%=uid%>" />
    <label for="guideStackViewCount_<%=uid%>">Display values in stacks of 64</label>
  </div>
  <div class="col-sm-8 alert alert-info">
    <p class="alert-heading"><%-SVGicons.infosquare%></p>
    <p>For convenience, each artwork is divided into a number of zones 
      (the same way that <a rel="nofollow" href="manual.html#in-mc" target="_blank"> the commands</a> are), 
      2 halves per map.<br/>Coordinates in each zone are specified relative to its top-left (NW) corner.
    </p>
    <p>Click on any of the squares in the table to view a popup with its block type and coordinates.
      <br/>You can also use the <code>Tab</code> key to navigate row-by-row or column-by-column,
      or <code>&larr;&uarr;&darr;&rarr;</code> arrow keys.
    </p>
    <% if (is3D) { %>
      <p>For 3D map art, the shading of lighter/darker blocks is not shown here to make it easier to
      distinguish between different blocks. Refer to the converted image preview for the actual colours.</p>
    <% } %>
  </div>
</div>
<div class="accordion border-top border-light pt-2" id="survGuide_<%=uid%>">
  <% for( let zone = 0; zone < numzones; zone++ ) { %>
    <div class="collapse" id="guidePage_<%=zone+1%>_map_<%=uid%>" data-parent="#survGuide_<%=uid%>">
      <div class="row">
        <div class="col-md-4" id="survGuideBlockCount_<%=zone+1%>_<%=uid%>">
          <table class="table table-hover table-sm" id="countlistTable_<%=zone%>_<%=uid%>">
            <caption class="text-dark">Palette Usage - Zone <%=zone+1%></caption>
            <thead class="thead-light">
              <tr class="py-3">
              <th scope="col" class="pl-3">Material</th>
              <th scope="col">Count</th>
              <th scope="col" class="d-none">Count</th>
              <th scope="col" class="d-none">Count (Total)</th>
              <th scope="col" class="d-none">Count (Total)</th>
              </tr>
            </thead>
            <tbody>
            <% cindexns.forEach(i => { %>
              <tr>
                <td class="pl-4"><%=MaterialNames[i]%></td>
                <td class="text-right pr-3"><%=blockcounts[zone+1][i]%></td>
                <td class="d-none text-right pr-3"><%=Math.floor(blockcounts[zone+1][i] / 64)%>s + <%=blockcounts[zone+1][i] % 64%></td>
                <td class="d-none text-right pr-3"><%=blockcounts[0][i]%></td>
                <td class="d-none text-right pr-3"><%=Math.floor(blockcounts[0][i] / 64)%>s + <%=blockcounts[0][i] % 64%></td>
              </tr>
            <% }) %>
            </tbody>
          </table>
        </div>
        <div class="col-md-8 guide-tableareas" id="survGuideTableArea_<%=zone+1%>_<%=uid%>">
          <table class="table table-responsive">
          <% for( let z = 0; z < 128; z++ ) { %>
            <tr>
            <% for( let x = 0; x < 64; x++ ) { %>
              <% let code = tabledatas[zone][z][x][0]; %>
              <% let y = tabledatas[zone][z][x][1]; %>
              <% let pixnorm = ColourList[3*code]; %>
              <td tabindex="0" style="background-color: rgb(<%=pixnorm[0]%>,<%=pixnorm[1]%>,<%=pixnorm[2]%>);"
                data-trigger="focus" data-placement="top" title="<%=MaterialNames[code]%>" data-html="true"
                data-content="Position : &lt;b&gt;~<%=x%> ~<%=y%> ~<%=z%>&lt;/b&gt;">
              </td>
            <% } %>
            </tr>
          <% } %>
          </table>
        </div>
      </div>
    </div>
  <% } %>
</div>`,

  colourPaletteFallback: `<i class=\"text-muted\">By default, all colours will be used</i>`,

};

