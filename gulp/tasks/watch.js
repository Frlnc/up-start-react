var gulp = require('gulp');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();

  watch('bower_components/**/*.js', function () {
    gulp.start('scripts:bower');
  });

  watch('src/react/**/*.jsx', function () {
    gulp.start('scripts:reactjs');
  });

  watch('src/app/**/*.js', function () {
    gulp.start('scripts:app');
  });
});
