
# game-loop

> Simple utility class to create gameloops based on `requestAnimationFrame`, vendor variations or falling back on a 60 fps `setTimeout` loop. Ment to be used in the browser, with [Browserify](http://browserify.org)

### Installation

`npm install game-loop`

### Usage

```javascript

var Loop = require('game-loop'),
	loop = new Loop();

loop.use(function () {
	console.log('Frame ' + this.frame);
});

loop.use(function () {
	// [...]
});

loop.play()

// Frame 0

loop.stop()

```

### Methods

* `.use([ callback ])` - Attach a callback to loop iterations
* `.play()` - Start the loop
* `.stop()` - Stop the loop
* `.getFPS()` - Get frames-per-second rated based on last performed iteration

### Properties

* `frame` - Current frame number
* `lastUpdate` - Timestamp registered after completing last iteration
* `fps` - Last calculated framerate
