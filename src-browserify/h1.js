var h1 = document.querySelector('h1');

var setTitle = function(html) {
  h1.innerHTML = html;
};

var getTitle = function() {
  return h1.innerHTML;
};

exports.setTitle = setTitle;
exports.getTitle = getTitle;
