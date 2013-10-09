
var polyfill = function (callback) {
  setTimeout(callback, 1000 / 60);
};

module.exports =
  (window) ? (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    polyfill
  ) : polyfill;
