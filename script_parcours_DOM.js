// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
var pNbElts = document.getElementsByTagName('p').length;
console.log(pNbElts);  // réponse 20

// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
var a = document.getElementById('coucou').innerHTML;
console.log(a); // réponse "Le DOM est une interface standardisée pour accéder au contenu HTML d'une page."

// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? 
//var b = document.getElementsByTagName('a')[2].getAttribute('href');
var b = document.querySelectorAll('a')[2].getAttribute('href');
console.log(b);  // réponse 'https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom'

// Combien d'éléments portent la classe compte-moi ? 
var c = document.getElementsByClassName('compte-moi').length;
console.log(c);   // 12

// Combien d'éléments <li> portent la classe compte-moi ? 
var d = document.querySelectorAll('li.compte-moi').length;
console.log(d); // 6

// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi
var e = document.querySelectorAll('ol>li.compte-moi').length;
console.log(e); // 1

/*
La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
*/
var f = document.querySelectorAll('div>ul')[1].querySelector('li').innerHTML;
console.log(f);