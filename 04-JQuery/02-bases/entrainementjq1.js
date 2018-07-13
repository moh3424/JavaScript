// Ce fichier est en jQuery

/*
  Document ready :
  Les deux lignes suivantes ont la même signification : exécuter le code JS après avoir chargé le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page HTML (dans le <head> ou avant la fermeture de <body>).

  $(function(){
		// ici vous mettez tout votre code jQuery	
  });

  Ou encore, autre syntaxe :
  $(document).ready(function(){
		// ici vous mettez tout votre code jQuery
  });

*/

$(function(){  // ce code s'exécutera une fois le document HTML totalement chargé

	//-------------
	// Fonction principale de jQuery, alias $, sélecteur et événement :
	$('#monBouton').click(function(){  // sélectionne la balise #monBouton et au clic appelle la fonction anonyme qui suit :
		$('#carre').hide();  // sélectionne la balise #carre et l'efface
	});


	jQuery('#monBouton').click(function(){  
		jQuery('#carre').hide();  
	});  // en réalité le $ remplace le mot "jQuery" dont il est un alias. Les deux font la même chose : ils créent un OBJET jQuery


	$('#carre').click(function(){  // sélectionne la balise #carre et au clic => sélectionne toutes les balises h3 et les efface (sans écrire de boucle)
		$('h3').hide();
	});

	// Le contraire de hide() c'est show() :
	$('.photo').dblclick(function(){   // sélectionne la balise .photo et au double-clic => sélectionne la balise #carre et l'affiche en 1000 ms (= 1s)
		$('#carre').show(1000);        // hide() et show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
	});


	// Pour alterner hide() et show() automatiquement : toggle()
	$('#interrupteur').click(function(){
		$("#on-off").toggle();
	});


	//---------------------
	// on() équivalent de addEventListener, et son contraire off() :
	$('#monBouton').on('click', function(){
		alert('Déclenchement de la méthode on()');
	});  // on() permet d'associer un événement à un élément comme le ferait addEventListener() en JS "pur". La seule différence entre la syntaxe ligne 22 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créés dynamiquement (= ajoutés par le jQuery).

	$('#monBouton').off('click');  // en ajoutant cette ligne, on dissocie les clics de l'élément #monBouton : les clics précédemment lis au bouton ne fonctionnent plus ! C'est un moyen simple de supprimer un événement.

	

	//---------------------
	// Evénement hover, modifier du CSS depuis jQuery :
	$('#vert').hover(
			function(){
				$('#rouge').css({
					width : '300px',
					'background-color' : 'yellow' 	
				});

			}, 
			function(){
				$('#bleu').css({
					width : '300px',
					'background-color' : 'yellow'	
				});

			}); 

	// L'événement hover est une combinaison de mouseover et mouseout en JS : il possède 2 fonctions anonymes qui s'exécutent l'une quand on entre, l'autre quand on sort de l'élément.
	// La méthode css() permet de modifier des propriétés CSS écrites dans un objet : on les met entre des {} et sont séparées par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes. 

	//------------------------
	// Récupérer ou modifier la valeur d'un input avec val() :
	$('#mdp1').change(function(){
		var texte = $('#mdp1').val();   // val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)  

		$('#mdp2').val(texte);          // val(argument) permet de changer la valeur du champ #mdp2 (setter)

	});



	//------------------------
	// Le mot clé this :
	// this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanément et qu'on a besoin d'en cibler un en particulier :
	$('input').focus(function(){
		$(this).css({ border : '2px solid green' });  // this se réfère à l'input sur lequel je suis en focus précisément, sans sélectionner l'autre
	});

	$('input').blur(function(){
		$(this).css({ border : '' });  // avec la méthode css() je remets la bordure à son état initial (correspondant au srting vide '') de l'input duquel je viens de sortir (= this)
	});


	//---------------------
	// Accéder aux propriétés CSS avec css()  (complément) :
	var position = $('#violet').css('position');

	console.log('La propriété position du div est : ' + position);  // la méthode css() avec seulement une propriété sous forme de string en argument est un getter : elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles)


	//---------------------
	// Accéder aux attributs des balises avec attr() :
	if ( $('.modifAlt').attr('alt') == '' ) { // attr() avec un seul argument est un getter : il permet de récupérer la valeur de l'attribut précisé (ici de alt)
			$('.modifAlt').attr('alt', 'paysage');  // attr() avec deux arguments est un setter : il permet d'attribuer une valeur à un attribut : attr('attribut', 'valeur').
	}


	//--------------------
	// Modifier le contenu d'une balise avec text() ou html() :
	// html() équivaut à innerHTML :
	$('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>');  // les balises HTML sont interprétées et donc insérées dans le code HTML. La méthode eq() permet de cibler l'élément dont l'indice est spécifié dans les (), ici la première .texte

	// text() équivaut à textContent :
	$('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode text()</span>'); // dans la méthode text() tout est considéré comme du texte brut, y compris les éventuelles balises

	// Note : text() et html() sans argument sont des getters : ils récupèrent le contenu de la balise sélectionnée.


	//-------------------
	// Ajouter ou retirer une classe (définie dans le CSS) à un élément :
	$('#survol').mouseenter(function(){
		$(this).addClass('rouge');  // ajoute la classe "rouge" (prévue dans le CSS) à l'élément
	});

	$('#survol').mouseleave(function(){
		$(this).removeClass('rouge'); // retire la classe "rouge" de l'élément
	});

	$('#classBleu').click(function(){
		$('#survol').toggleClass('bleu');  // alterne addClass() et removeClass() sur l'élément #survol (différent du bouton #classBleu : on n'utilise donc pas $(this) !)
	});

	
	//------------------------
	// Parcourir les éléments sélectionnées avec une boucle each() :
	$('h4').each(function(indice){  // each() parcourt tous les <h4> et exécute la fonction pour chacun (= each) d'entre-eux. Cette fonction possède un paramètre (= indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve

		$(this).text('Ce <h4> a pour indice le numéro ' + indice);  // ajoute le texte au <h4> sur lequel on se trouve précisément à chaque tour de boucle (= $(this))

		// on ajoute la classe "rouge" aux h4 d'indice pair :
		if ( indice % 2 == 0 ) {  // signifie que indice est pair : on ajoute donc la classe "rouge" à chaque élément d'indice pair
			$(this).addClass('rouge');
		}

	});


	//------------------
	// Les pseudo-sélecteurs spécifiques à jQuery :first, :last, :visible et :hidden :

	// :visible et :hidden :
	$('#afficher').click(function(){
		$('#galerie img:hidden').css({ opacity : 0.2 });   // sélectionne les images cachées et leur met une opacité de 0.2.
		$('#galerie img').show();  // puis on affiche toutes les images (pour voir le résultat)
	});


	$('#effacer').click(function(){
		$('#galerie img').hide();
	});


	// :first et :last :
	$('#afficher-premier').click(function(){
		$('#galerie img:first').show();  // sélectionne la première image et l'affiche. Marche aussi avec :last pour la dernière. Si vous vous voulez cibler une image au milieu, utilisez la méthode eq().

		// On peut combiner les pseudos-sélecteurs :
		console.log($('#galerie img:hidden:first').attr('src'));  // on combine :hidden:first pour afficher la source de la première image cachée. Attention à l'ordre, :hidden d'abord puis :first
		

	});



});   // fin du document ready (à ne pas supprimer)

