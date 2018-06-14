var bs = require("browser-sync").create();

bs.watch(['budgety/*.*', 'victorina/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./budgety"
});