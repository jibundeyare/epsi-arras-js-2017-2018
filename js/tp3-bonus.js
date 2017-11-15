var input1 = document.querySelector('#input1');
var button1 = document.querySelector('#button1');

input1.addEventListener('keyup', function(event) {
  button1.disabled = false;
});

button1.addEventListener('click', function(event) {
  input1.value = '';
  input1.focus();
  event.target.disabled = true;
});
