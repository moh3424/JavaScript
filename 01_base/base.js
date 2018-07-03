// -------------------
// 1- Commentaire
// ------------------

// pour écrire un commentaire sur une seul ligne
/**
 * pour ecrire les 
 * commentaires sur
 * plusieurs lignes
 */

// -------------------
// 2- Affichage
// ------------------

document.write('mon premier message');/* affichage dans le navigateur */
document.write('<h1>2- Affichage</h1>'); //on peut mettre des balises HTML, elles sont interprétées et donc insérées donc insérées dans le HTML
//Toutes les instrictions en JS se finissent par un ";". Elles se suivent et sont effectuées les une à la suite des autres, du Haut vers le Bas du script

//------------
//Les boites dialogue
// alert('salut');//affiche un message
// confirm('Etes-vous sûr ?'); //message avec boutons de confirmation "ok" ou "annuler"
// prompt('Quel est votre code postal ?'); //message avec un champ à remplir

//-----------
// Afficher dans la console:
console.log('Attention aux erreurs de syntaxes dans la console'); // message écrit dans la console de debugage (F12 + onglet Console)

// -------------------
// 3- Variables - Déclaration - Affectation
// ------------------
document.write('<h2>3- Variables - Déclaration - Affectation</h2>');
//Définition : une variable est un espace mémoire nomé dans lequel nous allos stocker une donnée, une valeur. Cette données peut etre de n'importe quel type : chifre, chaine de caractere, une balise HTML, etc.

// Déclaration d'une variable :
var maBoite;   // le mot clé var permet de déclarer (=créer) la variable nommée maBoite.

// Régle de nommage des variables: caractères acceptés : a à z, A à Z, 0 à 9 (jamais au début), _(jamais au debut ni à la fin). puis majuscule à la 1ère lettre de chaque mot.

//-----------
// Affectation d'une variable :
maBoite = 10; // On affect une valeur à une variable avec le signe "=". ma boite contient donc 10

document.write("montant :",maBoite); // on affiche le contenu de la variable en ne mettant pas de quote autour de son nom. Affiche 10

var maBoite = 10; // On peut déclarer et affecter une variable en meme temps (nous retiendrons cette écriture)

//----------
monAutreBoite =  'bonjour'; // Cette écriture est possible (déclaration sans le mot clé var), mais n'est pas conventionnel. De plus, dans une fonction cela na pas la meme signification (voir chapitre "portée des variables")

document.write('<br>');

//--------------
//Déclarer et affecter plusieurs variables en meme temp:
var prenom = 'Mohamed',
    nom = 'Yessad',
    genre = "féminin"; // un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un ";"

document.write(prenom); // Affiche Mohamed

document.write('<br>');

//-------------
// Changer la valeur d'une variable

prenom = 'Pierre';

document.write(prenom); // Nous changeons la valeur initiale "Mohamed"  pour la remplcer Pierre

document.write('<br>');

document.write(prenom); // affiche Pierre

document.write('<br>');

prenom = nom; // Nous affectons la valeur de la variable nom à la variable prenom, autrement on remplace "Mohamed" "par Pierre"

//----------
// Ajout une valeur à la valeur déja existante d'une variable
var fruit = 'pomme';
fruit += ' fraise'; // On ajoute la chaine de caractères "fraise" à "pomme" déja existante dans la variable fruit avec l'opérateur += (sans espace)

document.write(fruit); // affiche "pomme fraise"
document.write('<br>');

//--------------
// Utiliser prompt avec une variable :

// var codePostal = prompt('Quel est votre code postal ?');

// document.write(codePostal);// Affiche le code postal indiqué par l'internaute
// document.write('<br>');

// -------------------
// 4- Type de données
// ------------------
document.write('<h2>4- Type de données</h2>');

//Nous commençon par les 3 Principaux Types  de données dits primitifs:

//Les types numériques appelés NUMBER:
var chiffre = 20; // Les numbers s'écrivent sans quotes ni guillemets
// Tous les types numériques sont possibles : entiers déciment, positifs, négatifs ....

