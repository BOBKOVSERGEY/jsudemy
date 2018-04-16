var bs = require("browser-sync").create();

bs.watch(['dom-pig-game/*.*', 'dom-pig-game/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./dom-pig-game"
});