window.setTimeout(() => {
  console.log('time is out');
}, 3000);

var name = 'Toto';

console.log(`
line 1
line 2
line 3
hello ${name}
`);

var [a, ,b] = [1,2,3];

console.log(a);
console.log(b);
