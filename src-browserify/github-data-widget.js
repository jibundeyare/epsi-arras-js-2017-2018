var element = null;

exports.setElement = function(element) {
  this.element = element;
};

exports.displayData = function(data) {
  var html = '';

  data.items.forEach(function(item, index, list) {
    html += `
    <tr>
      <td>${item.name}</td>
      <td>${item.html_url}</td>
      <td>${item.clone_url}</td>
    </tr>
    `;
  });

  this.element.innerHTML = html;
};
