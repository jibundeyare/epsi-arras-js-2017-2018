var githubApi = require('./github-api-promise.js');

var element = document.querySelector('#result');

githubApi.search('airbnb language:javascript', 'stars', 'desc')
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
});
