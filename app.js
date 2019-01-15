var bs = require("browser-sync").create();

bs.watch(['acynchronousjs/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./acynchronousjs"
});