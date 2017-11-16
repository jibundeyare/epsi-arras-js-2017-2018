var githubApi = require('./github-api.js');

var element = document.querySelector('#result');

githubApi.setElement(element);
githubApi.search('airbnb language:javascript', 'stars', 'desc');
