var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var clean = require("gulp-clean");

function cleanCss() {
  return gulp.src("public", { read: false, allowEmpty: true }).pipe(clean());
}

function compile() {
  return gulp
    .src("./src/styles/style.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public"));
}

function sassWatch() {
  gulp.watch(["./src/styles/*.scss"], compile);
}

function buildStyles() {
  cleanCss();
  compile();
  sassWatch();
}

gulp.task("compile", compile);
gulp.task("clean", cleanCss);
gulp.task("watch sass", buildStyles);
gulp.task("style", gulp.series("clean", "watch sass"));
gulp.task("default", compile);
