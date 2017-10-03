document.addEventListener('DOMContentLoaded', function(event) {
  var myCb = document.querySelector('#my-cb');
  var myBtn = document.querySelector('#my-btn');

  myCb.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('click détecté sur myCb');
    console.log(event.target.id);
  });

  myBtn.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log('click détecté sur myBtn');
    console.log(event.target.id);
  });

  var myContainerDiv = document.querySelector('#my-container-div');

  myContainerDiv.addEventListener('click', function(event) {
    console.log('click détecté sur myContainerDiv');
  });

  // sélection de tous les éléments avec la classe my-radio
  var radios = document.querySelectorAll('.my-radio');

  radios.forEach(function(item, index, list) {
    item.addEventListener('click', function(event) {
      console.log('click détecté sur radio ' + event.target.value);
      var click = event.target.dataset.click;
      event.target.dataset.click = parseInt(click) + 1;
    });
  });
});

window.addEventListener('load', function(event) {
  console.log('la page est entièrment chargée');
});
