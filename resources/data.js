// This data was determined experimentally - not guaranteed to be *exactly* the same as Minecraft
// JSON-like data, but already parsed so it can be directly loaded and used without AJAX

// None of the RGB values are > 220
const Colours = new Map([
    ["white", {
        name: "White Dye",
        description: "White Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Snow, Snow layers, Powder snow, Shulker box (undyed), Lodestone, Target block",
        rgb: [220, 220, 220],
        id: "concrete 0",
        is_dye: true, is_biomevar: false
    }],
    ["lightgrey", {
        name: "Light Grey Dye",
        description: "Light Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Structure blocks",
        rgb: [132, 132, 132],
        id: "concrete 8",
        is_dye: true, is_biomevar: false
    }],
    ["grey", {
        name: "Grey Dye",
        description: "Grey Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Acacia planks, Acacia Wood, Stripped Acacia Wood; Tinted Glass",
        rgb: [65, 65, 65],
        id: "concrete 7",
        is_dye: true, is_biomevar: false
    }],
    ["black", {
        name: "Black Dye",
        description: "Black Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Coal Block, Respawn Anchors, Netherite block, Basalt, Polished Basalt & Smooth Basalt, Obsidian, Crying Obsidian, End Portal Tiles, Dragon Egg<br/> Blackstone / Polished Blackstone / Blackstone bricks and all their slabs, walls, stairs; Blackstone Buttons, Pressure plates, Gilded blackstone",
        rgb: [22, 22, 22],
        id: "concrete 15",
        is_dye: true, is_biomevar: false
    }],
    ["brown", {
        name: "Brown Dye",
        description: "Brown Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Dark Oak planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and Stairs; Soul sand, Soul soil; Impulse Command Block",
        rgb: [88, 65, 44],
        id: "concrete 12",
        is_dye: true, is_biomevar: false
    }],
    ["red", {
        name: "Red Dye",
        description: "Red Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: All Beds, Fire Coral Block & Dead Fire Coral Block; Red Mushroom, Red Mushroom block; Nether Wart Block, Shroomlight; Enchanting table; Brick block, slabs and walls",
        rgb: [132, 44, 44],
        id: "concrete 14",
        is_dye: true, is_biomevar: false
    }],
    ["orange", {
        name: "Orange Dye",
        description: "Orange Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Stripped Acacia Logs, Acacia Fence Gates, Doors, Trapdoors, Pressure plates, Signs, Slabs and stairs <br/> Copper / Cut Copper (Waxed or not) and all its Stairs, Slabs <br/> Red Sand, Red Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls, Stairs <br/> Honey block, Honeycomb block, Lightning rods; Pumpkins, Carved Pumpkins, Jack O' Lanterns",
        rgb: [186, 108, 44],
        id: "concrete 1",
        is_dye: true, is_biomevar: false
    }],
    ["yellow", {
        name: "Yellow Dye",
        description: "Yellow Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Horn Coral block & Dead Horn Coral Block; Hay bales, Bee Nest, Sponge, Wet Sponge",
        rgb: [198, 198, 44],
        id: "concrete 4",
        is_dye: true, is_biomevar: false
    }],
    ["lime", {
        name: "Lime Dye",
        description: "Lime Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Melons",
        rgb: [108, 176, 22],
        id: "concrete 5",
        is_dye: true, is_biomevar: false
    }],
    ["green", {
        name: "Green Dye",
        description: "Green Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Moss Block, Moss Carpets, Sea Pickles, Dried Kelp Block, End Portal Frame, Chain Command Block",
        rgb: [88, 108, 44],
        id: "concrete 13",
        is_dye: true, is_biomevar: false
    }],
    ["cyan", {
        name: "Cyan Dye",
        description: "Cyan Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Warped Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs, Warped Fungus, Warped Roots, Nether Sprouts <br/> Prismarine blocks, Slabs, Walls & Stairs",
        rgb: [66, 108, 132],
        id: "concrete 9",
        is_dye: true, is_biomevar: false
    }],
    ["lightblue", {
        name: "Light Blue Dye",
        description: "Light Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Soul Fire",
        rgb: [88, 132, 186],
        id: "concrete 3",
        is_dye: true, is_biomevar: false
    }],
    ["blue", {
        name: "Blue Dye",
        description: "Blue Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Tube Coral block & Dead Tube Coral Block",
        rgb: [44, 66, 152],
        id: "concrete 11",
        is_dye: true, is_biomevar: false
    }],
    ["purple", {
        name: "Purple Dye",
        description: "Purple Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Mycelium; Amethyst block, Budding Amethyst Block Amethyst Cluster & buds (all sizes); Bubble Coral Block, Dead Bubble Coral Block; Chorus Plant, Chorus Flower; Repeating Command Block",
        rgb: [108, 55, 152],
        id: "concrete 10",
        is_dye: true, is_biomevar: false
    }],
    ["magenta", {
        name: "Magenta Dye",
        description: "Magenta Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Purpur Blocks, Pillars, Slabs & Stairs",
        rgb: [152, 66, 186],
        id: "concrete 2",
        is_dye: true, is_biomevar: false
    }],
    ["pink", {
        name: "Pink Dye",
        description: "Pink Concrete, Concrete Powder, Wool, Carpets, Stained Glass, Glass Panes, Shulker boxes, Terracotta and Glazed Terracotta <br/> <i>Also</i>: Brain Coral Block & Dead Brain Coral Block",
        rgb: [208, 108, 142],
        id: "concrete 6",
        is_dye: true, is_biomevar: false
    }],
    ["oak", {
        name: "Oak",
        description: "Oak Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs; All Wooden Fences (not crimson & warped); All Banners; Bamboo Shoots, Dead Bushes <br/> Crafting Table, Cartography Table, Fletching Table, Smithing table, Bookshelves, Lecterns, Composters, Barrels, Beehives, Chests, Trapped Chests, Noteblocks, Daylight Sensors, Looms; Allow block",
        rgb: [124, 100, 60],
        id: "planks 0",
        is_dye: false, is_biomevar: false
    }],
    ["spruce", {
        name: "Spruce",
        description: "Spruce Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs; Campfire, Soul Campfire, Podzol",
        rgb: [112, 74, 42],
        id: "planks 1",
        is_dye: false, is_biomevar: false
    }],
    ["crimson", {
        name: "Crimson",
        description: "Crimson Planks, Logs, Stripped Logs, Doors & Stairs",
        rgb: [128, 54, 84],
        id: "crimson_planks 0",
        is_dye: false, is_biomevar: false
    }],
    ["warped", {
        name: "Warped",
        description: "Warped Planks, Logs, Stripped Logs, Doors & Stairs <br/> Weathered Copper / Cut Weathered Copper (waxed or not) and its blocks, slabs, stairs",
        rgb: [50, 122, 120],
        id: "warped_planks 0",
        is_dye: false, is_biomevar: false
    }],
    ["dirt", {
        name: "Dirt",
        description: "Coarse Dirt, Dirt, Farmland, Brown Mushroom, Brown Mushroom Block, Mushroom stem, Jukebox <br/> Jungle Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> Granite / Polished Granite and all its slabs, walls, stairs",
        rgb: [130, 94, 66],
        id: "dirt 1",
        is_dye: false, is_biomevar: false
    }],
    ["sand", {
        name: "Sand",
        description: "Sandstone & all its Cut, Smooth, Chiseled variants, their Slabs, Walls & Stairs; Sand <br/> Birch Planks, Logs, Stripped Logs, Wood, Stripped Wood, Fence Gates, Doors, Trapdoors, Signs, Slabs & Stairs <br/> End Stone, End Stone Bricks and its slabs, walls, stairs <br/> Bone Blocks, Glowstone, Scaffolding",
        rgb: [212, 200, 140],
        id: "sandstone 0",
        is_dye: false, is_biomevar: false
    }],
    ["clay", {
        name: "Clay",
        description: "Clay block, Stone Bricks, Mossy Stone Bricks, All types of Infested Stone, Cracked Stone Bricks, Chiseled Stone Bricks, Mossy Stone Brick Slabs",
        rgb: [140, 144, 158],
        id: "clay 0",
        is_dye: false, is_biomevar: false
    }],
    ["stone", {
        name: "Stone",
        description: "Stone, Cobblestone blocks and all their slabs, stairs, walls; Smooth stone, Smooth stone slabs; <br/> Andesite / Polished Andesite and all their slabs, walls, stairs <br/>Cobblestone / Mossy Cobblestone / Stone Brick - only slabs, walls and stairs; Mossy Stone Brick walls & stairs; All stone Ores, Gravel <br/> Brick stairs, Furnaces, Blast Furnaces, Smokers, Cauldrons, Stonecutters, Observers, Hoppers, Pistons, Sticky pistons, Ender Chests, Dispensers, Droppers, Mob spawners, Bedrock; Deny blocks",
        rgb: [96, 96, 96],
        id: "stone 0",
        is_dye: false, is_biomevar: false
    }],
    ["deepslate", {
        name: "Deepslate",
        description: "Deepslate, Cobbled / Tiled / Polished Deepslate & Deepslate Bricks and all their stairs, walls and slabs; Infested deepslate, Chiseled Deepslate; All deepslate Ores",
        rgb: [86, 86, 86],
        id: "deepslate 0",
        is_dye: false, is_biomevar: false
    }],
    ["nether", {
        name: "Netherrack",
        description: "Netherrack, Magma block, Nether Bricks / Red Nether bricks and all their slabs, walls & stairs, Cracked Nether Bricks, Chiseled Nether Bricks, Nether Brick Fences; Nether Quartz Ore, Nether Gold Ore <br/> Crimson Fences, Fence Gates, Signs, Pressure Plates, Trapdoors, Slabs; Crimson Fungus, Crimson Roots, Weeping vines",
        rgb: [96, 0, 0],
        id: "netherrack 0",
        is_dye: false, is_biomevar: false
    }],
    ["quartz", {
        name: "Quartz",
        description: "Block of Quartz, Smooth Quartz and their slabs & stairs, Quartz bricks, Quartz pillar, Chiseled Quartz; Sea Lanterns <br/> Diorite / Polished Diorite and all their slabs, stairs, walls",
        rgb: [220, 216, 210],
        id: "quartz_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["expocopper", {
        name: "Exposed Copper",
        description: "Exposed Copper / Cut Exposed Copper (waxed or regular) blocks and their slabs, walls, stairs",
        rgb: [116, 92, 84],
        id: "waxed_exposed_copper 0",
        is_dye: false, is_biomevar: false
    }],
    ["oxicopper", {
        name: "Oxidised Copper",
        description: "Oxidised Copper / Cut Oxidised Copper (waxed or regular) blocks and their slabs, walls, stairs <br/> Warped Nylium",
        rgb: [18, 108, 116],
        id: "waxed_oxidized_copper 0",
        is_dye: false, is_biomevar: false
    }],
    ["foliage", {
        name: "Foliage",
        description: "Azalea leaves, Flowering Azalea Leaves, All short and double tall flowers, All saplings, Cactus, Bamboo, Small Dripleaf, Big Dripleaf, Kelp, Hanging Roots, Spore blossom, Lilypad, Sugarcane, Double tall Grass, Double tall Ferns, Azalea, Flowering Azalea",
        rgb: [0, 108, 0],
        id: "azalea_leaves 1",
        is_dye: false, is_biomevar: false
    }],
    ["grass", {
        name: "Grass",
        description: "Grass Block <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        rgb: [125, 160, 75],
        id: "grass 0",
        is_dye: false, is_biomevar: true
    }],
    ["oakleaves", {
        name: "Tree Leaves",
        description: "Oak, Dark Oak, Jungle & Acacia leaves <i class=\"text-danger\">* Similar colour only in Plains, Tree/Flower Forests, Rivers, Ocean biomes &amp; the End </i>",
        rgb: [55, 80, 20],
        id: "leaves 12",
        is_dye: false, is_biomevar: true
    }],
    ["birchleaves", {
        name: "Birch Leaves",
        description: "Birch leaves",
        rgb: [60, 78, 38],
        id: "leaves 14",
        is_dye: false, is_biomevar: false
    }],
    ["conifers", {
        name: "Spruce Leaves",
        description: "Spruce Leaves",
        rgb: [45, 70, 45],
        id: "leaves 13",
        is_dye: false, is_biomevar: false
    }],
    ["lichen", {
        name: "Lichen",
        description: "Glow Lichen <i class=\"text-danger\">* Needs an opaque block directly below to render on maps</i>",
        rgb: [108, 144, 128],
        id: "glow_lichen 0",
        is_dye: false, is_biomevar: false
    }],
    ["darkcrimson", {
        name: "Crimson Bark",
        description: "Crimson Wood, Stripped Crimson Wood",
        rgb: [80, 20, 25],
        id: "crimson_hyphae 0",
        is_dye: false, is_biomevar: false
    }],
    ["darkwarped", {
        name: "Warped Bark",
        description: "Warped Wood, Stripped Warped Wood",
        rgb: [75, 37, 52],
        id: "warped_hyphae 0",
        is_dye: false, is_biomevar: false
    }],
    ["crimsonylium", {
        name: "Crimson Nylium",
        description: "Crimson Nylium",
        rgb: [162, 42, 42],
        id: "crimson_nylium 0",
        is_dye: false, is_biomevar: false
    }],
    ["warpwart", {
        name: "Warped Wart",
        description: "Warped Wart Blocks",
        rgb: [15, 155, 115],
        id: "warped_wart_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["turquoise", {
        name: "Turquoise",
        description: "Diamond Blocks, Beacons, Ancient Debris, Conduits, Prismarine Bricks / Dark Prismarine and their slabs & stairs",
        rgb: [78, 188, 182],
        id: "diamond_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["steel", {
        name: "Iron",
        description: "Iron Blocks, Iron Bars, Iron Doors & Trapdoors, Anvils (and damaged stages), Lanterns, Soul Lanterns, Brewing Stands, Grindstones",
        rgb: [144, 144, 144],
        id: "iron_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["brightred", {
        name: "Redstone",
        description: "Redstone Blocks, Lava, Fire, TNT",
        rgb: [220, 0, 0],
        id: "redstone_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["gold", {
        name: "Gold",
        description: "Gold Blocks, Blocks of Raw Gold, Bells",
        rgb: [215, 205, 65],
        id: "gold_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["emerald", {
        name: "Emerald",
        description: "Emerald Blocks",
        rgb: [0, 188, 50],
        id: "emerald_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["lapis", {
        name: "Lapis",
        description: "Lapis Lazuli blocks",
        rgb: [64, 110, 220],
        id: "lapis_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["rawiron", {
        name: "Raw Iron",
        description: "Blocks of Raw Iron",
        rgb: [185, 150, 125],
        id: "raw_iron_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["calcite", {
        name: "Calcite",
        description: "Calcite",
        rgb: [180, 150, 140],
        id: "calcite 0",
        is_dye: false, is_biomevar: false
    }],
    ["tuff", {
        name: "Tuff",
        description: "Tuff",
        rgb: [50, 35, 30],
        id: "tuff 0",
        is_dye: false, is_biomevar: false
    }],
    ["dripstone", {
        name: "Dripstone",
        description: "Blocks of Dripstone",
        rgb: [65, 42, 30],
        id: "dripstone_block 0",
        is_dye: false, is_biomevar: false
    }],
    ["slime", {
        name: "Slime",
        description: "Slime Blocks",
        rgb: [108, 152, 48],
        id: "slime 0",
        is_dye: false, is_biomevar: false
    }],
    ["web", {
        name: "Web",
        description: "Cobwebs",
        rgb: [ 170, 170, 170 ],
        id: "web 0",
        is_dye: false, is_biomevar: false
    }],
    ["ice", {
        name: "Ice",
        description: "Blue Ice, Packed Ice, Ice",
        rgb: [138, 138, 220],
        id: "blue_ice 0",
        is_dye: false, is_biomevar: false
    }]
])

