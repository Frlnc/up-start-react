class AppStore extends Emitter {

  /**
   * Constructs the AppStore.
   *
   * @return {void}
   */
  constructor() {
    super();
    
    this.handlers = {};
    this.handlers[AppConstants.BOOTED] = this.onBooted;

    AppDispatcher.register(this.handle.bind(this), 'App');
  }

  /**
   * Handles a payload.
   *
   * @param {Object}
   * @return {void}
   */
  handle(payload) {
    var handler = this.handlers[payload.action];

    if (handler !== undefined) {
      handler(payload);
    }

    this.emit(payload.action, payload);
  }

  /**
   * Fired on the AppConstants.BOOTED event.
   *
   * @return {void}
   */
  onBooted() {
    console.log('App booted.');
  }

}

var AppStore = new AppStore();
