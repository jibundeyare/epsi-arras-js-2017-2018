function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

console.log('start');

var result = setTimeout(function() {
  var number = getRandomIntInclusive(0, 1);

  if (number == 1)  {
    return ':D';
  } else {
    return ':(';
  }
}, 3000);

console.log('wait');

console.log(result);

console.log('end');
