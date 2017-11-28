var simplePromise = require('./simple-promise.js');

simplePromise.getData().then(function(data) {
  console.log(data);
});
