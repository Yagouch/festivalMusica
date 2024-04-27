const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
    return gulp.src('src/scss/**/*.scss') // Path to your SCSS files
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('build/css')); // Output directory for CSS files
}

function watchSass() {
    gulp.watch('src/scss/**/*.scss', compileSass);
}

gulp.task("dev", watchSass);