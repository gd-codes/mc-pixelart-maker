// This data was determined experimentally - not guaranteed to be *exactly* the same as Minecraft
// JSON-like data, but already parsed so it can be directly loaded and used without AJAX

// None of the RGB values are > 220
const Colours = new Map([   
    ["white", {
        name: "White Dye",
        description: "White Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Snow, Snow layers, Powder snow, Shulker box (undyed), Lodestone, Target block",
        rgb: [220, 220, 220],
        id: "concrete 0",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAHdoaXRlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAxv///wMAAABEAAAAAA=="
    }],
    ["lightgrey", {
        name: "Light Grey Dye",
        description: "Light Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Structure blocks",
        rgb: [132, 132, 132],
        id: "concrete 8",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHNpbHZlcgADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMf///8DAAAARAAAAAA="
    }],
    ["grey", {
        name: "Grey Dye",
        description: "Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Acacia planks, Acacia Wood, Stripped Acacia Wood; Tinted Glass",
        rgb: [65, 65, 65],
        id: "concrete 7",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGdyYXkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADI////AwAAAEQAAAAA"
    }],
    ["black", {
        name: "Black Dye",
        description: "Black Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Coal Block, Respawn Anchors, Netherite block, Basalt, Polished Basalt & Smooth Basalt, Obsidian, Crying Obsidian, End Portal Tiles, Dragon Egg<br/> Blackstone / Polished Blackstone / Blackstone bricks and all their slabs, walls, stairs; Blackstone Buttons, Pressure plates, Gilded blackstone",
        rgb: [22, 22, 22],
        id: "concrete 15",
        is_dye: true, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJsYWNrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyf///wMAAABEAAAAAA=="
    }],
    ["brown", {
        name: "Brown Dye",
        description: "Brown Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Dark Oak planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and Stairs; Soul sand, Soul soil; Impulse Command Block",
        rgb: [88, 65, 44],
        id: "concrete 12",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGJyb3duAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAyv///wMAAABEAAAAAA=="
    }],
    ["red", {
        name: "Red Dye",
        description: "Red Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: All Beds, Fire Coral Block & Dead Fire Coral Block; Red Mushroom, Red Mushroom block; Nether Wart Block, Shroomlight; Enchanting table; Brick block, slabs and walls;<br/> All Mangrove Wood, Stripped Wood, Planks, Logs, Doors, Trapdoors, Fences, Gates, Signs, Slabs, Stairs, Pressure Plates & Buttons",
        rgb: [132, 44, 44],
        id: "concrete 14",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IDAHJlZAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMv///8DAAAARAAAAAA="
    }],
    ["orange", {
        name: "Orange Dye",
        description: "Orange Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Stripped Acacia Logs, Acacia Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and stairs <br/> Copper / Cut Copper (Waxed or not) and all its Stairs, Slabs <br/> Red Sand, Red Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls, Stairs <br/> Honey block, Honeycomb block, Lightning rods; Pumpkins, Carved Pumpkins, Jack O' Lanterns",
        rgb: [186, 108, 44],
        id: "concrete 1",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAG9yYW5nZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAMz///8DAAAARAAAAAA="
    }],
    ["yellow", {
        name: "Yellow Dye",
        description: "Yellow Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Horn Coral block & Dead Horn Coral Block; Hay bales, Bee Nest, Sponge, Wet Sponge",
        rgb: [198, 198, 44],
        id: "concrete 4",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHllbGxvdwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAM3///8DAAAARAAAAAA="
    }],
    ["lime", {
        name: "Lime Dye",
        description: "Lime Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Melons",
        rgb: [108, 176, 22],
        id: "concrete 5",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGxpbWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADO////AwAAAEQAAAAA"
    }],
    ["green", {
        name: "Green Dye",
        description: "Green Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Moss Block, Moss Carpets, Sea Pickles, Dried Kelp Block, End Portal Frame, Chain Command Block",
        rgb: [88, 108, 44],
        id: "concrete 13",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IFAGdyZWVuAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAAz////wMAAABEAAAAAA=="
    }],
    ["cyan", {
        name: "Cyan Dye",
        description: "Cyan Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Warped Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs, Warped Fungus, Warped Roots, Nether Sprouts <br/> Prismarine blocks, Slabs, Walls & Stairs",
        rgb: [66, 108, 132],
        id: "concrete 9",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGN5YW4AAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADQ////AwAAAEQAAAAA"
    }],
    ["lightblue", {
        name: "Light Blue Dye",
        description: "Light Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Soul Fire",
        rgb: [88, 132, 186],
        id: "concrete 3",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IKAGxpZ2h0X2JsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADR////AwAAAEQAAAAA"
    }],
    ["blue", {
        name: "Blue Dye",
        description: "Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Tube Coral block & Dead Tube Coral Block",
        rgb: [44, 66, 152],
        id: "concrete 11",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAGJsdWUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADS////AwAAAEQAAAAA"
    }],
    ["purple", {
        name: "Purple Dye",
        description: "Purple Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Mycelium; Amethyst block, Budding Amethyst Block Amethyst Cluster & buds (all sizes); Bubble Coral Block, Dead Bubble Coral Block; Chorus Plant, Chorus Flower; Repeating Command Block",
        rgb: [108, 55, 152],
        id: "concrete 10",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IGAHB1cnBsZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANP///8DAAAARAAAAAA="
    }],
    ["magenta", {
        name: "Magenta Dye",
        description: "Magenta Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Purpur Blocks, Pillars, Slabs & Stairs",
        rgb: [152, 66, 186],
        id: "concrete 2",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IHAG1hZ2VudGEAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADU////AwAAAEQAAAAA"
    }],
    ["pink", {
        name: "Pink Dye",
        description: "Pink Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Brain Coral Block & Dead Brain Coral Block; Pearlescent Froglight",
        rgb: [208, 108, 142],
        id: "concrete 6",
        is_dye: true, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmNvbmNyZXRlCgYAc3RhdGVzCAUAY29sb3IEAHBpbmsAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADV////AwAAAEQAAAAA"
    }],
    ["oak", {
        name: "Oak",
        description: "Oak Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs;<br/> Wooden Fences from all tree types (except Mangrove, Crimson, Warped); All Colours of Banners; <br/> Bamboo Shoots, Dead Bushes, Crafting Table, Cartography Table, Fletching Table, Smithing table, Bookshelves, Lecterns, Composters, Barrels, Beehives, Chests, Trapped Chests, Noteblocks, Daylight Sensors, Looms; Allow block",
        rgb: [124, 100, 60],
        id: "planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQMAb2FrAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1v///wMAAABEAAAAAA=="
    }],
    ["spruce", {
        name: "Spruce",
        description: "Spruce Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs;<br/> Campfire, Soul Campfire, Podzol; Mangrove Roots, Muddy Mangrove Roots",
        rgb: [112, 74, 42],
        id: "planks 1",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OnBsYW5rcwoGAHN0YXRlcwgJAHdvb2RfdHlwZQYAc3BydWNlAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA1////wMAAABEAAAAAA=="
    }],
    ["crimson", {
        name: "Crimson",
        description: "Crimson Planks, Logs, Stripped Logs, Doors & Stairs",
        rgb: [128, 54, 84],
        id: "crimson_planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fcGxhbmtzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA2P///wMAAABEAAAAAA=="
    }],
    ["warped", {
        name: "Warped",
        description: "Warped Planks, Logs, Stripped Logs, Doors & Stairs <br/> Weathered Copper / Cut Weathered Copper (waxed or not) and its blocks, slabs, stairs",
        rgb: [50, 122, 120],
        id: "warped_planks 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9wbGFua3MKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADZ////AwAAAEQAAAAA"
    }],
    ["dirt", {
        name: "Dirt",
        description: "Coarse Dirt, Dirt, Farmland, Brown Mushroom, Brown Mushroom Block, Mushroom stem, Jukebox, Packed Mud <br/> Jungle Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> Granite / Polished Granite and all its slabs, walls, stairs",
        rgb: [130, 94, 66],
        id: "dirt 1",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmRpcnQKBgBzdGF0ZXMICQBkaXJ0X3R5cGUGAGNvYXJzZQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANr///8DAAAARAAAAAA="
    }],
    ["sand", {
        name: "Sand",
        description: "Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls & Stairs; Sand <br/> Birch Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> End Stone, End Stone Bricks and its slabs, walls, stairs <br/> Bone Blocks, Glowstone, Scaffolding, Ochre Froglight, Frog Spawn",
        rgb: [212, 200, 140],
        id: "sandstone 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OnNhbmRzdG9uZQoGAHN0YXRlcwgPAHNhbmRfc3RvbmVfdHlwZQcAZGVmYXVsdAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAANv///8DAAAARAAAAAA="
    }],
    ["clay", {
        name: "Clay",
        description: "Clay block, Stone Bricks, Mossy Stone Bricks, All types of Infested Stone, Cracked Stone Bricks, Chiseled Stone Bricks, Mossy Stone Brick Slabs",
        rgb: [140, 144, 158],
        id: "clay 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OmNsYXkKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADc////AwAAAEQAAAAA"
    }],
    ["stone", {
        name: "Stone",
        description: "Stone, Cobblestone blocks and all their slabs, stairs, walls; Smooth stone, Smooth stone slabs; <br/> Andesite / Polished Andesite and all their slabs, walls, stairs <br/>Cobblestone / Mossy Cobblestone / Stone Brick - only slabs, walls and stairs; Mossy Stone Brick walls & stairs; All stone Ores, Gravel <br/> Brick stairs, Furnaces, Blast Furnaces, Smokers, Cauldrons, Stonecutters, Observers, Hoppers, Pistons, Sticky pistons, Ender Chests, Dispensers, Droppers, Mob spawners, Bedrock; Deny blocks",
        rgb: [96, 96, 96],
        id: "stone 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnN0b25lCgYAc3RhdGVzCAoAc3RvbmVfdHlwZQUAc3RvbmUAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADd////AwAAAEQAAAAA"
    }],
    ["deepslate", {
        name: "Deepslate",
        description: "Deepslate, Cobbled / Tiled / Polished Deepslate & Deepslate Bricks and all their stairs, walls and slabs; Infested deepslate, Chiseled Deepslate, Reinforced Deepslate; All deepslate Ores",
        rgb: [86, 86, 86],
        id: "deepslate 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRMAbWluZWNyYWZ0OmRlZXBzbGF0ZQoGAHN0YXRlcwgLAHBpbGxhcl9heGlzAQB5AAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA3v///wMAAABEAAAAAA=="
    }],
    ["nether", {
        name: "Netherrack",
        description: "Netherrack, Magma block, Nether Bricks / Red Nether bricks and all their slabs, walls & stairs, Cracked Nether Bricks, Chiseled Nether Bricks, Nether Brick Fences; Nether Quartz Ore, Nether Gold Ore <br/> Crimson Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs; Crimson Fungus, Crimson Roots, Weeping vines",
        rgb: [96, 0, 0],
        id: "netherrack 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Om5ldGhlcnJhY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADf////AwAAAEQAAAAA"
    }],
    ["quartz", {
        name: "Quartz",
        description: "Block of Quartz, Smooth Quartz and their slabs & stairs, Quartz bricks, Quartz pillar, Chiseled Quartz; Sea Lanterns <br/> Diorite / Polished Diorite and all their slabs, stairs, walls",
        rgb: [220, 216, 210],
        id: "quartz_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRYAbWluZWNyYWZ0OnF1YXJ0el9ibG9jawoGAHN0YXRlcwgLAGNoaXNlbF90eXBlBwBkZWZhdWx0CAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADg////AwAAAEQAAAAA"
    }],
    ["expocopper", {
        name: "Exposed Copper",
        description: "Exposed Copper / Cut Exposed Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Mud Bricks & Mud Brick Slabs, walls and stairs",
        rgb: [116, 92, 84],
        id: "waxed_exposed_copper 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR4AbWluZWNyYWZ0OndheGVkX2V4cG9zZWRfY29wcGVyCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA4f///wMAAABEAAAAAA=="
    }],
    ["oxicopper", {
        name: "Oxidised Copper",
        description: "Oxidised Copper / Cut Oxidised Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Warped Nylium",
        rgb: [18, 108, 116],
        id: "waxed_oxidized_copper 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZR8AbWluZWNyYWZ0OndheGVkX294aWRpemVkX2NvcHBlcgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOL///8DAAAARAAAAAA="
    }],
    ["foliage", {
        name: "Foliage",
        description: "Azalea leaves, Flowering Azalea Leaves, All short and double tall flowers, All saplings, Cactus, Bamboo, Small Dripleaf, Big Dripleaf, Kelp, Hanging Roots, Spore blossom, Lilypad, Sugarcane, Double tall Grass, Double tall Ferns, Azalea, Flowering Azalea, Mangrove Propagules",
        rgb: [0, 108, 0],
        id: "azalea_leaves 1",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOP///8DAAAARAAAAAA="
    }],
    ["grass", {
        name: "Grass",
        description: "Grass Block <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        rgb: [125, 160, 75],
        id: "grass 0",
        is_dye: false, is_biomevar: true, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OmdyYXNzCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5P///wMAAABEAAAAAA=="
    }],
    ["oakleaves", {
        name: "Tree Leaves",
        description: "Oak, Dark Oak, Jungle, Acacia & Mangrove leaves <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        rgb: [55, 80, 20],
        id: "leaves 12",
        is_dye: false, is_biomevar: true, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUDAG9hawEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5f///wMAAABEAAAAAA=="
    }],
    ["birchleaves", {
        name: "Birch Leaves",
        description: "Birch leaves",
        rgb: [60, 78, 38],
        id: "leaves 14",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUFAGJpcmNoAQ4AcGVyc2lzdGVudF9iaXQBAQoAdXBkYXRlX2JpdAAAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADm////AwAAAEQAAAAA"
    }],
    ["conifers", {
        name: "Spruce Leaves",
        description: "Spruce Leaves",
        rgb: [45, 70, 45],
        id: "leaves 13",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRAAbWluZWNyYWZ0OmxlYXZlcwoGAHN0YXRlcwgNAG9sZF9sZWFmX3R5cGUGAHNwcnVjZQEOAHBlcnNpc3RlbnRfYml0AQEKAHVwZGF0ZV9iaXQAAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA5////wMAAABEAAAAAA=="
    }],
    ["lichen", {
        name: "Lichen",
        description: "Glow Lichen <i class=\"text-danger\">* Needs an opaque block directly below to render on maps</i>; Verdant Froglight",
        rgb: [108, 144, 128],
        id: "verdant_froglight 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OnZlcmRhbnRfZnJvZ2xpZ2h0CgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADo////AwAAAEQAAAAA"
    }],
    ["darkcrimson", {
        name: "Crimson Hyphae",
        description: "Crimson Wood, Stripped Crimson Wood",
        rgb: [80, 20, 25],
        id: "crimson_hyphae 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25faHlwaGFlCgYAc3RhdGVzCAsAcGlsbGFyX2F4aXMBAHkAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADp////AwAAAEQAAAAA"
    }],
    ["darkwarped", {
        name: "Warped Hyphae",
        description: "Warped Wood, Stripped Warped Wood",
        rgb: [75, 37, 52],
        id: "warped_hyphae 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OndhcnBlZF9oeXBoYWUKBgBzdGF0ZXMICwBwaWxsYXJfYXhpcwEAeQADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAOr///8DAAAARAAAAAA="
    }],
    ["crimsonylium", {
        name: "Crimson Nylium",
        description: "Crimson Nylium",
        rgb: [162, 42, 42],
        id: "crimson_nylium 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OmNyaW1zb25fbnlsaXVtCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA6////wMAAABEAAAAAA=="
    }],
    ["warpwart", {
        name: "Warped Wart",
        description: "Warped Wart Blocks",
        rgb: [15, 155, 115],
        id: "warped_wart_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRsAbWluZWNyYWZ0OndhcnBlZF93YXJ0X2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7P///wMAAABEAAAAAA=="
    }],
    ["turquoise", {
        name: "Turquoise",
        description: "Diamond Blocks, Beacons, Ancient Debris, Conduits, Prismarine Bricks / Dark Prismarine and their slabs & stairs",
        rgb: [78, 188, 182],
        id: "diamond_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmRpYW1vbmRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADt////AwAAAEQAAAAA"
    }],
    ["steel", {
        name: "Iron",
        description: "Iron Blocks, Iron Bars, Iron Doors & Trapdoors, Anvils (and damaged stages), Lanterns, Soul Lanterns, Brewing Stands, Grindstones",
        rgb: [144, 144, 144],
        id: "iron_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0Omlyb25fYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADu////AwAAAEQAAAAA"
    }],
    ["brightred", {
        name: "Redstone",
        description: "Redstone Blocks, Lava, Fire, TNT",
        rgb: [220, 0, 0],
        id: "redstone_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJlZHN0b25lX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA7////wMAAABEAAAAAA=="
    }],
    ["gold", {
        name: "Gold",
        description: "Gold Blocks, Blocks of Raw Gold, Bells",
        rgb: [215, 205, 65],
        id: "gold_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRQAbWluZWNyYWZ0OmdvbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADw////AwAAAEQAAAAA"
    }],
    ["emerald", {
        name: "Emerald",
        description: "Emerald Blocks",
        rgb: [0, 188, 50],
        id: "emerald_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmVtZXJhbGRfYmxvY2sKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAADx////AwAAAEQAAAAA"
    }],
    ["lapis", {
        name: "Lapis",
        description: "Lapis Lazuli blocks",
        rgb: [64, 110, 220],
        id: "lapis_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRUAbWluZWNyYWZ0OmxhcGlzX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8v///wMAAABEAAAAAA=="
    }],
    ["rawiron", {
        name: "Raw Iron",
        description: "Blocks of Raw Iron",
        rgb: [185, 150, 125],
        id: "raw_iron_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRgAbWluZWNyYWZ0OnJhd19pcm9uX2Jsb2NrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA8////wMAAABEAAAAAA=="
    }],
    ["calcite", {
        name: "Calcite",
        description: "Calcite",
        rgb: [180, 150, 140],
        id: "calcite 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZREAbWluZWNyYWZ0OmNhbGNpdGUKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD0////AwAAAEQAAAAA"
    }],
    ["tuff", {
        name: "Tuff",
        description: "Tuff",
        rgb: [50, 35, 30],
        id: "tuff 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ4AbWluZWNyYWZ0OnR1ZmYKBgBzdGF0ZXMAAwcAdmVyc2lvbgEKEgEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAAD1////AwAAAEQAAAAA"
    }],
    ["dripstone", {
        name: "Dripstone",
        description: "Blocks of Dripstone",
        rgb: [65, 42, 30],
        id: "dripstone_block 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRkAbWluZWNyYWZ0OmRyaXBzdG9uZV9ibG9jawoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPb///8DAAAARAAAAAA="
    }],
    ["slime", {
        name: "Slime",
        description: "Slime Blocks",
        rgb: [108, 152, 48],
        id: "slime 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNsaW1lCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA9////wMAAABEAAAAAA=="
    }],
    ["web", {
        name: "Web",
        description: "Cobwebs",
        rgb: [170, 170, 170],
        id: "web 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0OndlYgoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPj///8DAAAARAAAAAA="
    }],
    ["ice", {
        name: "Ice",
        description: "Blue Ice, Packed Ice, Ice",
        rgb: [138, 138, 220],
        id: "blue_ice 0",
        is_dye: false, is_biomevar: false, is_greyscale: false, 
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRIAbWluZWNyYWZ0OmJsdWVfaWNlCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+f///wMAAABEAAAAAA=="
    }],
    ["mud", {
        name: "Mud",
        description: "Mud Blocks",
        rgb: [60, 60, 60],
        id: "mud 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ0AbWluZWNyYWZ0Om11ZAoGAHN0YXRlcwADBwB2ZXJzaW9uAQoSAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAPr///8DAAAARAAAAAA="
    }],
    ["sculk", {
        name: "Sculk",
        description: "Sculk Blocks, Sculk Veins, Sculk Catalyst, Sculk Sensor, Sculk Shrieker",
        rgb: [10, 13, 16],
        id: "sculk 0",
        is_dye: false, is_biomevar: false, is_greyscale: true,
        structure: "CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZQ8AbWluZWNyYWZ0OnNjdWxrCgYAc3RhdGVzAAMHAHZlcnNpb24BChIBAAoTAGJsb2NrX3Bvc2l0aW9uX2RhdGEAAAAACRYAc3RydWN0dXJlX3dvcmxkX29yaWdpbgMDAAAA+////wMAAABEAAAAAA=="
    }]
])

