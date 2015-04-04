class App {

  /**
   * Constructs the app.
   *
   * @return {void}
   */
  constructor(target) {
    this.target = target;
  }

  /**
   * Boots the app.
   *
   * @return {void}
   */
  boot() {
    // Boot the app.

    setTimeout(() => AppActioner.booted(), 1000);
  }

  /**
   * Renders the app.
   *
   * @return {void}
   */
  render() {
    this.element = React.createElement(AppComponent);

    React.render(this.element, this.target || document.body);
    AppActioner.rendered();
  }

}

window.app = new App();
