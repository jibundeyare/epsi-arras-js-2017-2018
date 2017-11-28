function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

console.log('start');

setTimeout(function() {
  var number = getRandomIntInclusive(0, 1);

  if (number == 1)  {
    console.log(':D');
  } else {
    console.log(':(');
  }
}, 3000);

console.log('end');
