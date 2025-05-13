const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const jsAllPath = "./wp-content/themes/randominical-theme/assets/src/js/*.js";
const scssAllPath = "./wp-content/themes/randominical-theme/assets/src/sass/*.scss";
const scssPath = "./wp-content/themes/randominical-theme/assets/src/sass/style.scss";


function js() {
  return src(jsAllPath)
    .pipe(concat("script.js"))
    .pipe(uglify())
    .pipe(dest("./wp-content/themes/randominical-theme/assets/js/"));
}

function css() {
  return src(scssPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(cleanCSS({ compatibility: "ie11" }))
    .pipe(dest("./wp-content/themes/randominical-theme/assets/css/"));
}

exports.watch = function () {
  watch(scssAllPath, css);
  watch(jsAllPath, js);
};

exports.css = css;
exports.js = js;