// LES ANIMATIONS jQuery

$(function(){

// Déclaration d'une fonction callback qui annonce la fin d'une animation (on s'en servira plis loin):

function finAnim() {
    alert('Animation finie !');
}

//----------------------
// les animation FADE : fadeIn(), fadeOut, fadeToggle() et fadeTo :

$('#fadein').click(function(){
    $('#rouge').fadeIn(); // fait apparaitre un élément en fondu (en jouant sur l'opacité) pendant la durée spécifiée en ms. Sans argument, jQuery  prend une valeur par défaut.
    $('#bleu').fadeIn(2000);// meme effet en 2s
    $('#vert').fadeIn(1000).delay(1000).fadeOut(1000, finAnim);// on peut enchainer les animation les unes à la suite des autres. On appelle la fonction callback finAnim à la fin du fadeOut(). Attention: pas de () sinon elle s'éxécute sans attendre l'ordre du fadeOut
});
// Au clic sur le bouton #fadeout, l'image #imageDisp disparait en fondu en 1s

$('#fadeout').click(function(){
    $('#imageDisp').fadeOut(1000);
});

// Au clic sur le bouton #fadeIn() et fadeOut()
$('#interr').click(function(){
    $('#black').fadeToggle(1000);  // altern fadeIn() et fadeOut() en 1s
});

// fadeTo() :
$('#exo1').click(function(){
    $('#orange').fadeTo(2000, 0.2);
    $('#violet').fadeTo(2000, 0.8); // fait une transition jusqu'à l'opacité indiquée en 2s
});

//-----------------------
//les animation SLIDE : slideDown(), slideUp() et slideToggle() :
$('#barre').click(function(){
    /* $('#rideau').slideDown(1000); */ // fait apparaitre l'élément avec un mouvement de un mouvement de glissement vers le bas. Pour allez vers le haut : slideUp().
    $('#rideau').stop().slideToggle(1000); // stop() permet d'arreter une animation en cours lorsqu'on reclique avant son exécution totale (sinon les animations s'exécutent autant de fois que de clics), et enchaine sur l'animation suivante.
});

//----------------------
// Les animations ANIMATE :
//Les animations de type "animate" agissent sur les propriétés CSS numériques telles que le positionnement top, left, right, bottom, ou encore les tailles, l'opacité, etc. Comm par défaut les éléments HTML ont une position "static" en CSS nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir les déplacer avec animate().

// Animation 1 : une animation simple :
$('#anim1').click(function(){
    $('#un').animate({top : '-200px'},1000); // les propriétés CSS se mettent dans un objet entre accolades (et entre guillemets si elles contiennent un tiret). -200px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on n'est pas obligé de préciser "px" car c'est l'unité par défaut
});

// Animation 2 : 2 propriétés CSS dabs la meme animation :
$('#anim2').click(function(){
    $('#deux').animate({top : '-150px', left : '100px'}, {duration :1000, easing : 'linear'});// on obtient une diagonale entre la position d'origine et la position finale : -150px et 100px sont par rapport à la position d'origine (ou easing : 'swing'). On peut mettre les options de l'annimation dans un second objet entre des {}. "duration = durée en ms ou "swing" dans la version de base de jQuery, sinon utiliser une bibliothèque complémentaire
});

//Animation 3 : 2 animation consécutives :
$('#anim3').click(function(){
    $('#trois').animate({top : '+=100px', left: '+=100px'}, 1000)
               .animate({top : '-=100px', left: '+=100px'}, 1000) ;
});

// Animation 4 : une animation continue :
function anim4(){
    $('#quatre').animate({left : '400px' }, 3000)
                .animate({left : '0px'}, 3000, anim4);// ou bien left : "-=400px" , 0px signifie 0 parrapopsrt à la position d'origine; On peut mettre une fonction complètement terminée. Ainsi, ici on appelle la fonction elle-meme à chaque fin d'animation.
}
$("#anim4").click(anim4);// on appelle la fonction anim4 lors du clic sur le bouton. Pas de () à celle-ci pour qu'elle attende l'ordre du click.



});// fin function ready