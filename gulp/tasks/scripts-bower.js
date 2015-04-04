var gulp = require('gulp');
var plumber = require('gulp-plumber');
var bower = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

module.exports = function (errorHandler) {
  gulp.task('scripts:bower', function () {
    return gulp.src(bower())
      .pipe(plumber({ errorHandler: errorHandler }))
      .pipe(concat('vendor.js'))
      .pipe(uglify())
      .pipe(gulp.dest('public/assets/scripts'))
      .pipe(livereload());
  });
};