// Les chaines de caractères appelés STRING :
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractère d\'échappement pour les apostrophe dans des cotes '; // AltGr + 8 pour le caractère d'échappement
// Les quotes ou les guillemets indiquent qu'il s'agit d'un type STRING.

var numero = '10'; //un chiffre dans des quotes ou des guillemets est interprété comme un STRING



// Le type boolean ou booléen
// Type boolean prend que deux valeur: TRUE ou FALSE
var choix = true; // s'écrit SANS quote

//--------
// Typeof permet de vérifier le type d'une variable :
document.write(typeof(chiffre));
document.write('<br>');

document.write(typeof(texte));
document.write('<br>');

document.write(typeof(numero));
document.write('<br>');

document.write(typeof(choix));
document.write('<br>');

// -------------------
// 5- Constantes
// -------------------
document.write('<h2>5- Constantes</h2>');

// Définition : Les constante sont des variables dont la valeur NE PEUT PAS étre modifiée. Elles permettent de "protèger" cette valeur nécessaire au bon fonctionnement du script.

const CHANGE_PAS = 'ma constante imposible à modifier'; // Par convention entre développeurs on écrit les constatntes en majuscules et evec un "_" si besoin

document.write(CHANGE_PAS); // Affiche le contenu de la constante
document.write('<br>');

// CHANGE_PAS = "autre valeur"; // erreur bloqante de type invalid assignment to const CHANGE_PAS

// -------------------
// 6- Concaténation
// -------------------
document.write('<h2>6- Concaténation</h2>');

// En JS, on fait suivre des variables et des strings avec le symboles "+". On parle de concaténation.

var prenom = "Bruce",
    nom = "Wayne";

document.write(prenom + '' +nom+ '<br>'); /* concatène la variable prenom avec un espace avec la variable nom avec une balise  <br> */

var personnage = prenom + '' +nom+ '<br>'; //On peut concaténer des éléments au sein d'une variable 
document.write(personnage);

// --------------------------
// 7- Opérateur arithmétiques
// --------------------------
document.write('<h2>7- Opérateur arithmétiques</h2>');

var resultat;

resultat = 10 + 5; // addition
resultat = 10 - 5; // soustraction
resultat = 10 * 5; // multiplication
resultat = 10 / 5; //division
resultat = 3 % 2;  // modulo = reste de la division entière.

//---------
// On peut appliquer les opérateurs aux variables

var chiffre1 = 10;
    chiffre2 = 5;

resultat = chiffre1 + chiffre2; // resultat vaut 15

var chiffre3 = 10;
chiffre3 = chiffre3 + 5; // 15
chiffre3 = chiffre3 + 5; // 20. Mais cette syntaxe n'est pas conventionnelle. on utilise la syntaxe suivante :
chiffre3 += 5;  // cette syntaxs fait la meme chose due la précédente, mais c'est elle que 'on retiendra. chiffre3 vaut ici 25.

// fonctionne avec tous les opérateurs: +=, -=, *=, /= et %=.

//-----------
// Incrémenter et Décrémenter
var i = 0;
i++; // Incrémenter i de +1. i vaut donc 1 :
i--; // décrémenter i de -1. i vaut donc 0

// i++ et ++i ont le meme résultat à la différence près :
// i++ retourne la valeur de i AVANT d'effectuer l'opération
//++i retourne la valeur de i APRES avoir effectué l'opération

var x  = 5;
    y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut '+ y); // 5
document.write('x vaut '+ x); // 6

x = 5;
var z = ++x; // x passe à 6 PUIS z prend la valeur de 6

document.write('z vaut :' + z); // 6
document.write('x vaut :' + x); //6
document.write('<br>');document.write('<br>');

