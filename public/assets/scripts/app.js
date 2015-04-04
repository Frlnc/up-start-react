function App(t){"use strict";this.target=t}function Emitter(){"use strict";this.eventListeners={}}function AppActioner(t){"use strict";this.type=t||"App"}function Dispatcher(t){"use strict";this.listeners=t||[]}function AppStore(){"use strict";Emitter.call(this),this.handlers={},this.handlers[AppConstants.BOOTED]=this.onBooted,AppDispatcher.register(this.handle.bind(this),"App")}App.prototype.boot=function(){"use strict";setTimeout(function(){return AppActioner.booted()},1e3)},App.prototype.render=function(){"use strict";this.element=React.createElement(AppComponent),React.render(this.element,this.target||document.body),AppActioner.rendered()},window.app=new App,Emitter.prototype.on=function(t,e,r){"use strict";void 0===this.eventListeners[t]&&(this.eventListeners[t]=[]),this.eventListeners[t].push({callback:e,scope:r})},Emitter.prototype.off=function(t,e){"use strict";void 0!==this.eventListeners[t]&&(this.eventListeners[t].forEach(function(r,i){e===r.callback&&this.eventListeners[t].splice(i,1)}.bind(this)),0===this.eventListeners[t].length&&delete this.eventListeners[t])},Emitter.prototype.emit=function(t){"use strict";if(void 0!==this.eventListeners[t]){var e=Array.prototype.slice.call(arguments,1);this.eventListeners[t].forEach(function(t){t.callback.apply(t.scope,e)})}};var AppConstants={RENDERED:"RENDERED",BOOTED:"BOOTED"};AppActioner.prototype.rendered=function(){"use strict";AppDispatcher.dispatch({action:AppConstants.RENDERED},this.type)},AppActioner.prototype.booted=function(){"use strict";AppDispatcher.dispatch({action:AppConstants.BOOTED},this.type)};var AppActioner=new AppActioner("App");Dispatcher.prototype.register=function(t){"use strict";for(var e=[],r=1,i=arguments.length;i>r;r++)e.push(arguments[r]);return this.listeners.push({callback:t,types:e}),this.listeners.length-1},Dispatcher.prototype.dispatch=function(t,e){"use strict";var r=[],i=[],n=this.listeners.filter(function(t){return-1!==t.types.indexOf(e)});n.map(function(t,e){return new Promise(function(t,n){r[e]=t,i[e]=n})}),n.forEach(function(n,s){Promise.resolve(n.callback(t,e)).then(function(){r[s](t,e)},function(){i[s](new Error("Dispatcher callback unsuccessful"))})})};var AppDispatcher=new Dispatcher;for(var Emitter____Key in Emitter)Emitter.hasOwnProperty(Emitter____Key)&&(AppStore[Emitter____Key]=Emitter[Emitter____Key]);var ____SuperProtoOfEmitter=null===Emitter?null:Emitter.prototype;AppStore.prototype=Object.create(____SuperProtoOfEmitter),AppStore.prototype.constructor=AppStore,AppStore.__superConstructor__=Emitter,AppStore.prototype.handle=function(t){"use strict";var e=this.handlers[t.action];void 0!==e&&e(t),this.emit(t.action,t)},AppStore.prototype.onBooted=function(){"use strict";console.log("App booted.")};var AppStore=new AppStore;
//# sourceMappingURL=app.js.map