(() => {
  const keybindsToRemove = [
    "key.findme.pull_one",
    "key.findme.pull_stack",
    "key.lighty.enable",
    "key.fadingnightvision.toggle_night_vision",
    "key.carbon_config.key",
    "key.scholar.toggle_book_tools",
    "key.scholar.import_book",
    "key.scholar.export_book",
    "key.simple_music_control.next_music_track",
    "key.simple_music_control.toggle_music",
    "treechop.key.toggle_chopping",
    "treechop.key.cycle_sneak_behavior",
    "treechop.key.open_settings_overlay",
  ];


  KeyBindJSEvents.modify((event) => {
    if (!Platform.isClientEnvironment()) {
      return;
    }

    for (const key of keybindsToRemove) {
      event.remove(key);
    }

  });
})();
