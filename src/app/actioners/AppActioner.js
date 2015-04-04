var AppConstants = {
  RENDERED: 'RENDERED',
  BOOTED: 'BOOTED'
};

class AppActioner {

  /**
   * Constructs the AppActioner.
   *
   * @param {String}
   * @return {void}
   */
  constructor(type) {
    this.type = type || 'App';
  }

  /**
   * The app has been rendered.
   *
   * @return {void}
   */
  rendered() {
    AppDispatcher.dispatch({
      action: AppConstants.RENDERED
    }, this.type);
  }

  /**
   * The app has been booted.
   *
   * @return {void}
   */
  booted() {
    AppDispatcher.dispatch({
      action: AppConstants.BOOTED
    }, this.type);
  }

}

var AppActioner = new AppActioner('App');
