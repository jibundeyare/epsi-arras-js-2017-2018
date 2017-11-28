var axios = require('axios');

exports.search = function(text, s = null, o = 'asc') {
  return axios.get('https://api.github.com/search/repositories', {
    params: {
      q: text,
      sort: s,
      order: o
    }
  });
};
