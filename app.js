var bs = require("browser-sync").create();

bs.watch(['acynchronousjs/promises/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./acynchronousjs/promises"
});