var bs = require("browser-sync").create();

bs.watch(['advanced-js/*.*', 'dom-pig-game/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./advanced-js"
});