//-------------
//----Exercice :---------
/**
 * L'internaute à acheté 0.8kg de pommes et 0.7kg de poirs.
 * vous déclarez 4 variables, une qui contient "pomme", une qui contient "poires", une qui contient le poids des pommes et une qui contien le poids des poires.
 * puis vous affichez la phrase "Vous avez acheté des pommes et des poires pour un poids total de 1.5kg."  ou les fruits et le poids total sont remplacés par les variables
 */

 var fruit1 = prompt("Entrez votre premier fruits "),
     Poidsfruit1 = parseFloat(prompt('Entrez le poids du premier fruits ')), 
     fruit2 = prompt('Entrez votre deuxieme fruits '),
     Poidsfruit2 = parseFloat(prompt('Entrez le poids du deuxieme fruits ')),
     totalPoids = Poidsfruit1 + Poidsfruit2;

document.write('<p>Vous avez acheté des ' + '<em><mark>'+ fruit1 +'</mark></em>'+ ' et des '+'<em><mark>'+ fruit2 +'</mark></em>'+ '  pour un poids total de :'+ totalPoids + ' <strong>Kg.</strong><p>');

// --------------------------
// 8- Conditions
// --------------------------
document.write('<h2>8- Conditions</h2>');

var a = 10,
    b = 5,
    c = 2;

//--------------
// La condition if/ else:
if (a > b) {
    //si la condition est évaluée a true, on entre dans les accolades qui suivent
    document.write('<p>a est superieur à b </p>')
} else {
    // sinon ... si la condition est évaluée a false, on exécute le else :
    document.write('<p>b est supérieur à a</p>')
}

//---------
// if avec AND :
if(a > b && b>c){
    // Si a est supérier à b et que au meme temps b est supérieur à c, on entre dans les accolades suivent
    document.write('<p>Ok pour les 2 condition</p>');
}

//---------
// if avec OR :
if ( a == 9 || b > c) {
    // Si a est égale (==)à 9 ou b supérieur à c, on entre dans les accolades
    document.write('<p>Ok pour au moins une des deux conditions</p>');
}

//---------
//  if...else if.....else
if (a == 8) {
    //Si a vaut 8, on exécute ce qui suit :
    document.write("<p> à est égale a 8</p>");
} else if (a != 10 ) {
    //Sinon si a est différent de 10, on exécute ce qui suit:
    document.write('<p> a est différent de 10</p>');
} else {
     //Sinon, c'est que je ne suis tombé ni dans le if, ni dans le else if, je me trouve donc dans ce else
    document.write("<p> les deux conditions sont fausses</p>");
}

// Note : jamais de () un else. le else n'est pas obligatoire si il est vide. En revanche, après un if il ya toujours une condition.

// L'opérateur NOT :
//l'opérateur NOT qui s'écrit "!" permet d'inverser quelque chose de TRUE en FALSE, ou quelque chose de FALSE en TRUE. il s'agit d'une négation.

var test = 3 < 1;
console.log('test vaut :' + test);

if (!test) {
    // Le "!" est une négation qui inverse le sens du booléen : test seul valant false, !test vaut donc true. la condition finale étant donc évaluée à true, on entre dans les accolades
    document.write('<p>On exécute ce code ...</p>');
}

// Conclusion : les instructions d'une condition seront toujours exécutées que si la condition renvoie TRUE

//------------
// La comparaison avec le triple "===" :
var varA = 1; // number
    varB = '1'; // string

if (varA == varB) {
    // varA et varB valent tous les deux 1 en valeur : la condition avec "==" et donc vraie. On exécute les accolades qui suivent :
    document.write('Egalité en valeur uniquement <br>');
} else {
    document.write('Différence en valeur uniquement<br>');
}

if (varA === varB) {
    // comparaison en valeur ET en type avec le triple"===". Ici nous avons un string et un number, il n'y a donc pas strict égalité entre les 2 variables : On va dans le else
    document.write('Egalité en valeur ET en type<br>');
} else {
    
    document.write('Différence en valeur OU en type<br>')
}


//--------------
//-------Exercice-------
/*
demandez l'age de l'internaute dans un prompt.
si la reponse est vide (on compare avec des quotes vides SANS espace, 
    on affiche ""Vous n'avez pas répondu.
    si la réponse n'est pas un nombre, on affiche "Vous n'avez pas indiqué un monbre."
    Si la réponse est correcte, on affiche "Vous avez indiqué avoir X ans." ou X est l'age donné par l'internaute*/

