# Summary of Functions

## 1. `setup()` Function:
- Initializes the pixel art maker.
- Binds buttons and links to their respective actions.
- Sets up the color palette table modal.
- Performs initial setup tasks on document ready.

## 2. `confirmCloseTab(event)` Function:
- Handles the confirmation of closing the tab before unloading.

## 3. `lazyload()` Function:
- Lazy-loads carousel images after the page is fully loaded.

## 4. Image Form Handling Functions:
- `fileInputHandler(elem, file)`: Handles file input and saves the image as a data URI.
- `resetImgHandler(elem)`: Resets an image upload form to its default state.
- `displayPaletteOptions(elem)`: Displays extra fields in the image upload form based on user selections.
- `configureColourModal(elem)`: Configures checkboxes in the color table modal based on the selected values.
- `refreshColourDisplay(uid)`: Refreshes the small square color markers in the selected palette display.
- `submitImgFormHandler(elem, event)`: Handles client-side validation and initiates image processing.

## 5. Behavior Pack Generation Functions:
- `uuidv4()`: Generates UUIDs for the behavior pack.
- `startCreateBhvPack(event)`: Initiates the creation of the behavior pack by collecting processed image data.
- `writeBhvPack(images, uuids)`: Creates the behavior pack ZIP file based on processed image data.
- `setSaveAsZip(blob)`: Configures the download link for the generated ZIP file.
- `clearBehaviourPack()`: Resets the behavior pack generation form.

## 6. Survival Guide Functions:
- `addSurvGuideGenerator(uid)`: Adds a survival guide form for a submitted image.
- `deleteSurvivalGuide(uid, readd=false)`: Deletes the survival guide associated with an image.

## 7. Utility Functions:
- `uuidv4()`: Generates a random UUID.
- `lazyload()`: Lazy-loads carousel images after the page is fully loaded.

## 8. Document Ready and Window Load Event Handlers:
- `window.addEventListener('beforeunload', confirmCloseTab)`: Handles the confirmation of closing the tab before unloading.
- `$(document).ready(setup)`: Calls the setup function when the document is ready.
- `$(window).on('load', lazyload)`: Calls the lazyload function when the window is fully loaded.
