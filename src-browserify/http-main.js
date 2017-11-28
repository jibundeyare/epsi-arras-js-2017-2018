var githubApi = require('./github-api.js');
var githubDataWidget = require('./github-data-widget.js');

var element = document.querySelector('#result');

githubDataWidget.setElement(element);

githubApi.search('airbnb language:javascript', 'stars', 'desc').then(function(response) {
  githubDataWidget.displayData(response.data);
}).catch(function(error) {
  console.log(error);
});
