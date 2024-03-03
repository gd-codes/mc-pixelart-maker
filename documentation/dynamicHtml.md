## 1. `newImageUpload(uid)`
- **Purpose**: Generates a new image upload form.
- **Parameters**:
  - `uid`: User ID.
- **Details**:
  - Creates a unique ID for the form elements based on a random 6-character string.
  - Generates an HTML form for uploading images, specifying function name, area size, color palette, 3D option, and dithering.
  - Binds various event handlers for image upload, form reset, 3D option display, palette customization, form submission, and deletion.
  - Initializes PictureData for the new image.

## 2. `createSurvivalGuide(uid)`
- **Purpose**: Creates a survival guide for the pixel art.
- **Parameters**:
  - `uid`: User ID.
- **Details**:
  - Generates a guide with information on the palette usage and block counts for each zone in the pixel art.
  - Displays the guide in an accordion-style layout with collapsible sections for each zone.
  - Provides options to view total block counts, switch between individual counts and stack views.

## 3. `toggleCountListView(uid, l, total, stacks)`
- **Purpose**: Toggles the visibility of columns in the block count list view.
- **Parameters**:
  - `uid`: User ID.
  - `l`: Number of zones.
  - `total`: Whether to display total block counts.
  - `stacks`: Whether to display counts in stacks of 64.
- **Details**:
  - Adjusts the visibility of columns in the block count list based on the provided parameters.

## 4. `switchActiveGuidePage(pagelink)`
- **Purpose**: Switches the active page in the survival guide.
- **Parameters**:
  - `pagelink`: Link to the guide page.
- **Details**:
  - Manages the active status of the pagination links, ensuring only one link is active at a time.

These functions collectively provide the functionality for generating image upload forms, creating survival guides, and managing block count visibility in the guide.
