function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

console.log('start');

var result = new Promise(function(resolve, reject) {
  var number = getRandomIntInclusive(0, 1);

  if (number == 1)  {
    resolve(':D');
  } else {
    reject(':(');
  }
});

console.log('wait');

result
  .then(function(response) {
    return 'I feel ' + response;
  })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

console.log('end');
