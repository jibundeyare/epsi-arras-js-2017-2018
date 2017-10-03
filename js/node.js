document.addEventListener('DOMContentLoaded', function(event) {
  var createBtn = document.querySelector('#create-btn');
  var removeBtn = document.querySelector('#remove-btn');

  createBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var img = document.querySelector('#my-img');

    if (!img) {
      var myContainer = document.querySelector('#my-container');
      var img = document.createElement('img');
      img.id = 'my-img';
      img.src = 'https://cdn.worldvectorlogo.com/logos/mdn.svg';
      img.style.width = '100px';

      myContainer.appendChild(img);
    }
  });

  removeBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var img = document.querySelector('#my-img');

    if (img) {
      img.remove();
    }
  });
});
