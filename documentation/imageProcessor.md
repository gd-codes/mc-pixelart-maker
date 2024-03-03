# Minecraft Pixel Art Maker Functions

## `analyseImage(uid, image, area, palette, d3, dither)`
- **Purpose**: Analyzes and processes an image for pixel art creation.
- **Parameters**:
  - `uid`: User ID.
  - `image`: Image object to analyze.
  - `area`: Area size for pixel art.
  - `palette`: Color palette.
  - `d3`: Whether to enable 3D mode.
  - `dither`: Whether to apply dithering.
- **Details**:
  - Manages the display and canvas settings.
  - Resizes the image based on the specified area.
  - Converts the image to a specified color palette.
  - Handles 3D mode, dithering, and generates a final image.
  - Configures preview buttons for the original, resized, and converted images.

## `closestColour(r, g, b, palette)`
- **Purpose**: Finds the closest color in a palette to a given RGB value.
- **Parameters**:
  - `r`: Red component.
  - `g`: Green component.
  - `b`: Blue component.
  - `palette`: Color palette.
- **Details**:
  - Uses a redmean-based weighted formula for color distance.
  - Quantizes the RGB values to the closest color in the palette.

## `convertPalette(pal, pixels, dither, shademap)`
- **Purpose**: Converts an image to a specified color palette.
- **Parameters**:
  - `pal`: Color palette.
  - `pixels`: Image pixel data.
  - `dither`: Whether to apply dithering.
  - `shademap`: Shade map for block types.
- **Details**:
  - Quantizes the image using the specified color palette.
  - Applies Floyd-Steinberg dithering if enabled.
  - Optionally generates a shade map for block types.

## `makeLogo(images)`
- **Purpose**: Creates a logo image for a Minecraft behavior pack.
- **Parameters**:
  - `images`: Array of images.
- **Details**:
  - Draws images onto a canvas to form a logo.
  - Returns a data URL for the logo image.

## `getPixelAt(x, z, dataobj)`
- **Purpose**: Retrieves the RGBA values of a pixel at a specified position.
- **Parameters**:
  - `x`: X-coordinate of the pixel.
  - `z`: Z-coordinate of the pixel.
  - `dataobj`: Image data object.
- **Details**:
  - Returns an array containing the RGBA values of the specified pixel.

## `indexOfArray(a, parent_arr)`
- **Purpose**: Finds the index of an array within a parent array.
- **Parameters**:
  - `a`: Array to search for.
  - `parent_arr`: Parent array.
- **Details**:
  - Compares array elements and returns the index if found.

# Additional Information
- This script is part of the Minecraft Pixel Art Maker created by gd-codes in 2020.
- Project URL: [Minecraft Pixel Art Maker](https://gd-codes.github.io/mc-pixelart-maker/)
