
/**
 * Data of all minecraft materials that can be used to create map art.
 * This data was determined experimentally - **not** guaranteed to be *exactly* the same as Minecraft.
 * Each value of `Colours` has the following format -
 * {
 *     `name`: String,                       // User-visible name for the material
 *     `description`: String,                // HTML-rendered description of blocks that appear as this colour on maps.
 *     `id`: String,                         // Minecraft identifier of the form /^\w+ \[( *"\w+" *\= *(true|false|"\w+"|\d+)(,(?! *\])|(?= *\])) *)*\]$/ for obtaining a block in `description` via commands
 *     `is_dye`: Boolean,                    // Does the colour correspond to one of the 16 Dye colours in minecraft?
 *     `is_terc`: Boolean,                   // Does the colour correspond to one of the 16 Unglazed terracotta colours in minecraft?
 *     `is_biomevar`: Boolean,               // Does this colour appear differently on maps based on the biome?
 *     `is_greyscale`: Boolean,              // Is this a greyish colour?
 *     `rgb`: Array<UInt8,UInt8,UInt8,255>,  // RGB value of regular variant of the colour, with alpha=255. IMPORTANT : All RGB channels <= 220 to avoid overflow from the `lightPixel` function.
 *     `structure`: String                   // base64 encoded contents of a .mcstructure file containing the single block in `id`
 * }
 */
