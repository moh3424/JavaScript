// $(function(){
  
//     var Choix = $('#name').val();
  
//     var area = $('#texte').val();   
//          //1- On vérifie tous les champs quand on clique sur "s'inscrire" :
//          $('form').submit(function(event){
//              // submit se déclenche quand on soumet un formulaire avec l'input type "submit"

//              var erreur = false; // pour dire qu'il n'y a pas d'erreur au début.
//                 event.preventDefault();
//              //On vérifie le champ addresse :
  
//              if(area == ''){
//                  // la proprièté value permet d'accéder à la valeur saisie par l'internaute dans l'input 
//                  $('#texte').addClass('red').removeClass('form-control');
//                   erreur =true; // On passe la variable à true pour dir qu'il y a une erreur
//              } else{
                
//                  $('#texte').addClass('green').removeClass('form-control');
//              }
//              // On verifie si le champs est vide  :
//              if (Choix == ''){
//                  // si  la valeur du champ  est vide :
//                  $('#name').addClass('red').removeClass('form-control');
//                  erreur = true; // pour spécifier qu'il y a une erreur
  
//              }else {
//                  //
//                 $('#name').addClass('green').removeClass('form-control');
//              }
             
//              // Enfin, s'il y a une erreur (erreur vaut true), on bloque le formulaire et on met un message à l'intérnaute :
//               if (erreur === true){
//                   // Bloque le submit :
//               event.preventDefault(); //bloque l'envoi du formulaire. Cette méthode permet de bloquer l'action par défaut d'un événement : bloquer un lien, l'envoi d'un formulaire, la coche d'une checkbox, etc.
//               $('form').html('Veuillez vérifier vos saisies !');
//               }else {
//               //   event.preventDefault();
  
//                 // 1er méthode
//                 //--------------
//                 // document.querySelector('#message').textContent = 'Votre commande a bien été valider !';
//                 // var targetElement = document.querySelector(".cacherForm");
//                 // targetElement.style.display = "none";
  
//                  // 2em méthode
//                  $('form').html('Votre commande a bien été valider !') ;
//                  $('form').addClass('green');
//               }
//          });// fin du submit
  
//          choix.change(function(){
//              $(this).removeClass('green red');
//          });
//          area.change(function(){
//              $(this).removeClass('green red');
//          });
         
       
  
//        });

//   });// fin du document ready

$(function(){
    var choix = $('#name');
    var raison = $('#texte');
    var erreur = false;
    $('form').submit(function(event){
        // var erreur = false;
        if(choix.val() === ''){
            choix.addClass('red');
            erreur = true;
        } else {
            choix.addClass('green');
        }
        
        if(raison.val() === '') {
            raison.addClass('red');
            erreur = true;
        } else {
            raison.addClass('green');
        }
        if (erreur === false){
            
            
            $('form').html('Votre choix est bien pris on compt'); 
            event.preventDefault();
        }else {

            $('#message').html('Veuillez vérifier votre saisie');
            event.preventDefault();
        }
    });/* fin submit */
    choix.on('change', function(){
            $(this).removeClass('red green')
        });
        raison.on('change', function(){
            $(this).removeClass('red green')
        });
    $('.tete').mousedown(function(){
        $(this).addClass('colorFooter');
    });
    $('.tete').mouseup(function(){
        $(this).removeClass('colorFooter');
    });
    





});/* fin documen ready */