(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var h1 = document.querySelector('h1');

var setTitle = function(html) {
  h1.innerHTML = html;
};

var getTitle = function() {
  return h1.innerHTML;
};

exports.setTitle = setTitle;
exports.getTitle = getTitle;

},{}],2:[function(require,module,exports){
var moduleH1 = require('./h1.js');

moduleH1.setTitle('123');
console.log(moduleH1.getTitle());

console.log('hello browserify');

},{"./h1.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMtYnJvd3NlcmlmeS9oMS5qcyIsInNyYy1icm93c2VyaWZ5L21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgaDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMScpO1xuXG52YXIgc2V0VGl0bGUgPSBmdW5jdGlvbihodG1sKSB7XG4gIGgxLmlubmVySFRNTCA9IGh0bWw7XG59O1xuXG52YXIgZ2V0VGl0bGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGgxLmlubmVySFRNTDtcbn07XG5cbmV4cG9ydHMuc2V0VGl0bGUgPSBzZXRUaXRsZTtcbmV4cG9ydHMuZ2V0VGl0bGUgPSBnZXRUaXRsZTtcbiIsInZhciBtb2R1bGVIMSA9IHJlcXVpcmUoJy4vaDEuanMnKTtcblxubW9kdWxlSDEuc2V0VGl0bGUoJzEyMycpO1xuY29uc29sZS5sb2cobW9kdWxlSDEuZ2V0VGl0bGUoKSk7XG5cbmNvbnNvbGUubG9nKCdoZWxsbyBicm93c2VyaWZ5Jyk7XG4iXX0=