const Colours = new Map([["white", {
    name: "White Dye",
    description: "White Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Snow, Snow layers, Powder snow, Lodestone, Target block",
    id: 'white_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [220, 220, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OndoaXRlX2NvbmNyZXRlCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArf///8X///9TAAAAAA=="
}], ["lightgray", {
    name: "Light Gray Dye",
    description: "Light Gray Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Structure blocks; Pale Moss & Pale Moss Carpets, Pale Hanging Moss",
    id: 'light_gray_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [132, 132, 132, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR0AbWluZWNyYWZ0OmxpZ2h0X2dyYXlfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///1QAAAAA"
}], ["gray", {
    name: "Gray Dye",
    description: "Gray Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Acacia Wood, Stripped Acacia Wood; Tinted Glass; All Dead Coral, Dead Coral Blocks &amp; Dead Coral Fans",
    id: 'gray_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [65, 65, 65, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmdyYXlfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///1UAAAAA"
}], ["black", {
    name: "Black Dye",
    description: "Black Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Ancient Debris, Coal Block, Respawn Anchors, Netherite block, Basalt, Polished Basalt &amp; Smooth Basalt, Obsidian, Crying Obsidian, End Portal Tiles, Dragon Egg<br/> Blackstone / Polished Blackstone / Blackstone bricks and all their slabs, walls, stairs; Blackstone Pressure plates; Gilded blackstone",
    id: 'black_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [21, 21, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmJsYWNrX2NvbmNyZXRlCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArf///8X///9WAAAAAA=="
}], ["brown", {
    name: "Brown Dye",
    description: "Brown Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Dark Oak planks, Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure plates, Signs &amp; Hanging Signs, Slabs and Stairs; Horizontal Spruce Logs; Soul sand, Soul soil; Impulse Command Block",
    id: 'brown_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [88, 65, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmJyb3duX2NvbmNyZXRlCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArf///8X///9XAAAAAA=="
}], ["red", {
    name: "Red Dye",
    description: "Red Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Fire Coral Block; Red Mushroom, Red Mushroom block; Nether Wart Block, Shroomlight; Enchanting table; Brick block, slabs and walls; Sniffer Egg;<br/> All Mangrove Wood, Stripped Wood, Planks, Vertical Logs, Doors, Trapdoors, Fences, Gates, Signs &amp; Hanging Signs, Slabs, Stairs &amp; Pressure Plates",
    id: 'red_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [132, 44, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OnJlZF9jb25jcmV0ZQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK3////F////WAAAAAA="
}], ["orange", {
    name: "Orange Dye",
    description: "Orange Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Acacia Planks, Fences, Fence Gates, Doors, Trapdoors, Pressure plates, Signs &amp; Hanging Signs, Slabs, Stairs, Vertical Logs &amp; Stripped logs (any orientation) <br/> Copper (waxed or unwaxed); Cut Copper blocks, slabs, stairs; Copper Doors, Bulbs, Grates, Chiseled Blocks <br/> Red Sand, Red Sandstone &amp; all its Cut, Smooth, Chiseled variants, their Slabs, Walls, Stairs <br/> Honey block, Honeycomb block; Undyed Terracotta; Lightning rods; Pumpkins, Carved Pumpkins, Jack O' Lanterns; Creaking Heart (active or inactive), Open Eyeblossoms",
    id: 'orange_concrete []',
    is_dye: true, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [186, 109, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0Om9yYW5nZV9jb25jcmV0ZQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK3////F////WQAAAAA="
}], ["yellow", {
    name: "Yellow Dye",
    description: "Yellow Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: All Bamboo Planks, Doors, Trapdoors, Fences, Gates, Signs &amp; Hanging Signs, Slabs, Stairs &amp; Pressure Plates, Blocks of Bamboo, Block of Stripped Bamboo, Bamboo Mosaic, Mosaic slabs &amp; stairs;<br/> Horn Coral block; Hay bales, Bee Nest, Sponge, Wet Sponge",
    id: 'yellow_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [197, 197, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OnllbGxvd19jb25jcmV0ZQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK3////F////WgAAAAA="
}], ["lime", {
    name: "Lime Dye",
    description: "Lime Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Melons",
    id: 'lime_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [109, 176, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmxpbWVfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///1sAAAAA"
}], ["green", {
    name: "Green Dye",
    description: "Green Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Moss Block, Moss Carpets, Sea Pickles, Dried Kelp Block, End Portal Frame, Chain Command Block",
    id: 'green_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [88, 109, 44, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmdyZWVuX2NvbmNyZXRlCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArf///8X///9cAAAAAA=="
}], ["cyan", {
    name: "Cyan Dye",
    description: "Cyan Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Warped Signs &amp; Hanging Signs, Pressure Plates, Trapdoors, Slabs, Warped Fungus, Warped Roots, Nether Sprouts <br/> Prismarine blocks, Slabs, Walls &amp; Stairs",
    id: 'cyan_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [65, 109, 132, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmN5YW5fY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///10AAAAA"
}], ["lightblue", {
    name: "Light Blue Dye",
    description: "Light Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Soul Fire",
    id: 'light_blue_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [88, 132, 186, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR0AbWluZWNyYWZ0OmxpZ2h0X2JsdWVfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///14AAAAA"
}], ["blue", {
    name: "Blue Dye",
    description: "Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Tube Coral block",
    id: 'blue_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [44, 65, 153, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmJsdWVfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///18AAAAA"
}], ["purple", {
    name: "Purple Dye",
    description: "Purple Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Mycelium; Amethyst block, Budding Amethyst Block Amethyst Cluster &amp; buds (all sizes); Bubble Coral Block; Chorus Plant, Chorus Flower; Undyed Shulker Box; Repeating Command Block",
    id: 'purple_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [132, 77, 176, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OnB1cnBsZV9jb25jcmV0ZQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK3////F////YAAAAAA="
}], ["magenta", {
    name: "Magenta Dye",
    description: "Magenta Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Purpur Blocks, Pillars, Slabs &amp; Stairs",
    id: 'magenta_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [153, 65, 186, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRoAbWluZWNyYWZ0Om1hZ2VudGFfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///2EAAAAA"
}], ["pink", {
    name: "Pink Dye",
    description: "Pink Concrete, Concrete Powder, Wool, Carpets, Stained Glass Blocks, Shulker boxes, Glazed Terracotta <br/> <i>Also</i>: Brain Coral Block; Pearlescent Froglight; Cherry Leaves and Saplings",
    id: 'pink_concrete []',
    is_dye: true, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [208, 109, 142, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OnBpbmtfY29uY3JldGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACt////xf///2IAAAAA"
}], ["whiteterc", {
    name: "White Terracotta",
    description: "White Terracotta <br/> <i>Also</i>: Calcite; Cherry Planks, Vertical Logs, Vertical Stripped Logs, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp Stairs",
    id: 'white_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [180, 152, 138, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRoAbWluZWNyYWZ0OndoaXRlX3RlcnJhY290dGEKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACu////xf///1MAAAAA"
}], ["lightgrayterc", {
    name: "Light Gray Terracotta",
    description: "Light Gray Terracotta <br/> <i>Also</i>: Exposed Copper (waxed or unwaxed); Cut Exposed Copper blocks, slabs, stairs; Exposed Copper Doors, Bulbs, Grates, Chiseled Blocks <br/> Mud Bricks &amp; Mud Brick Slabs, walls and stairs",
    id: 'light_gray_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [116, 92, 84, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OmxpZ2h0X2dyYXlfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uASgVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAALn////F////QAAAAAA="
}], ["grayterc", {
    name: "Gray Terracotta",
    description: "Gray Terracotta <br/> <i>Also</i>: Tuff / Polished Tuff / Tuff Bricks and all their slabs, stairs, walls &amp; Chiseled Tuff blocks <br/> Cherry Wood, Horizontal Cherry Logs",
    id: 'gray_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [49, 35, 30, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmdyYXlfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////VQAAAAA="
}], ["blackterc", {
    name: "Black Terracotta",
    description: "Black Terracotta",
    id: 'black_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: true,
    rgb: [31, 18, 13, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRoAbWluZWNyYWZ0OmJsYWNrX3RlcnJhY290dGEKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACu////xf///1YAAAAA"
}], ["brownterc", {
    name: "Brown Terracotta",
    description: "Brown Terracotta <br/> <i>Also</i>: Dripstone Blocks",
    id: 'brown_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [65, 43, 30, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRoAbWluZWNyYWZ0OmJyb3duX3RlcnJhY290dGEKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACu////xf///1cAAAAA"
}], ["redterc", {
    name: "Red Terracotta",
    description: "Red Terracotta <br/> <i>Also</i>: All Decorated Pots",
    id: 'red_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [122, 51, 39, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJlZF90ZXJyYWNvdHRhCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArv///8X///9YAAAAAA=="
}], ["orangeterc", {
    name: "Orange Terracotta",
    description: "Orange Terracotta <br/> <i>Also</i>: Resin, Resin Bricks & Slabs, Walls, Stairs, Chiseled Resin",
    id: 'orange_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [137, 70, 31, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0Om9yYW5nZV90ZXJyYWNvdHRhCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArv///8X///9ZAAAAAA=="
}], ["yellowterc", {
    name: "Yellow Terracotta",
    description: "Yellow Terracotta",
    id: 'yellow_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [160, 114, 31, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnllbGxvd190ZXJyYWNvdHRhCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArv///8X///9aAAAAAA=="
}], ["limeterc", {
    name: "Lime Terracotta",
    description: "Lime Terracotta",
    id: 'lime_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [88, 100, 45, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmxpbWVfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////WwAAAAA="
}], ["greenterc", {
    name: "Green Terracotta",
    description: "Green Terracotta <br/> <i>Also</i>: Pale Oak Leaves, Closed Eyeblossoms",
    id: 'green_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [65, 70, 36, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRoAbWluZWNyYWZ0OmdyZWVuX3RlcnJhY290dGEKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACy////xf///08AAAAA"
}], ["cyanterc", {
    name: "Cyan Terracotta",
    description: "Cyan Terracotta",
    id: 'cyan_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: true,
    rgb: [75, 79, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmN5YW5fdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////XQAAAAA="
}], ["lightblueterc", {
    name: "Light Blue Terracotta",
    description: "Light Blue Terracotta",
    id: 'light_blue_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [96, 93, 119, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OmxpZ2h0X2JsdWVfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////XgAAAAA="
}], ["blueterc", {
    name: "Blue Terracotta",
    description: "Blue Terracotta",
    id: 'blue_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [65, 53, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmJsdWVfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////XwAAAAA="
}], ["purpleterc", {
    name: "Purple Terracotta",
    description: "Purple Terracotta",
    id: 'purple_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [105, 62, 75, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnB1cnBsZV90ZXJyYWNvdHRhCgYAc3RhdGVzAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAArv///8X///9gAAAAAA=="
}], ["magentaterc", {
    name: "Magenta Terracotta",
    description: "Magenta Terracotta",
    id: 'magenta_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [128, 75, 93, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRwAbWluZWNyYWZ0Om1hZ2VudGFfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////YQAAAAA="
}], ["pinkterc", {
    name: "Pink Terracotta",
    description: "Pink Terracotta <br/> <i>Also</i>: Stripped Cherry Wood, Horizontal Stripped Cherry Logs",
    id: 'pink_terracotta []',
    is_dye: false, is_terc: true, is_biomevar: false, is_greyscale: false,
    rgb: [138, 66, 67, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OnBpbmtfdGVycmFjb3R0YQoGAHN0YXRlcwADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAK7////F////YgAAAAA="
}], ["oak", {
    name: "Oak",
    description: "Oak Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs;<br/> All Colours of Banners; <br/> Bamboo Shoots, Dead Bushes, Crafting Table, Cartography Table, Fletching Table, Smithing table, Bookshelves &amp; Chiseled Bookshelves, Lecterns, Composters, Barrels, Beehives, Chests, Trapped Chests, Noteblocks, Daylight Sensors, Looms; Allow block",
    id: 'oak_planks []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [123, 102, 62, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om9ha19wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACu////xf///2QAAAAA"
}], ["spruce", {
    name: "Spruce",
    description: "Spruce Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs;<br/> Campfire, Soul Campfire, Podzol; Mangrove Roots, Muddy Mangrove Roots; Horizontal Oak &amp; Jungle Logs",
    id: 'spruce_planks []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [111, 74, 42, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OnNwcnVjZV9wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgMAFQEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAACu////xf///2QAAAAA"
}], ["crimson", {
    name: "Crimson",
    description: "Crimson Planks, Logs, Stripped Logs, Fences, Fence Gates, Doors &amp; Stairs",
    id: 'crimson_planks []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [127, 54, 83, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fcGxhbmtzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA2P///wMAAABEAAAAAA=="
}], ["warped", {
    name: "Warped",
    description: "Warped Planks, Logs, Stripped Logs, Fences, Fence Gates, Doors &amp; Stairs <br/> Weathered Copper (waxed or unwaxed); Cut Weathered Copper blocks, slabs, stairs; Weathered Copper Doors, Bulbs, Grates, Chiseled Blocks",
    id: 'warped_planks []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [50, 122, 120, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADZ////AwAAAEQAAAAA"
}], ["dirt", {
    name: "Dirt",
    description: "Coarse Dirt, Dirt, Farmland, Dirt Path, Brown Mushroom, Brown Mushroom Block, Jukebox, Packed Mud <br/> Jungle Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs <br/> Granite / Polished Granite and all its slabs, walls, stairs",
    id: 'dirt ["dirt_type"="coarse"]',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [130, 94, 66, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmRpcnQKBgBzdGF0ZXMICQBkaXJ0X3R5cGUGAGNvYXJzZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANr///8DAAAARAAAAAA="
}], ["sand", {
    name: "Sand",
    description: "Sandstone &amp; all its Cut, Smooth, Chiseled variants, their Slabs, Walls &amp; Stairs; Sand, Suspicious Sand <br/> Birch Planks, Vertical Logs, Stripped Logs, Wood, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp; Stairs <br/> End Stone, End Stone Bricks and its slabs, walls, stairs <br/> Bone Blocks, Glowstone, Scaffolding, Ochre Froglight, Turtle Eggs",
    id: 'sandstone []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [213, 201, 140, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OnNhbmRzdG9uZQoGAHN0YXRlcwgPAHNhbmRfc3RvbmVfdHlwZQcAZGVmYXVsdAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANv///8DAAAARAAAAAA="
}], ["clay", {
    name: "Clay",
    description: "Clay blocks",
    id: 'clay []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [141, 144, 158, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmNsYXkKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADc////AwAAAEQAAAAA"
}], ["stone", {
    name: "Stone",
    description: "Stone, Cobblestone blocks and all their slabs, stairs, walls; Smooth stone, Smooth stone slabs; <br/> Andesite / Polished Andesite and all their slabs, walls, stairs <br/>Cobblestone / Mossy Cobblestone / Stone Bricks, slabs, walls and stairs; All types of Infested Stone; Cracked Stone Bricks, Chiseled Stone Bricks; Mossy Stone Bricks, Slabs, walls &amp; stairs <br/> All stone Ores; Gravel, Suspicious Gravel; Bedrock; Horizontal Pale Oak Logs, Pale Oak Wood <br/> Furnaces, Blast Furnaces, Smokers, Cauldrons, Stonecutters, Observers, Hoppers, Pistons, Sticky pistons, Ender Chests, Dispensers, Droppers, Mob spawners, Trial Spawners, Vaults & Ominous Vaults, Crafters; Horizontal Acacia Logs; Deny blocks",
    id: 'stone []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [96, 96, 96, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnN0b25lCgYAc3RhdGVzCAoAc3RvbmVfdHlwZQUAc3RvbmUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADd////AwAAAEQAAAAA"
}], ["deepslate", {
    name: "Deepslate",
    description: "Deepslate, Cobbled / Tiled / Polished Deepslate &amp; Deepslate Bricks and all their stairs, walls and slabs; Infested deepslate, Chiseled Deepslate, Reinforced Deepslate; All deepslate Ores",
    id: 'deepslate []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [86, 86, 86, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OmRlZXBzbGF0ZQoGAHN0YXRlcwgLAHBpbGxhcl9heGlzAQB5AAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA3v///wMAAABEAAAAAA=="
}], ["nether", {
    name: "Netherrack",
    description: "Netherrack, Magma block, Nether Bricks / Red Nether bricks and all their slabs, walls &amp; stairs, Cracked Nether Bricks, Chiseled Nether Bricks, Nether Brick Fences; Nether Quartz Ore, Nether Gold Ore <br/> Crimson Signs &amp; Hanging Signs, Pressure Plates, Trapdoors, Slabs; Crimson Fungus, Crimson Roots, Weeping vines",
    id: 'netherrack []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [96, 0, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om5ldGhlcnJhY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADf////AwAAAEQAAAAA"
}], ["quartz", {
    name: "Quartz",
    description: "Block of Quartz, Smooth Quartz and their slabs &amp; stairs, Quartz bricks, Quartz pillar, Chiseled Quartz <br/> Pale Oak Planks, Vertical Logs, Stripped Logs, Stripped Wood, Fences, Fence Gates, Doors, Trapdoors, Pressure Plates, Signs &amp; Hanging Signs, Slabs &amp Stairs <br/> Horizontal Birch Logs; Sea Lanterns; Diorite / Polished Diorite and all their slabs, stairs, walls",
    id: 'quartz_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [220, 217, 211, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OnF1YXJ0el9ibG9jawoGAHN0YXRlcwgLAGNoaXNlbF90eXBlBwBkZWZhdWx0CAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADg////AwAAAEQAAAAA"
}], ["oxicopper", {
    name: "Oxidised Copper",
    description: "Oxidised Copper (waxed or unwaxed); Cut Oxidised Copper blocks, slabs, stairs; Oxidised Copper Doors, Bulbs, Grates, Chiseled Blocks <br/> Warped Nylium",
    id: 'waxed_oxidized_copper []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [18, 108, 115, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OndheGVkX294aWRpemVkX2NvcHBlcgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOL///8DAAAARAAAAAA="
}], ["foliage", {
    name: "Foliage",
    description: "Azalea leaves, Flowering Azalea Leaves, All short and double tall flowers, All saplings except Cherry & Pale Oak; Cactus, Bamboo Shoots, Small Dripleaf, Big Dripleaf, Kelp, Hanging Roots, Spore blossom, Lilypad, Sugarcane, Double tall Grass, Double tall Ferns, Azalea, Flowering Azalea, Mangrove Propagules, Pitcher Pods",
    id: 'azalea_leaves ["persistent_bit"=true]',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [0, 106, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOP///8DAAAARAAAAAA="
}], ["grass", {
    name: "Grass",
    description: "Grass Block <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
    id: 'grass []',
    is_dye: false, is_terc: false, is_biomevar: true, is_greyscale: false,
    rgb: [125, 162, 75, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OmdyYXNzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5P///wMAAABEAAAAAA=="
}], ["oakleaves", {
    name: "Tree Leaves",
    description: "Oak, Dark Oak, Jungle, Acacia &amp; Mangrove leaves <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
    id: 'oak_leaves ["persistent_bit"=true]',
    is_dye: false, is_terc: false, is_biomevar: true, is_greyscale: false,
    rgb: [55, 79, 21, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om9ha19sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAALH////G////UwAAAAA="
}], ["birchleaves", {
    name: "Birch Leaves",
    description: "Birch leaves",
    id: 'birch_leaves ["persistent_bit"=true]',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [59, 77, 39, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OmJpcmNoX2xlYXZlcwoGAHN0YXRlcwEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24DABUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAsf///8b///9UAAAAAA=="
}], ["conifers", {
    name: "Spruce Leaves",
    description: "Spruce Leaves",
    id: 'spruce_leaves ["persistent_bit"=true]',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [45, 71, 45, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OnNwcnVjZV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAwAVAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAALH////G////VQAAAAA="
}], ["lichen", {
    name: "Lichen",
    description: "Glow Lichen <i class=\"text-danger\">* Needs an opaque block directly below to render on maps</i>; Verdant Froglight",
    id: 'verdant_froglight []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [109, 144, 129, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnZlcmRhbnRfZnJvZ2xpZ2h0CgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADo////AwAAAEQAAAAA"
}], ["darkcrimson", {
    name: "Crimson Hyphae",
    description: "Crimson Hyphae, Stripped Crimson Hyphae",
    id: 'crimson_hyphae []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [79, 21, 25, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25faHlwaGFlCgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADp////AwAAAEQAAAAA"
}], ["darkwarped", {
    name: "Warped Hyphae",
    description: "Warped Hyphae, Stripped Warped Hyphae",
    id: 'warped_hyphae []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [74, 37, 53, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9oeXBoYWUKBgBzdGF0ZXMICwBwaWxsYXJfYXhpcwEAeQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOr///8DAAAARAAAAAA="
}], ["crimsonylium", {
    name: "Crimson Nylium",
    description: "Crimson Nylium",
    id: 'crimson_nylium []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [163, 42, 42, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fbnlsaXVtCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA6////wMAAABEAAAAAA=="
}], ["warpwart", {
    name: "Warped Wart",
    description: "Warped Wart Blocks",
    id: 'warped_wart_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [17, 155, 114, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OndhcnBlZF93YXJ0X2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7P///wMAAABEAAAAAA=="
}], ["turquoise", {
    name: "Turquoise",
    description: "Diamond Blocks, Beacons, Conduits, Prismarine Bricks / Dark Prismarine and their slabs &amp; stairs",
    id: 'diamond_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [79, 188, 183, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmRpYW1vbmRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADt////AwAAAEQAAAAA"
}], ["steel", {
    name: "Iron",
    description: "Iron Blocks, Iron Doors &amp; Trapdoors, Anvils (and damaged stages), Lanterns, Soul Lanterns, Brewing Stands, Grindstones, Heavy Core, Heavy Weighted Pressure Plates <br/> Copper and Exposed / Weathered / Oxidised Copper Trapdoors",
    id: 'iron_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [144, 144, 144, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Omlyb25fYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADu////AwAAAEQAAAAA"
}], ["brightred", {
    name: "Redstone",
    description: "Redstone Blocks, Fire, TNT",
    id: 'redstone_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [220, 0, 0, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJlZHN0b25lX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7////wMAAABEAAAAAA=="
}], ["gold", {
    name: "Gold",
    description: "Gold Blocks, Blocks of Raw Gold, Bells, Light Weighted Pressure Plates",
    id: 'gold_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [215, 205, 66, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0OmdvbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADw////AwAAAEQAAAAA"
}], ["emerald", {
    name: "Emerald",
    description: "Emerald Blocks",
    id: 'emerald_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [0, 187, 50, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmVtZXJhbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADx////AwAAAEQAAAAA"
}], ["lapis", {
    name: "Lapis",
    description: "Lapis Lazuli blocks",
    id: 'lapis_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [64, 110, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRUAbWluZWNyYWZ0OmxhcGlzX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8v///wMAAABEAAAAAA=="
}], ["rawiron", {
    name: "Raw Iron",
    description: "Blocks of Raw Iron",
    id: 'raw_iron_block []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [186, 150, 126, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJhd19pcm9uX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8////wMAAABEAAAAAA=="
}], ["slime", {
    name: "Slime",
    description: "Slime Blocks",
    id: 'slime []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [109, 153, 48, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNsaW1lCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA9////wMAAABEAAAAAA=="
}], ["web", {
    name: "Web",
    description: "Cobwebs, Mushroom stem (with white sides)",
    id: 'mushroom_stem []', 
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [171, 171, 171, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0Om11c2hyb29tX3N0ZW0KBgBzdGF0ZXMDEgBodWdlX211c2hyb29tX2JpdHMPAAAAAAMHAHZlcnNpb24BKBUBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAuf///8X///9AAAAAAA=="
}], ["ice", {
    name: "Ice",
    description: "Blue Ice, Packed Ice, Ice",
    id: 'blue_ice []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: false,
    rgb: [138, 138, 220, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmJsdWVfaWNlCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+f///wMAAABEAAAAAA=="
}], ["mud", {
    name: "Mud",
    description: "Mud Blocks",
    id: 'mud []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [75, 79, 79, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0Om11ZAoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPr///8DAAAARAAAAAA="
}], ["sculk", {
    name: "Sculk",
    description: "Sculk Blocks, Sculk Veins, Sculk Catalyst, Sculk Sensor, Calibrated Sculk Sensor, Sculk Shrieker",
    id: 'sculk []',
    is_dye: false, is_terc: false, is_biomevar: false, is_greyscale: true,
    rgb: [11, 15, 19, 255],
    structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNjdWxrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+////wMAAABEAAAAAA=="
}]])

/**
 * base64 encoded contents of a .mcstructure file containing a few other miscellaneous blocks besides those used in `Colours`
 */
const Structures = {
    glowstone: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAMAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwMAAAAAAAAAAQAAAAEAAAADAwAAAP///////////////wkIAGVudGl0aWVzAAAAAAAKBwBwYWxldHRlCgcAZGVmYXVsdAkNAGJsb2NrX3BhbGV0dGUKAgAAAAgEAG5hbWUTAG1pbmVjcmFmdDpnbG93c3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZQ0AbWluZWNyYWZ0OmFpcgoGAHN0YXRlcwADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAEYBAABFAAAAxf7//wA=",
}


/** Darker shade of any Colours.rgb value in a 3D map due to lower elevation. Set alpha=254 arbitrarily (see findYmap())*/
function darkPixel(rgb) {
    return [Math.floor(rgb[0]*180/220), Math.floor(rgb[1]*180/220), Math.floor(rgb[2]*180/220), 254];
}

/** Lighter shade of any Colours.rgb value in a 3D map due to higher elevation. Set alpha=253 arbitrarily (see findYmap()) */
function lightPixel(rgb) {
    return [Math.ceil(rgb[0]*255/220), Math.ceil(rgb[1]*255/220), Math.ceil(rgb[2]*255/220), 253];
}

/** Sequence of all the (normal, dark, light) RGB+code values for each material in the `Colours` map. */
const ColourList = [];
/** Sequence of the material keys for each material in the `Colours` map. */
const ColourTokens = [];

Colours.forEach(function(value, key) {
    ColourTokens.push(key);
    // Order is important 0,1,2 <-> normal, dark, light
    ColourList.push(value.rgb);
    ColourList.push(darkPixel(value.rgb));
    ColourList.push(lightPixel(value.rgb));
});
