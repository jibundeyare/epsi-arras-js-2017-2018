// sélection d'un élément par nom de balise
var h1 = document.querySelector('h1');

// accès en lecture au innerHTML
console.log(h1.innerHTML);

// accès en écriture au innerHTML
h1.innerHTML = 'selector2';

// sélection d'un élément par id
var row2 = document.querySelector('#row2');

row2.innerHTML = '<p>lorem ipsum</p>';

// accès en écriture du style
row2.style = 'font-size: 32px; color: gray;';

// accès en écriture à un attribut du style
row2.style.backgroundColor = 'pink';

// accès en lecture à un attribut data-*
console.log(row2.dataset.type);

// accès en écriture à un attribut data-*
row2.dataset.type = "123";

console.log(row2.dataset.type);
