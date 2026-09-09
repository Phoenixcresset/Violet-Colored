(() => {
  const removedTags = {
    item: [
      "createaddition:plants",
      "createaddition:plant_foods",
      "tconstruct:seeds",
    ],
    block: [
      "minecraft:enderman_holdable", // Remove enderman griefing
    ],
    entity_type: [
      "horseman:cannot_swim",
    ],
    "worldgen/structure": ["amendments:add_potion_cauldron"],
  };

  global.Tags.registerRemovedTags(removedTags);
})();
