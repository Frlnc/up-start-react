function AppComponent(){"use strict";this.state={booted:!1}}var ____Classf=React.Component;for(var ____Classf____Key in ____Classf)____Classf.hasOwnProperty(____Classf____Key)&&(AppComponent[____Classf____Key]=____Classf[____Classf____Key]);var ____SuperProtoOf____Classf=null===____Classf?null:____Classf.prototype;AppComponent.prototype=Object.create(____SuperProtoOf____Classf),AppComponent.prototype.constructor=AppComponent,AppComponent.__superConstructor__=____Classf,AppComponent.prototype.onBooted=function(){"use strict";this.setState({booted:!0})},AppComponent.prototype.componentWillMount=function(){"use strict";AppStore.on(AppConstants.BOOTED,this.onBooted,this)},AppComponent.prototype.componentWillUnmount=function(){"use strict";AppStore.off(AppConstants.BOOTED,this.onBooted,this)},AppComponent.prototype.render=function(){"use strict";return React.createElement("div",null,this.state.booted?"Booted":"Booting")};
//# sourceMappingURL=components.js.map