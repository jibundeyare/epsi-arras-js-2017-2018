exports.getData = function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      var data = 'lorem ipsum';
      resolve(data);
    }, 1000);
  });
};
