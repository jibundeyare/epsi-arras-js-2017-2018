var axios = require('axios');

var element = null;

var setElement = function(e) {
  element = e;
};

var search = function(text, s = null, o = 'asc') {
  axios.get('https://api.github.com/search/repositories', {
    params: {
      q: text,
      sort: s,
      order: o
    }
  })
  .then(function (response) {
    element.innerHTML = '';

    response.data.items.forEach(function(item, index, list) {
      element.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.html_url}</td>
        <td>${item.clone_url}</td>
      </tr>
      `;
    });
  })
  .catch(function (error) {
    console.log(error);
  });
};

module.exports = {
  setElement: setElement,
  search: search
};
