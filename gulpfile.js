const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const jsAllPath = "./wp-content/themes/hometest/assets/src/js/*.js";
const scssAllPath = "./wp-content/themes/hometest/assets/src/sass/*.scss";
const scssPath = "./wp-content/themes/hometest/assets/src/sass/style.scss";

function js() {
  return src(jsAllPath)
    .pipe(concat("script.js"))
    .pipe(dest("./wp-content/themes/hometest/assets/js/"));
}

function css() {
  return src(scssPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./wp-content/themes/hometest/assets/css/"));
}

exports.watch = function () {
  watch(scssAllPath, css);
  watch(jsAllPath, js);
};