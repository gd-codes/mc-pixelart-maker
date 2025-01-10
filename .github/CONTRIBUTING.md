# Contribution Tips

This file outlines the basic structure and functionality of the web app, in case you would like to contribute code. 
Thank you for considering to help develop this app, your efforts will be appreciated!

- The app is deployed as a _static_ website. 
- Deployment occurs via Github Pages from the (default) `main` branch. Hence, changes to main go live as soon as they are pushed.
- Feel free to create a PR for the main branch, but it wouldn't be merged as long as the code has bugs or incomplete sections that shouldn't be deployed immediately.

## HTML
- The server-side page content is contained in `templates/*.ejs`. Please edit only these source templates and not the `/*.html` files that are automatically generated from these, to be served statically (e.g. if you compiled them to run the site locally).
- Additionally, many UI fragments on the main (index) page need to be rendered using client-side EJS, and these source snippets are defined in `scripts/templates.js`.
- When developing and testing locally, you may install the [ejs CLI](https://www.npmjs.com/package/ejs) and run the following commands: 
```bash
# Build static files
# The version variables are only displayed as content, can set any value
ejs templates/index.ejs -o index.html -i '{"GAME_VERSION": "1.21.50", "APP_VERSION": "2.0"}'
ejs templates/manual.ejs -o manual.html -i '{"GAME_VERSION": "1.21.50", "APP_VERSION": "2.0"}'
ejs templates/about.ejs -o about.html -i '{"GAME_VERSION": "1.21.50", "APP_VERSION": "2.0"}'
# Replace with any static HTTP server of your choice
python3 -m http.server .
```
- On github, the server-side EJS template build and deploy step is automated using a custom workflow.

## Javascript
- All the app logic is in the form of client-side Javascript located in `scripts/`.
- Some constants/objects and function definitions are shared between files via the global namespace. 
- Script summaries:
    - `theme_pwa.js` is present on all pages - other scripts are used only on the main (index.html) page.
    - `data.js` and `templates.js` define only important global constants such as `Colours` (containing info of minecraft blocks that can be used to render a specific colour on maps) and `EJStemplates`, for example.
    - `imageProcessor.js` and `functionWriter.js` contain purely analytical / mathematical function definitions.
    - `main.js` contains the UI element callbacks and bindings, providing control flow for the app.
- For any modifications/additions to the JS code, please also update JSDoc inline documentation accordingly.


## Miscellaneous
- The `resources/sample_pack.mcpack` is an example output of the website that users can download to test the map art, based on the 2 raw images `images/bastion` and `images/cliff`. Its description is present in `manual.html`. In case of a colour palette update (E.g. after a Minecraft update itself that adds new map colours), this can be re-generated from the web app.

- When making CSS changes, do consider both the light and dark theme variations, if there can be any difference.

- If you updated the color palette or block data for a new Minecraft update, please set the corresponding `GAME_VERSION` environment variable in `.github/workflows/cd.yml` and also in the pack manifest in `main.js`.
