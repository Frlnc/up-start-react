var gulp = require('gulp');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jsxLinter = require('jshint-jsx').JSXHINT;
var jshintReporter = require('jshint-stylish');
var sourcemaps = require('gulp-sourcemaps');
var react = require('gulp-react');
var jstransform = require('gulp-jstransform');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');

module.exports = function (errorHandler) {
  gulp.task('scripts:reactjs', function () {
    return gulp.src('src/react/**/*.jsx')
      .pipe(plumber({ errorHandler: errorHandler }))
      .pipe(jshint({ linter: jsxLinter }))
      .pipe(jshint.reporter(jshintReporter))
      .pipe(jshint.reporter('fail'))
      .pipe(sourcemaps.init())
        .pipe(react())
        .pipe(jstransform())
        .pipe(concat('components.js'))
        .pipe(uglify())
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('public/assets/scripts'))
      .pipe(livereload());
  });
};
