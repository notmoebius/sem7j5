/*
Modif 1 : changeTitles()
    Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
    Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, 
    en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. 
    Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. 
    Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
*/

function changeTitles(str) {
    var str1 = "Ce que j'ai appris à THP";
    var str2 = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
   var title = document.getElementsByTagName('h1')[0].innerHTML = str1;
   var subTitle = document.querySelectorAll('p.lead')[0].textContent = str2;
}
changeTitles();

/*
modif 2 : changeCallToActions()
    Changer le texte du bouton "Main call to action" en "OK je veux tester !"
    Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" 
    va pointer : "http://www.thehackingproject.org"
    Changer le texte du bouton "Secondary action" en "Non Merci"
    Ajouter l'URL vers laquelle le bouton "Secondary action" 
    va pointer : "https://www.pole-emploi.fr/accueil/"
*/

function changeCallToActions() {
    // change le texte
    var callToAction = document.querySelectorAll('a.btn.btn-primary.my-2')[0].firstChild.textContent = 'OK je veux tester !';
    var callToAction2 = document.querySelectorAll('a.btn.btn-secondary.my-2')[0].firstChild.textContent = 'Non Merci';
    // ajoute une URL
    var addHref = document.querySelectorAll('a.btn.btn-primary.my-2')[0];
    var addHref2 = document.querySelectorAll('a.btn.btn-secondary.my-2')[0];
    addHref.setAttribute("href","http://www.thehackingproject.org");
    addHref2.setAttribute("href","https://www.pole-emploi.fr/accueil/");
}
changeCallToActions()

/*
Modif 3 changeLogoName()
modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
    Change "Album" par "The THP Experience" ;
    Change la taille du texte pour le passer en 2em
*/
function changeLogoName() {
    var logoName = document.querySelectorAll('a.navbar-brand.d-flex.align-items-center>strong')[0];
    logoName.textContent = 'The THP Experience';
    logoName.style.fontSize = '2em';
}
changeLogoName();

/*
Modif 4 populateImages()
    va ajouter, dans chacune des 9 cards, une image dont l'URL est contenue dans l'array suivant 
*/


function populateImages() {

    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
	let boxImages = document.querySelectorAll("img.card-img-top");
    imagesArray.forEach((value, index) => {
		boxImages[index].src = value;
    })
}
populateImages();

/*
Modif 5 deleteLastCards()
    va supprimer les 3 dernières cards via une boucle. 
*/

// function deleteLastCards() {
//     let imagesToDelete = document.querySelectorAll("img.card-img-top");
//     imagesToDelete.childNodes[6];
//     console.log(imagesToDelete)
// }
// deleteLastCards()

function deleteLastCards() {
	for(i = 0; i <= 6; i++) {
		let parent = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
		let child = parent.lastChild;
		parent.removeChild(child);
	}
}

function changeCardsText() {

	let cardText = document.querySelectorAll("p.card-text");
	for(i = 0; i < 3; i++) {
		switch(i){
			case 0: 
			cardText[i].textContent = "L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web"
			break;
			case 1:
			cardText[i].textContent = "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML"
			break;
			case 2:
			cardText[i].textContent = "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."
			break;
		}
	}
}

function changeViewButtons() {
	let parent = document.querySelectorAll("div.btn-group");

	parent.forEach((div, index) => {
		let child = div.firstElementChild;
		child.classList.remove('btn-outline-secondary');
		child.classList.add('btn-success');
	})
}

function changeViewButtonsCaro() {
	let btnGroup = document.getElementsByClassName("btn-group")
	
	for(i = 0; i <= btnGroup.length; i++) {
		btnGroup[i].getElementsByTagName("button")[0].classList.remove('btn-outline-secondary')
		btnGroup[i].getElementsByTagName("button")[0].classList.add('btn-success')
	}
}



function addRow() {

	let row1 = document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[0];
	row1.insertAdjacentHTML('afterend', '<div class="row"></div>');
	row2 =  document.querySelectorAll("div.album")[0].getElementsByClassName("container")[0].getElementsByClassName("row")[1];
	let thirdCard = row1.childNodes[5];
	row2.appendChild(thirdCard);
}