const Structures = {
    azalea_leaves:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAE0SAABiAAAAcAAAAAA=",
    glowstone:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAMAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwMAAAAAAAAAAQAAAAEAAAADAwAAAP///////////////wkIAGVudGl0aWVzAAAAAAAKBwBwYWxldHRlCgcAZGVmYXVsdAkNAGJsb2NrX3BhbGV0dGUKAgAAAAgEAG5hbWUTAG1pbmVjcmFmdDpnbG93c3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZQ0AbWluZWNyYWZ0OmFpcgoGAHN0YXRlcwADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAEYBAABFAAAAxf7//wA=",
    glow_lichen:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAIAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwIAAAAAAAAAAQAAAAMCAAAA//////////8JCABlbnRpdGllcwAAAAAACgcAcGFsZXR0ZQoHAGRlZmF1bHQJDQBibG9ja19wYWxldHRlCgIAAAAIBABuYW1lFQBtaW5lY3JhZnQ6Y29iYmxlc3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZRUAbWluZWNyYWZ0Omdsb3dfbGljaGVuCgYAc3RhdGVzAxkAbXVsdGlfZmFjZV9kaXJlY3Rpb25fYml0cz8AAAAAAwcAdmVyc2lvbgPSEAEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAABjEgAAZQAAAFoAAAAA"
}

