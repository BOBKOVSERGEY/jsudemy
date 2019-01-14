var bs = require("browser-sync").create();

bs.watch(['es6es2015/practice/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./es6es2015/practice"
});