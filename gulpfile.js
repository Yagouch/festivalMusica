const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileJs() {
    return gulp.src('src/js/app.js')
      .pipe( gulp.dest('build/js') )
}
function compileSass() {
    return gulp.src('src/scss/**/*.scss', {sourcemaps: true}) // Path to your SCSS files
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/css', {sourcemaps: true})); // Output directory for CSS files
}

function watchSass() {
    gulp.watch('src/js/**/*.js', compileJs);
    gulp.watch('src/scss/**/*.scss', compileSass);
}

// gulp.task("dev", watchSass);

exports.dev = series(compileJs, compileSass, watchSass);
exports.default = exports.dev