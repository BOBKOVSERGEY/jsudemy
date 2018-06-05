var bs = require("browser-sync").create();

bs.watch(['victorina/*.*', 'victorina/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./victorina"
});