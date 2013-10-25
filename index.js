
var requestAnimFrame = require('./utils/requestAnimFrame');

var Loop = function () {
  this.callbacks = [];
  this.playing = false;
  this.fps = 0;
  this.frame = 0;
};

Loop.prototype.play = function () {
  this.playing = true;
  this.next();
};

Loop.prototype.stop = function () {
  this.playing = false;
};

Loop.prototype.use = function (callback) {
  this.callbacks.push(callback);
};

Loop.prototype.next = function () {
  if (this.playing) {
    var self = this;

    this.getFPS();

    for (var i = 0; i < this.callbacks.length; i += 1) {
      this.callbacks[i]();
    }

    this.frame+= 1;

    requestAnimFrame(function () {
      self.next();
    });
  }
};

Loop.prototype.getFPS = function () {
  var delta;

  if (!this.lastUpdate) {
    this.lastUpdate = new Date().getTime();
  }

  delta = (new Date().getTime() - this.lastUpdate) / 1000;
  this.lastUpdate = new Date().getTime();
  this.fps = 1 / delta;
};

module.exports = Loop;
