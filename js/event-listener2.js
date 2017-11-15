var button1 = document.querySelector('#button1');

button1.addEventListener('click', function(event) {
  console.log(event.target);
  event.target.style.fontSize = '32px';
});

var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');

function buttonClickHandler(event) {
  console.log(event.target);
  event.target.style.fontSize = '32px';
};

button2.addEventListener('click', buttonClickHandler);
button3.addEventListener('click', buttonClickHandler);

var input1 = document.querySelector('#input1');

input1.addEventListener('keyup', function(event) {
  console.log(event.target.value);
});
