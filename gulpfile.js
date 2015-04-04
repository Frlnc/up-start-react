var gulp = require('gulp');
require('./gulp/boot');

gulp.task('default', ['scripts:bower', 'scripts:reactjs', 'scripts:app']);
