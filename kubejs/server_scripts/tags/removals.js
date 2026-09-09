(() => {
  const removedTags = {
    block: [
      "minecraft:enderman_holdable", // Remove enderman griefing
    ],
    entity_type: [
      "horseman:cannot_swim",
    ],
  };

  global.Tags.registerRemovedTags(removedTags);
})();
