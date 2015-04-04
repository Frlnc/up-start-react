class AppComponent extends React.Component {

  /**
   * Constructs the AppComponent.
   *
   * @return {void}
   */
  constructor() {
    this.state = {
      booted: false
    };
  }

  /**
   * Hook into the AppConstants.BOOTED event.
   *
   * @return {void}
   */
  onBooted() {
    this.setState({
      booted: true
    });
  }

  /**
   * Hook into the mount event.
   *
   * @return {void}
   */
  componentWillMount() {
    AppStore.on(AppConstants.BOOTED, this.onBooted, this);
  }

  /**
   * Hook into the unmount event.
   *
   * @return {void}
   */
  componentWillUnmount() {
    AppStore.off(AppConstants.BOOTED, this.onBooted, this);
  }

  /**
   * Render the app component.
   *
   * @return {React.DOM}
   */
  render() {
    return (
      <div>
        { this.state.booted ? (
          'Booted'
        ) : (
          'Booting'
        ) }
      </div>
    );
  }

}
