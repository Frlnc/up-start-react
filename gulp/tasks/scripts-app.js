var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var jstransform = require('gulp-jstransform');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

module.exports = function (errorHandler) {
  gulp.task('scripts:app', function () {
    return gulp.src('src/app/**/*.js')
      .pipe(plumber({ errorHandler: errorHandler }))
      .pipe(jshint())
      .pipe(jshint.reporter(jshintReporter))
      .pipe(jshint.reporter('fail'))
      .pipe(sourcemaps.init())
        .pipe(jstransform())
        .pipe(concat('app.js'))
        .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/assets/scripts'))
      .pipe(livereload());
  });
};
