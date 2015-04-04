Up-Start React
==============
> An up-start for ReactJS.

## Getting Started
```sh
npm install
bower install
gulp watch
```

## Why?
The reason I made this was quite simple. Pretty much every '_up-start_' type project on GitHub seems to involve Browserify / Reactify / Watchify etc. This, on the other hand, does not. It uses the much more simple gulp-concat. My reasoning to choose this over Browserify / Reactify / Watchify is simply because _speed_. I've had problems with Browserify / Reactify / Watchify previously where it would take upwards of a second to compile a decently sized project. This was a really annoying issue!

## What?
A simple configuration of several packages:
* gulp
* gulp-concat
* gulp-jshint
* gulp-jstransform
* gulp-livereload
* gulp-notify
* gulp-plumber
* gulp-react
* gulp-sourcemaps
* gulp-uglify
* gulp-watch
* jshint-jsx
* jshint-stylish
* main-bower-files

These packages enable us to have a lot of power with a lot of speed. Four simple gulp tasks are provided:
* `scripts:bower`: Concats all bower scripts (see [main-bower-files](//www.npmjs.com/package/main-bower-files)) into one `vendor.js` script.
* `scripts:reactjs`: Transpiles (ES6 -> ES5), JSHints, Sourcemaps, JSX Transforms, concats (into `components.js`) and finally uglifies the scripts located at `src/react`.
* `scripts:app`: Transpiles (ES6 -> ES5), JSHints, Sourcemaps, concats (into `app.js`) and finally uglifies the scripts located at `src/app`.
* `watch`: Watches live for file changes, reruns the associated file's gulp task and finally livereloads the file (see [LiveReload](//chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en)).

The reason to having three tasks is pretty simple. We have the bower task seperate because bower files are altered (via `bower install` etc) much less frequently than the app files. This means there is no reason to process them with the app logic which would cause slowdown. The reason to having `app.js` and `components.js` is for the same reason MVC isn't just one letter. `src/react` should only hold component classes - no logic. `src/app` should hold only app logic - no component classes.

This also comes with a simple boilerplate Flux implementation. Constants are kept in the header of the associated actioner class (for sake of not having multiple tiny files flooding the tree). Though I would recommend seperating them to a `src/app/constants` folder if they become large enough to be their own file. Actioners (`src/app/actioners`) are simply Actions, I named them Actioners so they read better (IE: `AppActioner.someAction()` - this is my opinion, you're free to change it obviously :octocat:).

Dispatchers are located at `src/app/dispatchers`. To add a new dispatcher (not many projects would require multiple dispatchers, a lot can be done with just one using different dispatch types), just add a line to the bottom of the `Dispatcher.js` file which instantiates one (IE: `var SomeDispatcher = new Dispatcher()`). What I mean by 'dispatch types' is that you can register a listener that listens to multiple types (via `SomeDispatcher.register(callback, 'TypeOne', 'TypeTwo', 'TypeThree' /** etc... */)`). This listener will only recieve an action that had one of those types. When you dispatch an action you also define it's type (via `SomeDispatcher.dispatch(action, 'SomeType')`). The listener will recieve both the payload and the type (via `someListener(payload, type)` so your listener should match that signature).

Stores are slim, just listen to a dispatcher and do any associated logic with the payload. If you extend the `Emitter` class (like `AppStore`) then you'll be able to emit dispatched actions via `this.emit(payload.action, payload)` etc. This would allow components to listen to your store for events (via `SomeStore.on('SOME_EVENT', this.someMethod, this /** this param is not required but can be passed to force scope on the listener */)`) - to detach a listener simply call the off method on the emitter with the same parameters as you did with the on method (ie: `SomeStore.off('SOME_EVENT', this.someMethod)` - the scope parameter isn't used here as it's not needed).
