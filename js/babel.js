'use strict';

window.setTimeout(function () {
  console.log('time is out');
}, 3000);

var name = 'Toto';

console.log('\nline 1\nline 2\nline 3\nhello ' + name + '\n');

var _ref = [1, 2, 3],
    a = _ref[0],
    b = _ref[2];


console.log(a);
console.log(b);