(() => {
  const removedTagsFromEntries = {
    item: {
      // Removes the dragon head to count as an arthropod since Supplementaries adds a spider head
      "dummmmmmy:arthropod_heads": ["minecraft:dragon_head"],
    },
  };

  for (const color of Color.DYE.values()) {
    removedTagsFromEntries.item[`c:dyes/${color}`] = [`chalk:${color}_chalk`];
  }

  global.Tags.registerRemovedTagsFromEntries(removedTagsFromEntries);
})();
