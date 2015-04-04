class Dispatcher {

  /**
   * Constructs the Dispatcher.
   *
   * @param {Array}
   * @param {Array}
   * @return {void}
   */
  constructor(listeners, promises) {
    this.listeners = listeners || [];
    this.promises = promises || [];
  }

  /**
   * Registers a callback.
   *
   * @param {Function}
   * @param {...String}
   * @return {void}
   */
  register(callback, ...types) {
    this.listeners.push({
      callback,
      types
    });

    return this.listeners.length - 1;
  }

  /**
   * Dispatch a payload.
   *
   * @param {Object}
   * @param {String}
   * @return {void}
   */
  dispatch(payload, type) {
    // First create array of promises for listeners to reference.
    var resolves = [];
    var rejects = [];
    var listeners = this.listeners.filter((listener) => listener.types.indexOf(type) !== -1);

    var promises = listeners.map(function (_, i) {
      return new Promise(function (resolve, reject) {
        resolves[i] = resolve;
        rejects[i] = reject;
      });
    });

    // Dispatch to listeners and resolve/reject promises.
    listeners.forEach(function (listener, i) {
      // Callback can return an obj, to resolve, or a promise, to chain.
      // See waitFor() for why this might be useful.
      Promise.resolve(listener.callback(payload, type)).then(function () {
        resolves[i](payload, type);
      }, function() {
        rejects[i](new Error('Dispatcher callback unsuccessful'));
      });
    });
  }

}

var AppDispatcher = new Dispatcher();
