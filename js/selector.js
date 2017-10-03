// sélection d'un élément grâce à son id
var myDiv = document.querySelector('#my-div');

// lecture du code html contenu dans l'élément
var html = myDiv.innerHTML;

// lecture d'attributs de l'élément
var id = myDiv.id;
var className = myDiv.className;
var classList = myDiv.classList;
var name = myDiv.dataset.name;

// séléection des éléments de type li contenus dans l'élément dont l'id est my-ul
var lis = document.querySelectorAll('#my-ul li');

// lecture du nombre d'éléments dans la collection
var length = lis.length;

// parcours de tous les éléments de la collection
for (var i = 0; i < lis.length; i++) {
  console.log(lis[i].innerHTML);
}

// méthode alternative de parcours
lis.forEach(function(item, index, list) {
  console.log(item.innerHTML);
});
