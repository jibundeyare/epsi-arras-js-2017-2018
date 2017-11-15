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

},{"./h1.js":1}]},{},[2]);
