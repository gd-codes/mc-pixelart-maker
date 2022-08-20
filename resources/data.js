// This data was determined experimentally - not guaranteed to be *exactly* the same as Minecraft
// JSON-like data, but already parsed so it can be directly loaded and used without AJAX

/* 
Each value of `Colours` has the following format -
{
    name: String, 
    description: String,
    id: String,                              //Minecraft identifier of the form /^\w+ -?\d+$/
    is_dye: Boolean, 
    is_biomevar: Boolean, 
    is_greyscale: Boolean,
    rgb_l: Array[UInt8, UInt8, UInt8, 253],   // RGB value of light variant of the colour, with alpha=253
    rgb_d: Array[UInt8, UInt8, UInt8, 254],   // RGB value of dark variant of the colour, with alpha=254
    rgb:   Array[UInt8, UInt8, UInt8, 255],   // RGB value of regular variant of the colour, with alpha=255
    structure: String                        // base64 encoded contents of a .mcstructure file containing the single block in `id`
}
*/
const Colours = new Map([
    ["white", {
        name: "White Dye",
        description: "White Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Snow, Snow layers, Powder snow, Shulker box (undyed), Lodestone, Target block",
        id: "concrete 0",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        rgb_l: [255,255,255,253], rgb: [212,212,212,255], rgb_d: [165,165,165,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAHdoaXRlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAxv///wMAAABEAAAAAA=="
    }],
    ["lightgrey", {
        name: "Light Grey Dye",
        description: "Light Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Structure blocks",
        id: "concrete 8",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        rgb_l: [135,135,135,253], rgb: [113,113,113,255], rgb_d: [89,89,89,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHNpbHZlcgADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMf///8DAAAARAAAAAA="
    }],
    ["grey", {
        name: "Grey Dye",
        description: "Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Acacia planks, Acacia Wood, Stripped Acacia Wood; Tinted Glass",
        id: "concrete 7",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        rgb_l: [59,59,59,253], rgb: [50,50,50,255], rgb_d: [40,40,40,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGdyYXkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADI////AwAAAEQAAAAA"
    }],
    ["black", {
        name: "Black Dye",
        description: "Black Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Coal Block, Respawn Anchors, Netherite block, Basalt, Polished Basalt & Smooth Basalt, Obsidian, Crying Obsidian, End Portal Tiles, Dragon Egg<br/> Blackstone / Polished Blackstone / Blackstone bricks and all their slabs, walls, stairs; Blackstone Buttons, Pressure plates, Gilded blackstone",
        id: "concrete 15",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        rgb_l: [19,19,19,253], rgb: [17,17,17,255], rgb_d: [14,14,14,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJsYWNrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyf///wMAAABEAAAAAA=="
    }],
    ["brown", {
        name: "Brown Dye",
        description: "Brown Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Dark Oak planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and Stairs; Soul sand, Soul soil; Impulse Command Block",
        id: "concrete 12",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [82,60,39,253], rgb: [70,50,33,255], rgb_d: [55,40,27,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJyb3duAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyv///wMAAABEAAAAAA=="
    }],
    ["red", {
        name: "Red Dye",
        description: "Red Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: All Beds, Fire Coral Block & Dead Fire Coral Block; Red Mushroom, Red Mushroom block; Nether Wart Block, Shroomlight; Enchanting table; Brick block, slabs and walls;<br/> All Mangrove Wood, Stripped Wood, Planks, Logs, Doors, Trapdoors, Fences, Gates, Signs, Slabs, Stairs, Pressure Plates & Buttons",
        id: "concrete 14",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [134,34,39,253], rgb: [111,30,33,255], rgb_d: [88,25,28,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IDAHJlZAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMv///8DAAAARAAAAAA="
    }],
    ["orange", {
        name: "Orange Dye",
        description: "Orange Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Stripped Acacia Logs, Acacia Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and stairs <br/> Copper / Cut Copper (Waxed or not) and all its Stairs, Slabs <br/> Red Sand, Red Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls, Stairs <br/> Honey block, Honeycomb block, Lightning rods; Pumpkins, Carved Pumpkins, Jack O' Lanterns",
        id: "concrete 1",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [205,106,40,253], rgb: [170,89,34,255], rgb_d: [133,70,27,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAG9yYW5nZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMz///8DAAAARAAAAAA="
    }],
    ["yellow", {
        name: "Yellow Dye",
        description: "Yellow Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Horn Coral block & Dead Horn Coral Block; Hay bales, Bee Nest, Sponge, Wet Sponge",
        id: "concrete 4",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [224,226,40,253], rgb: [184,187,34,255], rgb_d: [143,147,28,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHllbGxvdwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAM3///8DAAAARAAAAAA="
    }],
    ["lime", {
        name: "Lime Dye",
        description: "Lime Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Melons",
        id: "concrete 5",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [111,197,21,253], rgb: [93,165,18,255], rgb_d: [73,128,16,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGxpbWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADO////AwAAAEQAAAAA"
    }],
    ["green", {
        name: "Green Dye",
        description: "Green Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Moss Block, Moss Carpets, Sea Pickles, Dried Kelp Block, End Portal Frame, Chain Command Block",
        id: "concrete 13",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [84,109,39,253], rgb: [70,92,33,255], rgb_d: [57,72,27,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGdyZWVuAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAz////wMAAABEAAAAAA=="
    }],
    ["cyan", {
        name: "Cyan Dye",
        description: "Cyan Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Warped Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs, Warped Fungus, Warped Roots, Nether Sprouts <br/> Prismarine blocks, Slabs, Walls & Stairs",
        id: "concrete 9",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [61,107,134,253], rgb: [52,89,113,255], rgb_d: [41,70,89,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGN5YW4AAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADQ////AwAAAEQAAAAA"
    }],
    ["lightblue", {
        name: "Light Blue Dye",
        description: "Light Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Soul Fire",
        id: "concrete 3",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [84,133,207,253], rgb: [71,111,172,255], rgb_d: [57,88,133,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IKAGxpZ2h0X2JsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADR////AwAAAEQAAAAA"
    }],
    ["blue", {
        name: "Blue Dye",
        description: "Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Tube Coral block & Dead Tube Coral Block",
        id: "concrete 11",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [38,54,163,253], rgb: [33,45,135,255], rgb_d: [27,37,106,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGJsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADS////AwAAAEQAAAAA"
    }],
    ["purple", {
        name: "Purple Dye",
        description: "Purple Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Mycelium; Amethyst block, Budding Amethyst Block Amethyst Cluster & buds (all sizes); Bubble Coral Block, Dead Bubble Coral Block; Chorus Plant, Chorus Flower; Repeating Command Block",
        id: "concrete 10",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [106,38,162,253], rgb: [88,33,135,255], rgb_d: [70,27,106,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHB1cnBsZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANP///8DAAAARAAAAAA="
    }],
    ["magenta", {
        name: "Magenta Dye",
        description: "Magenta Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Purpur Blocks, Pillars, Slabs & Stairs",
        id: "concrete 2",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [160,45,207,253], rgb: [133,38,172,255], rgb_d: [105,31,134,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IHAG1hZ2VudGEAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADU////AwAAAEQAAAAA"
    }],
    ["pink", {
        name: "Pink Dye",
        description: "Pink Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Brain Coral Block & Dead Brain Coral Block; Pearlescent Froglight",
        id: "concrete 6",
        is_dye: true, is_biomevar: false, is_greyscale: false,
        rgb_l: [236,103,148,253], rgb: [195,86,123,255], rgb_d: [152,68,97,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAHBpbmsAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADV////AwAAAEQAAAAA"
    }],
    ["oak", {
        name: "Oak",
        description: "Oak Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs;<br/> Wooden Fences from all tree types (except Mangrove, Crimson, Warped); All Colours of Banners; <br/> Bamboo Shoots, Dead Bushes, Crafting Table, Cartography Table, Fletching Table, Smithing table, Bookshelves, Lecterns, Composters, Barrels, Beehives, Chests, Trapped Chests, Noteblocks, Daylight Sensors, Looms; Allow block",
        id: "planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [123,100,56,253], rgb: [103,83,47,255], rgb_d: [81,67,38,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQMAb2FrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1v///wMAAABEAAAAAA=="
    }],
    ["spruce", {
        name: "Spruce",
        description: "Spruce Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs;<br/> Campfire, Soul Campfire, Podzol; Mangrove Roots, Muddy Mangrove Roots",
        id: "planks 1",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [109,68,37,253], rgb: [91,57,31,255], rgb_d: [73,46,26,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQYAc3BydWNlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1////wMAAABEAAAAAA=="
    }],
    ["crimson", {
        name: "Crimson",
        description: "Crimson Planks, Logs, Stripped Logs, Doors & Stairs",
        id: "crimson_planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [128,44,78,253], rgb: [106,38,65,255], rgb_d: [84,31,52,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fcGxhbmtzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA2P///wMAAABEAAAAAA=="
    }],
    ["warped", {
        name: "Warped",
        description: "Warped Planks, Logs, Stripped Logs, Doors & Stairs <br/> Weathered Copper / Cut Weathered Copper (waxed or not) and its blocks, slabs, stairs",
        id: "warped_planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [48,124,121,253], rgb: [40,103,100,255], rgb_d: [32,82,79,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADZ////AwAAAEQAAAAA"
    }],
    ["dirt", {
        name: "Dirt",
        description: "Coarse Dirt, Dirt, Farmland, Brown Mushroom, Brown Mushroom Block, Mushroom stem, Jukebox, Packed Mud <br/> Jungle Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> Granite / Polished Granite and all its slabs, walls, stairs",
        id: "dirt 1",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [132,89,61,253], rgb: [110,75,51,255], rgb_d: [87,59,41,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmRpcnQKBgBzdGF0ZXMICQBkaXJ0X3R5cGUGAGNvYXJzZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANr///8DAAAARAAAAAA="
    }],
    ["sand", {
        name: "Sand",
        description: "Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls & Stairs; Sand <br/> Birch Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> End Stone, End Stone Bricks and its slabs, walls, stairs <br/> Bone Blocks, Glowstone, Scaffolding, Ochre Froglight, Frog Spawn",
        id: "sandstone 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [245,229,146,253], rgb: [203,190,121,255], rgb_d: [157,149,96,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OnNhbmRzdG9uZQoGAHN0YXRlcwgPAHNhbmRfc3RvbmVfdHlwZQcAZGVmYXVsdAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANv///8DAAAARAAAAAA="
    }],
    ["clay", {
        name: "Clay",
        description: "Clay block, Stone Bricks, Mossy Stone Bricks, All types of Infested Stone, Cracked Stone Bricks, Chiseled Stone Bricks, Mossy Stone Brick Slabs",
        id: "clay 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [146,151,170,253], rgb: [122,125,141,255], rgb_d: [95,98,110,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmNsYXkKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADc////AwAAAEQAAAAA"
    }],
    ["stone", {
        name: "Stone",
        description: "Stone, Cobblestone blocks and all their slabs, stairs, walls; Smooth stone, Smooth stone slabs; <br/> Andesite / Polished Andesite and all their slabs, walls, stairs <br/>Cobblestone / Mossy Cobblestone / Stone Brick - only slabs, walls and stairs; Mossy Stone Brick walls & stairs; All stone Ores, Gravel <br/> Brick stairs, Furnaces, Blast Furnaces, Smokers, Cauldrons, Stonecutters, Observers, Hoppers, Pistons, Sticky pistons, Ender Chests, Dispensers, Droppers, Mob spawners, Bedrock; Deny blocks",
        id: "stone 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [93,93,93,253], rgb: [77,77,77,255], rgb_d: [62,62,62,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnN0b25lCgYAc3RhdGVzCAoAc3RvbmVfdHlwZQUAc3RvbmUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADd////AwAAAEQAAAAA"
    }],
    ["deepslate", {
        name: "Deepslate",
        description: "Deepslate, Cobbled / Tiled / Polished Deepslate & Deepslate Bricks and all their stairs, walls and slabs; Infested deepslate, Chiseled Deepslate, Reinforced Deepslate; All deepslate Ores",
        id: "deepslate 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [81,81,81,253], rgb: [68,68,68,255], rgb_d: [54,54,54,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OmRlZXBzbGF0ZQoGAHN0YXRlcwgLAHBpbGxhcl9heGlzAQB5AAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA3v///wMAAABEAAAAAA=="
    }],
    ["nether", {
        name: "Netherrack",
        description: "Netherrack, Magma block, Nether Bricks / Red Nether bricks and all their slabs, walls & stairs, Cracked Nether Bricks, Chiseled Nether Bricks, Nether Brick Fences; Nether Quartz Ore, Nether Gold Ore <br/> Crimson Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs; Crimson Fungus, Crimson Roots, Weeping vines",
        id: "netherrack 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [91,0,1,253], rgb: [77,0,1,255], rgb_d: [61,0,0,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om5ldGhlcnJhY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADf////AwAAAEQAAAAA"
    }],
    ["quartz", {
        name: "Quartz",
        description: "Block of Quartz, Smooth Quartz and their slabs & stairs, Quartz bricks, Quartz pillar, Chiseled Quartz; Sea Lanterns <br/> Diorite / Polished Diorite and all their slabs, stairs, walls",
        id: "quartz_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [255,251,243,253], rgb: [211,208,201,255], rgb_d: [165,162,155,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OnF1YXJ0el9ibG9jawoGAHN0YXRlcwgLAGNoaXNlbF90eXBlBwBkZWZhdWx0CAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADg////AwAAAEQAAAAA"
    }],
    ["expocopper", {
        name: "Exposed Copper",
        description: "Exposed Copper / Cut Exposed Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Mud Bricks & Mud Brick Slabs, walls and stairs",
        id: "waxed_exposed_copper 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [116,88,79,253], rgb: [96,74,66,255], rgb_d: [76,58,53,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR4AbWluZWNyYWZ0OndheGVkX2V4cG9zZWRfY29wcGVyCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA4f///wMAAABEAAAAAA=="
    }],
    ["oxicopper", {
        name: "Oxidised Copper",
        description: "Oxidised Copper / Cut Oxidised Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Warped Nylium",
        id: "waxed_oxidized_copper 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [23,107,114,253], rgb: [20,89,96,255], rgb_d: [16,71,76,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OndheGVkX294aWRpemVkX2NvcHBlcgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOL///8DAAAARAAAAAA="
    }],
    ["foliage", {
        name: "Foliage",
        description: "Azalea leaves, Flowering Azalea Leaves, All short and double tall flowers, All saplings, Cactus, Bamboo, Small Dripleaf, Big Dripleaf, Kelp, Hanging Roots, Spore blossom, Lilypad, Sugarcane, Double tall Grass, Double tall Ferns, Azalea, Flowering Azalea, Mangrove Propagules",
        id: "azalea_leaves 1",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [14,108,1,253], rgb: [11,89,1,255], rgb_d: [9,71,1,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOP///8DAAAARAAAAAA="
    }],
    ["grass", {
        name: "Grass",
        description: "Grass Block <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        id: "grass 0",
        is_dye: false, is_biomevar: true, is_greyscale: false,
        rgb_l: [129,178,70,253], rgb: [107,148,58,255], rgb_d: [85,115,48,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OmdyYXNzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5P///wMAAABEAAAAAA=="
    }],
    ["oakleaves", {
        name: "Tree Leaves",
        description: "Oak, Dark Oak, Jungle, Acacia & Mangrove leaves <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        id: "leaves 12",
        is_dye: false, is_biomevar: true, is_greyscale: false,
        rgb_l: [48,76,19,253], rgb: [42,64,17,255], rgb_d: [34,50,14,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUDAG9hawEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5f///wMAAABEAAAAAA=="
    }],
    ["birchleaves", {
        name: "Birch Leaves",
        description: "Birch leaves",
        id: "leaves 14",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [53,73,34,253], rgb: [46,61,29,255], rgb_d: [36,49,25,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUFAGJpcmNoAQ4AcGVyc2lzdGVudF9iaXQBAQoAdXBkYXRlX2JpdAAAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADm////AwAAAEQAAAAA"
    }],
    ["conifers", {
        name: "Spruce Leaves",
        description: "Spruce Leaves",
        id: "leaves 13",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [40,66,39,253], rgb: [35,56,33,255], rgb_d: [29,45,28,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUGAHNwcnVjZQEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5////wMAAABEAAAAAA=="
    }],
    ["lichen", {
        name: "Lichen",
        description: "Glow Lichen <i class=\"text-danger\">* Needs an opaque block directly below to render on maps</i>; Verdant Froglight",
        id: "verdant_froglight 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [109,152,132,253], rgb: [91,127,110,255], rgb_d: [72,99,86,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnZlcmRhbnRfZnJvZ2xpZ2h0CgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADo////AwAAAEQAAAAA"
    }],
    ["darkcrimson", {
        name: "Crimson Hyphae",
        description: "Crimson Wood, Stripped Crimson Wood",
        id: "crimson_hyphae 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [73,17,22,253], rgb: [61,15,20,255], rgb_d: [49,13,16,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25faHlwaGFlCgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADp////AwAAAEQAAAAA"
    }],
    ["darkwarped", {
        name: "Warped Hyphae",
        description: "Warped Wood, Stripped Warped Wood",
        id: "warped_hyphae 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [67,31,47,253], rgb: [57,26,40,255], rgb_d: [45,23,33,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9oeXBoYWUKBgBzdGF0ZXMICwBwaWxsYXJfYXhpcwEAeQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOr///8DAAAARAAAAAA="
    }],
    ["crimsonylium", {
        name: "Crimson Nylium",
        description: "Crimson Nylium",
        id: "crimson_nylium 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [173,29,37,253], rgb: [143,25,32,255], rgb_d: [113,20,26,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fbnlsaXVtCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA6////wMAAABEAAAAAA=="
    }],
    ["warpwart", {
        name: "Warped Wart",
        description: "Warped Wart Blocks",
        id: "warped_wart_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [29,169,114,253], rgb: [23,140,95,255], rgb_d: [19,110,74,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OndhcnBlZF93YXJ0X2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7P///wMAAABEAAAAAA=="
    }],
    ["turquoise", {
        name: "Turquoise",
        description: "Diamond Blocks, Beacons, Ancient Debris, Conduits, Prismarine Bricks / Dark Prismarine and their slabs & stairs",
        id: "diamond_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [80,213,203,253], rgb: [66,175,168,255], rgb_d: [52,138,131,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmRpYW1vbmRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADt////AwAAAEQAAAAA"
    }],
    ["steel", {
        name: "Iron",
        description: "Iron Blocks, Iron Bars, Iron Doors & Trapdoors, Anvils (and damaged stages), Lanterns, Soul Lanterns, Brewing Stands, Grindstones",
        id: "iron_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [150,150,150,253], rgb: [125,125,125,255], rgb_d: [98,98,98,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Omlyb25fYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADu////AwAAAEQAAAAA"
    }],
    ["brightred", {
        name: "Redstone",
        description: "Redstone Blocks, Lava, Fire, TNT",
        id: "redstone_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [252,0,6,253], rgb: [208,0,5,255], rgb_d: [162,0,4,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJlZHN0b25lX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7////wMAAABEAAAAAA=="
    }],
    ["gold", {
        name: "Gold",
        description: "Gold Blocks, Blocks of Raw Gold, Bells",
        id: "gold_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [249,238,62,253], rgb: [206,197,51,255], rgb_d: [160,154,41,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0OmdvbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADw////AwAAAEQAAAAA"
    }],
    ["emerald", {
        name: "Emerald",
        description: "Emerald Blocks",
        id: "emerald_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [27,214,45,253], rgb: [23,178,38,255], rgb_d: [17,139,30,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmVtZXJhbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADx////AwAAAEQAAAAA"
    }],
    ["lapis", {
        name: "Lapis",
        description: "Lapis Lazuli blocks",
        id: "lapis_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [59,101,255,253], rgb: [49,85,212,255], rgb_d: [40,68,165,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRUAbWluZWNyYWZ0OmxhcGlzX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8v///wMAAABEAAAAAA=="
    }],
    ["rawiron", {
        name: "Raw Iron",
        description: "Blocks of Raw Iron",
        id: "raw_iron_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [206,159,129,253], rgb: [171,132,107,255], rgb_d: [131,101,83,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJhd19pcm9uX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8////wMAAABEAAAAAA=="
    }],
    ["calcite", {
        name: "Calcite",
        description: "Calcite",
        id: "calcite 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [198,161,144,253], rgb: [165,134,119,255], rgb_d: [127,105,94,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZREAbWluZWNyYWZ0OmNhbGNpdGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD0////AwAAAEQAAAAA"
    }],
    ["tuff", {
        name: "Tuff",
        description: "Tuff",
        id: "tuff 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [43,31,26,253], rgb: [37,26,23,255], rgb_d: [30,21,19,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OnR1ZmYKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD1////AwAAAEQAAAAA"
    }],
    ["dripstone", {
        name: "Dripstone",
        description: "Blocks of Dripstone",
        id: "dripstone_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [58,38,26,253], rgb: [49,32,23,255], rgb_d: [39,27,19,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmRyaXBzdG9uZV9ibG9jawoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPb///8DAAAARAAAAAA="
    }],
    ["slime", {
        name: "Slime",
        description: "Slime Blocks",
        id: "slime 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [110,166,43,253], rgb: [92,138,37,255], rgb_d: [72,108,30,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNsaW1lCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA9////wMAAABEAAAAAA=="
    }],
    ["web", {
        name: "Web",
        description: "Cobwebs",
        id: "web 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [187,187,187,253], rgb: [155,155,155,255], rgb_d: [121,121,121,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0OndlYgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPj///8DAAAARAAAAAA="
    }],
    ["ice", {
        name: "Ice",
        description: "Blue Ice, Packed Ice, Ice",
        id: "blue_ice 0",
        is_dye: false, is_biomevar: false, is_greyscale: false,
        rgb_l: [142,137,254,253], rgb: [119,115,211,255], rgb_d: [92,90,164,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmJsdWVfaWNlCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+f///wMAAABEAAAAAA=="
    }],
    ["mud", {
        name: "Mud",
        description: "Mud Blocks",
        id: "mud 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [69,74,74,253], rgb: [59,62,62,255], rgb_d: [47,49,49,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0Om11ZAoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPr///8DAAAARAAAAAA="
    }],
    ["sculk", {
        name: "Sculk",
        description: "Sculk Blocks, Sculk Veins, Sculk Catalyst, Sculk Sensor, Sculk Shrieker",
        id: "sculk 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        rgb_l: [12,15,18,253], rgb: [11,13,16,255], rgb_d: [10,11,14,254],
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNjdWxrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+////wMAAABEAAAAAA=="
    }]
])

const Structures = {
    azalea_leaves:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAE0SAABiAAAAcAAAAAA=",
    glowstone:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAMAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwMAAAAAAAAAAQAAAAEAAAADAwAAAP///////////////wkIAGVudGl0aWVzAAAAAAAKBwBwYWxldHRlCgcAZGVmYXVsdAkNAGJsb2NrX3BhbGV0dGUKAgAAAAgEAG5hbWUTAG1pbmVjcmFmdDpnbG93c3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZQ0AbWluZWNyYWZ0OmFpcgoGAHN0YXRlcwADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAEYBAABFAAAAxf7//wA=",
    glow_lichen:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAIAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwIAAAAAAAAAAQAAAAMCAAAA//////////8JCABlbnRpdGllcwAAAAAACgcAcGFsZXR0ZQoHAGRlZmF1bHQJDQBibG9ja19wYWxldHRlCgIAAAAIBABuYW1lFQBtaW5lY3JhZnQ6Y29iYmxlc3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZRUAbWluZWNyYWZ0Omdsb3dfbGljaGVuCgYAc3RhdGVzAxkAbXVsdGlfZmFjZV9kaXJlY3Rpb25fYml0cz8AAAAAAwcAdmVyc2lvbgPSEAEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAABjEgAAZQAAAFoAAAAA"
}


const colourlist = [];
Colours.forEach(function(value, key) {
  colourlist.push(value.rgb); // Order is important
  colourlist.push(value.rgb_d);
  colourlist.push(value.rgb_l);
});


const PictureData = {
    "000001": {
        originalImage: undefined,
        finalImage: undefined,
        shadeMap: undefined
    }
};
