# Minecraft Pixel Art Maker Functions

## `findYMap(imgdata, maxY, shademap)`
- **Purpose**: Finds the YMap, a mapping of heights for pixel blocks.
- **Parameters**:
  - `imgdata`: Image data.
  - `maxY`: Maximum height limit.
  - `shademap`: Shade map for block types.
- **Details**:
  - Generates a YMap based on the provided image data, maximum height limit, and shade map.
  - Utilizes a shade map to determine block types and their heights.
  - Adjusts heights within the specified limit.

## `writeCommands(name, imobj, palette, extrainfo, keep, linkpos, strucs, shademap)`
- **Purpose**: Writes Minecraft commands for placing pixel art blocks.
- **Parameters**:
  - `name`: Name of the function group.
  - `imobj`: Image object.
  - `palette`: Color palette.
  - `extrainfo`: Extra information (e.g., max height for 3D arrangement).
  - `keep`: Whether to keep existing blocks.
  - `linkpos`: Whether positions are linked.
  - `strucs`: Whether to load blocks as structures.
  - `shademap`: Shade map for block types.
- **Details**:
  - Divides the image area into 64x128 zones for individual functions.
  - Iterates through each zone, generating Minecraft commands for block placement.
  - Supports linked and unlinked positions, keeping or replacing existing blocks.
  - Handles structure loading and regular block placement based on the provided parameters.

# Additional Information
- This script is part of the Minecraft Pixel Art Maker created by gd-codes in 2020.
- Project URL: [Minecraft Pixel Art Maker](https://gd-codes.github.io/mc-pixelart-maker/)
