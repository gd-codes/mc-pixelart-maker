
/**
 * Data of all minecraft materials that can be used to create map art.
 * This data was determined experimentally - **not** guaranteed to be *exactly* the same as Minecraft.
 * Each value of `Colours` has the following format -
 * {
 *     `name`: String,                       // User-visible name for the material
 *     `description`: String,                // HTML-rendered description of blocks that appear as this colour on maps.
 *     `id`: String,                         // Minecraft identifier of the form /^\w+ \[( *"\w+" *: *(true|false|"\w+"|\d+)(,(?! *\])|(?= *\])) *)*\]$/ for obtaining a block in `description` via commands
 *     `is_dye`: Boolean,                    // Does the colour correspond to one of the 16 Dye colours in minecraft?
 *     `is_biomevar`: Boolean,               // Does this colour appear differently on maps based on the biome?
 *     `is_greyscale`: Boolean,              // Is this a greyish colour?
 *     `rgb`: Array<UInt8,UInt8,UInt8,255>,  // RGB value of regular variant of the colour, with alpha=255. IMPORTANT : All RGB channels <= 220 to avoid overflow from the `lightPixel` function.
 *     `structure`: String                   // base64 encoded contents of a .mcstructure file containing the single block in `id`
 * }
 */
const Colours = new Map([["white", {
    name: "White Dye",
    description: "White Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Snow, Snow layers, Powder snow, Lodestone, Target block",
    id: 'concrete ["color":"white"]',
    is_dye: true, is_biomevar: false, is_greyscale: true,
    rgb: [220, 220, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAHdoaXRlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAxv///wMAAABEAAAAAA=="
}], ["lightgrey", {
    name: "Light Grey Dye",
    description: "Light Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Structure blocks",
    id: 'concrete ["color":"silver"]',
    is_dye: true, is_biomevar: false, is_greyscale: true,
    rgb: [132, 132, 132, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHNpbHZlcgADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMf///8DAAAARAAAAAA="
}], ["grey", {
    name: "Grey Dye",
    description: "Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Acacia Wood, Stripped Acacia Wood; Tinted Glass; All Dead Coral, Dead Coral Blocks &amp; Side-attached Dead Coral Fans",
    id: 'concrete ["color":"gray"]',
    is_dye: true, is_biomevar: false, is_greyscale: true,
    rgb: [65, 65, 65, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGdyYXkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADI////AwAAAEQAAAAA"
}], ["black", {
    name: "Black Dye",
    description: "Black Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Ancient Debris, Coal Block, Respawn Anchors, Netherite block, Basalt, Polished Basalt &amp; Smooth Basalt, Obsidian, Crying Obsidian, End Portal Tiles, Dragon Egg<br/> Blackstone / Polished Blackstone / Blackstone bricks and all their slabs, walls, stairs; Blackstone Pressure plates; Gilded blackstone",
    id: 'concrete ["color":"black"]',
    is_dye: true, is_biomevar: false, is_greyscale: true,
    rgb: [21, 21, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJsYWNrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyf///wMAAABEAAAAAA=="
}], ["brown", {
    name: "Brown Dye",
    description: "Brown Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Dark Oak planks, Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure plates, Signs &amp; Hanging Signs, Slabs and Stairs; Horizontal Spruce Logs; Soul sand, Soul soil; Impulse Command Block",
    id: 'concrete ["color":"brown"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [88, 65, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJyb3duAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyv///wMAAABEAAAAAA=="
}], ["red", {
    name: "Red Dye",
    description: "Red Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Fire Coral Block; Red Mushroom, Red Mushroom block; Nether Wart Block, Shroomlight; Enchanting table; Brick block, slabs and walls; Sniffer Egg;<br/> All Mangrove Wood, Stripped Wood, Planks, Vertical Logs, Doors, Trapdoors, Fences, Gates, Signs &amp; Hanging Signs, Slabs, Stairs &amp; Pressure Plates",
    id: 'concrete ["color":"red"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [132, 44, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IDAHJlZAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMv///8DAAAARAAAAAA="
}], ["orange", {
    name: "Orange Dye",
    description: "Orange Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Acacia Planks, Fences, Fence Gates, Doors, Trapdoors, Pressure plates, Signs &amp; Hanging Signs, Slabs, Stairs, Vertical Logs &amp; Stripped logs (any orientation) <br/> Copper / Cut Copper (Waxed or not) and all its Stairs, Slabs <br/> Red Sand, Red Sandstone &amp; all its Cut, Smooth, Chiseled variants, their Slabs, Walls, Stairs <br/> Honey block, Honeycomb block; Undyed Terracotta; Lightning rods; Pumpkins, Carved Pumpkins, Jack O' Lanterns",
    id: 'concrete ["color":"orange"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [186, 109, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAG9yYW5nZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMz///8DAAAARAAAAAA="
}], ["yellow", {
    name: "Yellow Dye",
    description: "Yellow Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: All Bamboo Planks, Doors, Trapdoors, Fences, Gates, Signs &amp; Hanging Signs, Slabs, Stairs &amp; Pressure Plates, Blocks of Bamboo, Block of Stripped Bamboo, Bamboo Mosaic, Mosaic slabs &amp; stairs;<br/> Horn Coral block; Hay bales, Bee Nest, Sponge, Wet Sponge",
    id: 'concrete ["color":"yellow"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [197, 197, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHllbGxvdwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAM3///8DAAAARAAAAAA="
}], ["lime", {
    name: "Lime Dye",
    description: "Lime Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Melons",
    id: 'concrete ["color":"lime"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [109, 176, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGxpbWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADO////AwAAAEQAAAAA"
}], ["green", {
    name: "Green Dye",
    description: "Green Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Unglazed and Glazed Terracotta <br/> <i>Also</i>: Moss Block, Moss Carpets, Sea Pickles, Dried Kelp Block, End Portal Frame, Chain Command Block",
    id: 'concrete ["color":"green"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [88, 109, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGdyZWVuAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAz////wMAAABEAAAAAA=="
}], ["cyan", {
    name: "Cyan Dye",
    description: "Cyan Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Warped Signs &amp; Hanging Signs, Pressure Plates, Trapdoors, Slabs, Warped Fungus, Warped Roots, Nether Sprouts <br/> Prismarine blocks, Slabs, Walls &amp; Stairs",
    id: 'concrete ["color":"cyan"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [65, 109, 132, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGN5YW4AAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADQ////AwAAAEQAAAAA"
}], ["lightblue", {
    name: "Light Blue Dye",
    description: "Light Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Soul Fire",
    id: 'concrete ["color":"light_blue"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [88, 132, 186, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IKAGxpZ2h0X2JsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADR////AwAAAEQAAAAA"
}], ["blue", {
    name: "Blue Dye",
    description: "Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Tube Coral block",
    id: 'concrete ["color":"blue"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [44, 65, 153, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGJsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADS////AwAAAEQAAAAA"
}], ["purple", {
    name: "Purple Dye",
    description: "Purple Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Mycelium; Amethyst block, Budding Amethyst Block Amethyst Cluster &amp; buds (all sizes); Bubble Coral Block; Chorus Plant, Chorus Flower; Undyed Shulker Box; Repeating Command Block",
    id: 'concrete ["color":"purple"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [132, 77, 176, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHB1cnBsZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANP///8DAAAARAAAAAA="
}], ["magenta", {
    name: "Magenta Dye",
    description: "Magenta Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Purpur Blocks, Pillars, Slabs &amp; Stairs",
    id: 'concrete ["color":"magenta"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [153, 65, 186, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IHAG1hZ2VudGEAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADU////AwAAAEQAAAAA"
}], ["pink", {
    name: "Pink Dye",
    description: "Pink Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Brain Coral Block; Pearlescent Froglight; Cherry Leaves and Saplings",
    id: 'concrete ["color":"pink"]',
    is_dye: true, is_biomevar: false, is_greyscale: false,
    rgb: [208, 109, 142, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAHBpbmsAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADV////AwAAAEQAAAAA"
}], ["whiteterc", {
    name: "White Terracotta",
    description: "White Terracotta <br/> <i>Also</i>: Cherry Planks, Vertical Logs, Vertical Stripped Logs, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp Stairs; Calcite",
    id: 'stained_hardened_clay ["color":"white"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [180, 152, 138, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBQB3aGl0ZQADBwB2ZXJzaW9uD0YTAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPn///8EAAAAWAAAAAA="
}], ["greyterc", {
    name: "Gray Terracotta",
    description: "Gray Terracotta <br/> <i>Also</i>: Tuff; Cherry Wood, Horizontal Cherry Logs",
    id: 'stained_hardened_clay ["color":"gray"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [49, 35, 30, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBABncmF5AAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+////wQAAABYAAAAAA=="
}], ["brownterc", {
    name: "Brown Terracotta",
    description: "Brown Terracotta <br/> <i>Also</i>: Dripstone Blocks",
    id: 'stained_hardened_clay ["color":"brown"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [65, 43, 30, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBQBicm93bgADBwB2ZXJzaW9uD0YTAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAP3///8EAAAAWAAAAAA="
}], ["blackterc", {
    name: "Black Terracotta",
    description: "Black Terracotta",
    id: 'stained_hardened_clay ["color":"black"]',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [31, 18, 13, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBQBibGFjawADBwB2ZXJzaW9uIQAUAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOj////E////RwAAAAA="
}], ["redterc", {
    name: "Red Terracotta",
    description: "Red Terracotta <br/> <i>Also</i>: All Decorated Pots",
    id: 'stained_hardened_clay ["color":"red"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [122, 51, 39, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yAwByZWQAAwcAdmVyc2lvbg9GEwEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD+////BAAAAFgAAAAA"
}], ["orangeterc", {
    name: "Orange Terracotta",
    description: "Orange Terracotta",
    id: 'stained_hardened_clay ["color":"orange"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [137, 70, 31, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBgBvcmFuZ2UAAwcAdmVyc2lvbg9GEwEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD/////BAAAAFgAAAAA"
}], ["yellowterc", {
    name: "Yellow Terracotta",
    description: "Yellow Terracotta",
    id: 'stained_hardened_clay ["color":"yellow"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [160, 114, 31, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBgB5ZWxsb3cAAwcAdmVyc2lvbg9GEwEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAAAAAAABAAAAFgAAAAA"
}], ["limeterc", {
    name: "Lime Terracotta",
    description: "Lime Terracotta",
    id: 'stained_hardened_clay ["color":"lime"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [88, 100, 45, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBABsaW1lAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAAQAAAAQAAABYAAAAAA=="
}], ["cyanterc", {
    name: "Cyan Terracotta",
    description: "Cyan Terracotta",
    id: 'stained_hardened_clay ["color":"cyan"]',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [75, 79, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBABjeWFuAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAAwAAAAQAAABYAAAAAA=="
}], ["lightblueterc", {
    name: "Light Blue Terracotta",
    description: "Light Blue Terracotta",
    id: 'stained_hardened_clay ["color":"light_blue"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [96, 93, 119, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yCgBsaWdodF9ibHVlAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAABAAAAAQAAABYAAAAAA=="
}], ["blueterc", {
    name: "Blue Terracotta",
    description: "Blue Terracotta",
    id: 'stained_hardened_clay ["color":"blue"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [65, 53, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBABibHVlAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAABQAAAAQAAABYAAAAAA=="
}], ["purpleterc", {
    name: "Purple Terracotta",
    description: "Purple Terracotta",
    id: 'stained_hardened_clay ["color":"purple"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [105, 62, 75, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBgBwdXJwbGUAAwcAdmVyc2lvbg9GEwEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAAGAAAABAAAAFgAAAAA"
}], ["magentaterc", {
    name: "Magenta Terracotta",
    description: "Magenta Terracotta",
    id: 'stained_hardened_clay ["color":"magenta"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [128, 75, 93, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBwBtYWdlbnRhAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAABwAAAAQAAABYAAAAAA=="
}], ["pinkterc", {
    name: "Pink Terracotta",
    description: "Pink Terracotta <br/> <i>Also</i>: Stripped Cherry Wood, Horizontal Stripped Cherry Logs",
    id: 'stained_hardened_clay ["color":"pink"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [138, 66, 67, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OnN0YWluZWRfaGFyZGVuZWRfY2xheQoGAHN0YXRlcwgFAGNvbG9yBABwaW5rAAMHAHZlcnNpb24PRhMBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAACAAAAAQAAABYAAAAAA=="
}], ["oak", {
    name: "Oak",
    description: "Oak Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs;<br/> All Colours of Banners; <br/> Bamboo Shoots, Dead Bushes, Crafting Table, Cartography Table, Fletching Table, Smithing table, Bookshelves &amp; Chiseled Bookshelves, Lecterns, Composters, Barrels, Beehives, Chests, Trapped Chests, Noteblocks, Daylight Sensors, Looms; Allow block",
    id: 'planks ["wood_type":"oak"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [123, 102, 62, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQMAb2FrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1v///wMAAABEAAAAAA=="
}], ["spruce", {
    name: "Spruce",
    description: "Spruce Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs;<br/> Campfire, Soul Campfire, Podzol; Mangrove Roots, Muddy Mangrove Roots; Horizontal Oak &amp; Jungle Logs",
    id: 'planks ["wood_type":"spruce"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [111, 74, 42, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQYAc3BydWNlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1////wMAAABEAAAAAA=="
}], ["crimson", {
    name: "Crimson",
    description: "Crimson Planks, Logs, Stripped Logs, Fences, Fence Gates, Doors &amp; Stairs",
    id: 'crimson_planks []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [127, 54, 83, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fcGxhbmtzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA2P///wMAAABEAAAAAA=="
}], ["warped", {
    name: "Warped",
    description: "Warped Planks, Logs, Stripped Logs, Fences, Fence Gates, Doors &amp; Stairs <br/> Weathered Copper / Cut Weathered Copper (waxed or not) and its blocks, slabs, stairs",
    id: 'warped_planks []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [50, 122, 120, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADZ////AwAAAEQAAAAA"
}], ["dirt", {
    name: "Dirt",
    description: "Coarse Dirt, Dirt, Farmland, Brown Mushroom, Brown Mushroom Block, Jukebox, Packed Mud <br/> Jungle Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs <br/> Granite / Polished Granite and all its slabs, walls, stairs",
    id: 'dirt ["dirt_type":"coarse"]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [130, 94, 66, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmRpcnQKBgBzdGF0ZXMICQBkaXJ0X3R5cGUGAGNvYXJzZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANr///8DAAAARAAAAAA="
}], ["sand", {
    name: "Sand",
    description: "Sandstone &amp; all its Cut, Smooth, Chiseled variants, their Slabs, Walls &amp; Stairs; Sand <br/> Birch Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs <br/> End Stone, End Stone Bricks and its slabs, walls, stairs <br/> Bone Blocks, Glowstone, Scaffolding, Ochre Froglight, Turtle Eggs",
    id: 'sandstone []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [213, 201, 140, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OnNhbmRzdG9uZQoGAHN0YXRlcwgPAHNhbmRfc3RvbmVfdHlwZQcAZGVmYXVsdAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANv///8DAAAARAAAAAA="
}], ["clay", {
    name: "Clay",
    description: "Clay blocks",
    id: 'clay []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [141, 144, 158, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmNsYXkKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADc////AwAAAEQAAAAA"
}], ["stone", {
    name: "Stone",
    description: "Stone, Cobblestone blocks and all their slabs, stairs, walls; Smooth stone, Smooth stone slabs; <br/> Andesite / Polished Andesite and all their slabs, walls, stairs <br/>Cobblestone / Mossy Cobblestone / Stone Bricks, slabs, walls and stairs; All types of Infested Stone; Cracked Stone Bricks, Chiseled Stone Bricks; Mossy Stone Bricks, Slabs, walls &amp; stairs; All stone Ores; Gravel <br/> Brick stairs, Furnaces, Blast Furnaces, Smokers, Cauldrons, Stonecutters, Observers, Hoppers, Pistons, Sticky pistons, Ender Chests, Dispensers, Droppers, Mob spawners, Bedrock; Horizontal Acacia Logs; Deny blocks",
    id: 'stone []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [96, 96, 96, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnN0b25lCgYAc3RhdGVzCAoAc3RvbmVfdHlwZQUAc3RvbmUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADd////AwAAAEQAAAAA"
}], ["deepslate", {
    name: "Deepslate",
    description: "Deepslate, Cobbled / Tiled / Polished Deepslate &amp; Deepslate Bricks and all their stairs, walls and slabs; Infested deepslate, Chiseled Deepslate, Reinforced Deepslate; All deepslate Ores",
    id: 'deepslate []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [86, 86, 86, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OmRlZXBzbGF0ZQoGAHN0YXRlcwgLAHBpbGxhcl9heGlzAQB5AAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA3v///wMAAABEAAAAAA=="
}], ["nether", {
    name: "Netherrack",
    description: "Netherrack, Magma block, Nether Bricks / Red Nether bricks and all their slabs, walls &amp; stairs, Cracked Nether Bricks, Chiseled Nether Bricks, Nether Brick Fences; Nether Quartz Ore, Nether Gold Ore <br/> Crimson Signs &amp; Hanging Signs, Pressure Plates, Trapdoors, Slabs; Crimson Fungus, Crimson Roots, Weeping vines",
    id: 'netherrack []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [96, 0, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om5ldGhlcnJhY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADf////AwAAAEQAAAAA"
}], ["quartz", {
    name: "Quartz",
    description: "Block of Quartz, Smooth Quartz and their slabs &amp; stairs, Quartz bricks, Quartz pillar, Chiseled Quartz; Horizontal Birch Logs; Sea Lanterns <br/> Diorite / Polished Diorite and all their slabs, stairs, walls",
    id: 'quartz_block []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [220, 217, 211, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OnF1YXJ0el9ibG9jawoGAHN0YXRlcwgLAGNoaXNlbF90eXBlBwBkZWZhdWx0CAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADg////AwAAAEQAAAAA"
}], ["expocopper", {
    name: "Exposed Copper",
    description: "Exposed Copper / Cut Exposed Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Light Grey Terracotta; Mud Bricks &amp; Mud Brick Slabs, walls and stairs",
    id: 'waxed_exposed_copper []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [116, 92, 84, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR4AbWluZWNyYWZ0OndheGVkX2V4cG9zZWRfY29wcGVyCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA4f///wMAAABEAAAAAA=="
}], ["oxicopper", {
    name: "Oxidised Copper",
    description: "Oxidised Copper / Cut Oxidised Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Warped Nylium",
    id: 'waxed_oxidized_copper []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [18, 108, 115, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OndheGVkX294aWRpemVkX2NvcHBlcgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOL///8DAAAARAAAAAA="
}], ["foliage", {
    name: "Foliage",
    description: "Azalea leaves, Flowering Azalea Leaves, All short and double tall flowers, All saplings except Cherry; Cactus, Bamboo Shoots, Small Dripleaf, Big Dripleaf, Kelp, Hanging Roots, Spore blossom, Lilypad, Sugarcane, Double tall Grass, Double tall Ferns, Azalea, Flowering Azalea, Mangrove Propagules, Pitcher Pods",
    id: 'azalea_leaves ["persistent_bit":true]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [0, 106, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOP///8DAAAARAAAAAA="
}], ["grass", {
    name: "Grass",
    description: "Grass Block <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
    id: 'grass []',
    is_dye: false, is_biomevar: true, is_greyscale: false,
    rgb: [125, 162, 75, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OmdyYXNzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5P///wMAAABEAAAAAA=="
}], ["oakleaves", {
    name: "Tree Leaves",
    description: "Oak, Dark Oak, Jungle, Acacia &amp; Mangrove leaves <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
    id: 'leaves ["old_leaf_type":"oak","persistent_bit":true]',
    is_dye: false, is_biomevar: true, is_greyscale: false,
    rgb: [55, 79, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUDAG9hawEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5f///wMAAABEAAAAAA=="
}], ["birchleaves", {
    name: "Birch Leaves",
    description: "Birch leaves",
    id: 'leaves ["old_leaf_type":"birch","persistent_bit":true]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [59, 77, 39, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUFAGJpcmNoAQ4AcGVyc2lzdGVudF9iaXQBAQoAdXBkYXRlX2JpdAAAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADm////AwAAAEQAAAAA"
}], ["conifers", {
    name: "Spruce Leaves",
    description: "Spruce Leaves",
    id: 'leaves ["old_leaf_type":"spruce","persistent_bit":true]',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [45, 71, 45, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUGAHNwcnVjZQEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5////wMAAABEAAAAAA=="
}], ["lichen", {
    name: "Lichen",
    description: "Glow Lichen <i class=\"text-danger\">* Needs an opaque block directly below to render on maps</i>; Verdant Froglight",
    id: 'verdant_froglight []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [109, 144, 129, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnZlcmRhbnRfZnJvZ2xpZ2h0CgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADo////AwAAAEQAAAAA"
}], ["darkcrimson", {
    name: "Crimson Hyphae",
    description: "Crimson Hyphae, Stripped Crimson Hyphae",
    id: 'crimson_hyphae []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [79, 21, 25, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25faHlwaGFlCgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADp////AwAAAEQAAAAA"
}], ["darkwarped", {
    name: "Warped Hyphae",
    description: "Warped Hyphae, Stripped Warped Hyphae",
    id: 'warped_hyphae []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [74, 37, 53, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9oeXBoYWUKBgBzdGF0ZXMICwBwaWxsYXJfYXhpcwEAeQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOr///8DAAAARAAAAAA="
}], ["crimsonylium", {
    name: "Crimson Nylium",
    description: "Crimson Nylium",
    id: 'crimson_nylium []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [163, 42, 42, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fbnlsaXVtCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA6////wMAAABEAAAAAA=="
}], ["warpwart", {
    name: "Warped Wart",
    description: "Warped Wart Blocks",
    id: 'warped_wart_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [17, 155, 114, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OndhcnBlZF93YXJ0X2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7P///wMAAABEAAAAAA=="
}], ["turquoise", {
    name: "Turquoise",
    description: "Diamond Blocks, Beacons, Conduits, Prismarine Bricks / Dark Prismarine and their slabs &amp; stairs",
    id: 'diamond_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [79, 188, 183, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmRpYW1vbmRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADt////AwAAAEQAAAAA"
}], ["steel", {
    name: "Iron",
    description: "Iron Blocks, Iron Doors &amp; Trapdoors, Anvils (and damaged stages), Lanterns, Soul Lanterns, Brewing Stands, Grindstones",
    id: 'iron_block []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [144, 144, 144, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Omlyb25fYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADu////AwAAAEQAAAAA"
}], ["brightred", {
    name: "Redstone",
    description: "Redstone Blocks, Fire, TNT",
    id: 'redstone_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [220, 0, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJlZHN0b25lX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7////wMAAABEAAAAAA=="
}], ["gold", {
    name: "Gold",
    description: "Gold Blocks, Blocks of Raw Gold, Bells",
    id: 'gold_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [215, 205, 66, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0OmdvbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADw////AwAAAEQAAAAA"
}], ["emerald", {
    name: "Emerald",
    description: "Emerald Blocks",
    id: 'emerald_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [0, 187, 50, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmVtZXJhbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADx////AwAAAEQAAAAA"
}], ["lapis", {
    name: "Lapis",
    description: "Lapis Lazuli blocks",
    id: 'lapis_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [64, 110, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRUAbWluZWNyYWZ0OmxhcGlzX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8v///wMAAABEAAAAAA=="
}], ["rawiron", {
    name: "Raw Iron",
    description: "Blocks of Raw Iron",
    id: 'raw_iron_block []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [186, 150, 126, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJhd19pcm9uX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8////wMAAABEAAAAAA=="
}], ["slime", {
    name: "Slime",
    description: "Slime Blocks",
    id: 'slime []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [109, 153, 48, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNsaW1lCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA9////wMAAABEAAAAAA=="
}], ["web", {
    name: "Web",
    description: "Cobwebs, Mushroom stem (with white sides)",
    id: 'brown_mushroom_block ["huge_mushroom_bits":15]', 
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [171, 171, 171, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR4AbWluZWNyYWZ0OmJyb3duX211c2hyb29tX2Jsb2NrCgYAc3RhdGVzAxIAaHVnZV9tdXNocm9vbV9iaXRzDwAAAAADBwB2ZXJzaW9uD0YTAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAA8AAABnAAAAsf///wA="
}], ["ice", {
    name: "Ice",
    description: "Blue Ice, Packed Ice, Ice",
    id: 'blue_ice []',
    is_dye: false, is_biomevar: false, is_greyscale: false,
    rgb: [138, 138, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmJsdWVfaWNlCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+f///wMAAABEAAAAAA=="
}], ["mud", {
    name: "Mud",
    description: "Mud Blocks",
    id: 'mud []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [75, 79, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0Om11ZAoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPr///8DAAAARAAAAAA="
}], ["sculk", {
    name: "Sculk",
    description: "Sculk Blocks, Sculk Veins, Sculk Catalyst, Sculk Sensor, Calibrated Sculk Sensor, Sculk Shrieker",
    id: 'sculk []',
    is_dye: false, is_biomevar: false, is_greyscale: true,
    rgb: [11, 15, 19, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNjdWxrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+////wMAAABEAAAAAA=="
}]])

/**
 * base64 encoded contents of a .mcstructure file containing a few other miscellaneous blocks besides those used in `Colours`
 */
const Structures = {
    azalea_leaves: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAE0SAABiAAAAcAAAAAA=",
    glowstone: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAMAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwMAAAAAAAAAAQAAAAEAAAADAwAAAP///////////////wkIAGVudGl0aWVzAAAAAAAKBwBwYWxldHRlCgcAZGVmYXVsdAkNAGJsb2NrX3BhbGV0dGUKAgAAAAgEAG5hbWUTAG1pbmVjcmFmdDpnbG93c3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZQ0AbWluZWNyYWZ0OmFpcgoGAHN0YXRlcwADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAEYBAABFAAAAxf7//wA=",
    glow_lichen: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAIAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwIAAAAAAAAAAQAAAAMCAAAA//////////8JCABlbnRpdGllcwAAAAAACgcAcGFsZXR0ZQoHAGRlZmF1bHQJDQBibG9ja19wYWxldHRlCgIAAAAIBABuYW1lFQBtaW5lY3JhZnQ6Y29iYmxlc3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZRUAbWluZWNyYWZ0Omdsb3dfbGljaGVuCgYAc3RhdGVzAxkAbXVsdGlfZmFjZV9kaXJlY3Rpb25fYml0cz8AAAAAAwcAdmVyc2lvbgPSEAEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAABjEgAAZQAAAFoAAAAA"
}


/** Darker shade of any Colours.rgb value in a 3D map due to lower elevation */
function darkPixel(rgb) {
    return [Math.floor(rgb[0]*180/220), Math.floor(rgb[1]*180/220), Math.floor(rgb[2]*180/220), 254];
}

/** Lighter shade of any Colours.rgb value in a 3D map due to higher elevation */
function lightPixel(rgb) {
    return [Math.ceil(rgb[0]*255/220), Math.ceil(rgb[1]*255/220), Math.ceil(rgb[2]*255/220), 253];
}

/** Sequence of all the (normal, dark, light) RGB+code values for each material in the `Colours` map. */
const ColourList = [];
/** Sequence of user-visible material names for each material in the `Colours` map. */
const MaterialNames = [];
/** Sequence of the material keys for each material in the `Colours` map. */
const ColourTokens = [];

Colours.forEach(function(value, key) {
    ColourTokens.push(key);
    MaterialNames.push(value.name)
    // Order is important 0,1,2 <-> normal, dark, light
    ColourList.push(value.rgb);
    ColourList.push(darkPixel(value.rgb));
    ColourList.push(lightPixel(value.rgb));
});
