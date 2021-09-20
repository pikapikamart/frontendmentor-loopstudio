const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-dart-sass");
const postcss = require("gulp-postcss");
const browserSync = require("browser-sync");
const autoPrefixer = require("autoprefixer");

function scssTask() {
    return src("app/scss/style.scss", {sourcemaps: true})
    .pipe(sass())
    .pipe(postcss([autoPrefixer()]))
    .pipe(dest("dist", {sourcemaps: "."}));
}


// Task for the browserSync
function browserSyncServe(callback) {
    browserSync.init({
        server: {
            baseDir: "."
        }
    });
    callback();
}

// Task for the browerSync to reload
function browserSyncReload(callback) {
    browserSync.reload();
    callback();
}

// Task for watching all
function watchTask() {
    watch(["*.html", "app/js/**/*.js"], browserSyncReload);
    watch(["app/scss/**/*.scss"], series(scssTask, browserSyncReload));
}

// Default Gulp to run in CLI
exports.default = series(
    scssTask,
    browserSyncServe,
    watchTask
);