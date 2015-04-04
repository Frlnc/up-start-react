var notify = require('gulp-notify');

/**
 * The error handler.
 *
 * @return {void}
 */
var errorHandler = function () {
  notify.onError({
    title: 'Gulp Error',
    message: '<%= error.message %>'
  }).apply(this, arguments);

  if (typeof this.emit === 'function') {
    this.emit('end');
  }
};

/**
 * The tasks to load.
 *
 * @type {Array}
 */
var tasks = [
  'scripts-bower',
  'scripts-reactjs',
  'scripts-app',
  'watch'
];

/**
 * Load each task.
 */
tasks.map(function (value) {
  var task = require('./tasks/' + value);

  if (typeof task !== 'function') {
    return;
  }

  task(errorHandler);
});
