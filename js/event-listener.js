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

document.addEventListener('click', function(event) {
  console.log('click détecté sur document');
});