var age = prompt('Quel est votre age ?');

if (age ==''){
    document.write('Vous n\'avez pas répondu');
 } else if ( isNaN( age ) ){
    document.write('Vous n\'avez pas indiqué un nombre');
 } else if (parseInt(age) <18) {
    document.write('Vous etes Mineur ' + age +' ans ');
 } else {
     document.write('vous etes Majeur ' +age+ ' ans');
 }

 //-----------
 // 9- Synthèse des opérateurs
 //-------------
 document.write('<h2> 9- Synthèse des opérateurs</h2>');
 
 // Pour tester des varibales entre-elles:

/*
   == pour égal valeur
   != pour diférent de en valeur    === strictement égal
   !== strictement différent en valeur OU en type    > supérieur
   < inferieur
   >= supérieur ou égal

   <= inférieur ou égal */// Les opérateurs logiques :

/*
   && AND
   || OR

   ! NOT (négation)    Les opérations éffectuées avec les opérateurs logiques ne donnent que 2 résultats possibles : TRUE ou FALSE.    Exemples :

       true && true  => true
       true && false => false
       true || false => true
       false|| false => false 
       false && => false       
       !TRUE => false
       !FALSE=> true
*/


//---------------------
// 10- Condition Switch
//-----------------------
 document.write('<h2>10- Condition Switch</h2>');

 // la condition switch est une autre syntaxe pour écrire une condition if..else if ...else, lorsque l'on veut comparer une variable à une multidude de valeurs.

 var couleur = prompt('Entrez votre Couleur préférée : -bleu, -rose, -vert ,-violet, -maron');

 switch (couleur) {
    case 'bleu' :
        document.write('<p>Vous aimez le bleu</p>');
    break;
    case 'rose' :
        document.write('<p>Vous aimez le rouge</p>');
    break;
    case 'vert' :
        document.write('<p>Vous aimez le vert</p>');
    break;
    case 'maron' :
        document.write('<p>Vous aimez le maron</p>');
    break;
    case 'violet' :
        document.write('<p>Vous aimez le violet</p>');
    break;
    default :
        document.write('<p>Vous n\'aimez auaucune de ces couleurs</p>');
}

 //---------------------
 // 11- Les Boucles
 //---------------------
 document.write('<h2> 11- Les Boucles</h2>');

 // les boucles sont destinées a répéter des lihnes de codes de façon automatique.

 // while : 
 var i = 0; // on initialise une variable à 0 pour compter le nombre de tours de boucle

 while ( i <= 5 ) {// ici entre parenthèse se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égale à 5"
    document.write(i + '---');
    // ..... du code .....
    //..... du code .....
    i++;// On incrémente i de +1. On n'oublie pas d'incrémenter pour ne pas créer une boucle infinie
 }
 document.write('<br>');document.write('<br>');
 // Exercice : sans modifier la condition la boucle while précédente, vous la compléter pour ne pa afficher les "---"

 // 2eme Méthode
 document.write('<h2> 1er Méthode</h2>');
 var i = 0; // on initialise une variable à 0 pour compter le nombre de tours de boucle

 while ( i <= 5 ) {// ici entre parenthèse se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égale à 5"

 if (i == 5){
    document.write(i + '');
 } else {
    document.write(i + '---');
 }
    i++;
 }

 // 2eme Méthode
 document.write('<h2>2eme Méthode</h2>');
 var i = 0;
 while ( i <= 5 ) {// ici entre parenthèse se situe la condition d'entrée dans la boucle while. Elle signifie "tant que i est inférieur ou égale à 5"
switch (i) {
    case 5 :
        document.write(i + '');
        break;
    default :
        document.write(i + '---');
    }
i++;
}

//--------------
// - La Boucle For
document.write('<br>');document.write('<br>');

for (i = 0; i <= 5; i++);{// On met dans les () du for : initialisation de la variable ou bien du compteur suivie d'un ";", puis la condition d'entrée dans la boucle suivie d'un ";", puis l'incrémentation ou décrémentation
    document.write(i + '---');
    // suite du code
}















