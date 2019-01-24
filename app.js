var bs = require("browser-sync").create();

bs.watch(['acynchronousjs/ajax/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./acynchronousjs/ajax"
});