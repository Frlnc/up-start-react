class Emitter {

  /**
   * Constructs the Emitter.
   *
   * @return {void}
   */
  constructor() {
    this.eventListeners = {};
  }

  /**
   * Attaches an event listener.
   *
   * @param {String}
   * @param {Function}
   * @param {Object}
   * @return {void}
   */
  on(event, listener, scope) {
    if (this.eventListeners[event] === undefined) {
      this.eventListeners[event] = [];
    }

    this.eventListeners[event].push({
      callback: listener,
      scope
    });
  }

  /**
   * Removes an event listener.
   *
   * @param {String}
   * @param {Function}
   * @return {void}
   */
  off(event, listener) {
    if (this.eventListeners[event] === undefined) {
      return;
    }

    this.eventListeners[event].forEach((current, id) => {
      if (listener !== current.callback) {
        return;
      }

      this.eventListeners[event].splice(id, 1);
    });

    if (this.eventListeners[event].length === 0) {
      delete this.eventListeners[event];
    }
  }

  /**
   * Emits an event.
   *
   * @param {String}
   * @param {Object}
   * @return {void}
   */
  emit(event, payload) {
    if (this.eventListeners[event] === undefined) {
      return;
    }

    var args = Array.prototype.slice.call(arguments, 1);
    this.eventListeners[event].forEach((listener) => {
      listener.callback.apply(listener.scope, args);
    });
  }

}