const Structures = {
    azalea_leaves:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAEAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwEAAAAAAAAAAwEAAAD/////CQgAZW50aXRpZXMAAAAAAAoHAHBhbGV0dGUKBwBkZWZhdWx0CQ0AYmxvY2tfcGFsZXR0ZQoBAAAACAQAbmFtZRcAbWluZWNyYWZ0OmF6YWxlYV9sZWF2ZXMKBgBzdGF0ZXMBDgBwZXJzaXN0ZW50X2JpdAEBCgB1cGRhdGVfYml0AAADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAE0SAABiAAAAcAAAAAA=",
    glowstone:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAMAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwMAAAAAAAAAAQAAAAEAAAADAwAAAP///////////////wkIAGVudGl0aWVzAAAAAAAKBwBwYWxldHRlCgcAZGVmYXVsdAkNAGJsb2NrX3BhbGV0dGUKAgAAAAgEAG5hbWUTAG1pbmVjcmFmdDpnbG93c3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZQ0AbWluZWNyYWZ0OmFpcgoGAHN0YXRlcwADBwB2ZXJzaW9uA9IQAQAKEwBibG9ja19wb3NpdGlvbl9kYXRhAAAAAAkWAHN0cnVjdHVyZV93b3JsZF9vcmlnaW4DAwAAAEYBAABFAAAAxf7//wA=",
    glow_lichen:"CgAAAw4AZm9ybWF0X3ZlcnNpb24BAAAACQQAc2l6ZQMDAAAAAQAAAAIAAAABAAAACgkAc3RydWN0dXJlCQ0AYmxvY2tfaW5kaWNlcwkCAAAAAwIAAAAAAAAAAQAAAAMCAAAA//////////8JCABlbnRpdGllcwAAAAAACgcAcGFsZXR0ZQoHAGRlZmF1bHQJDQBibG9ja19wYWxldHRlCgIAAAAIBABuYW1lFQBtaW5lY3JhZnQ6Y29iYmxlc3RvbmUKBgBzdGF0ZXMAAwcAdmVyc2lvbgPSEAEACAQAbmFtZRUAbWluZWNyYWZ0Omdsb3dfbGljaGVuCgYAc3RhdGVzAxkAbXVsdGlfZmFjZV9kaXJlY3Rpb25fYml0cz8AAAAAAwcAdmVyc2lvbgPSEAEAChMAYmxvY2tfcG9zaXRpb25fZGF0YQAAAAAJFgBzdHJ1Y3R1cmVfd29ybGRfb3JpZ2luAwMAAABjEgAAZQAAAFoAAAAA"
}

