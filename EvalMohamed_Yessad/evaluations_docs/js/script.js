$(function(){
  
    var Choix = $('#choixChat').val();
  
    var area = $('#raisonDadop').val();   
         //1- On vérifie tous les champs quand on clique sur "s'inscrire" :
         $('form').submit(function(event){
             // submit se déclenche quand on soumet un formulaire avec l'input type "submit"
  
             var erreur = false; // pour dire qu'il n'y a pas d'erreur au début.
  
             //On vérifie le champ addresse :
  
             if(area == ''){
                 // la proprièté value permet d'accéder à la valeur saisie par l'internaute dans l'input 
                 $('#raisonDadop').addClass('form-control-success').removeClass('form-control');
                  erreur =true; // On passe la variable à true pour dir qu'il y a une erreur
             } else{
                 // On est dans le else quand l'@ est la valeur de l'input :
                 $('#raisonDadop').addClass('green').removeClass('form-control');
             }
             // On verifie si le champs est vide  :
             if (Choix == ''){
                 // si  la valeur du champ  est vide :
                 $('.form-control').addClass('form-control-success').removeClass('form-control');
                 erreur = true; // pour spécifier qu'il y a une erreur
  
             }else {
                 //
                $('.form-control').addClass('green').removeClass('form-control');
             }
             
             // Enfin, s'il y a une erreur (erreur vaut true), on bloque le formulaire et on met un message à l'intérnaute :
              if (erreur === true){
                  // Bloque le submit :
              event.preventDefault(); //bloque l'envoi du formulaire. Cette méthode permet de bloquer l'action par défaut d'un événement : bloquer un lien, l'envoi d'un formulaire, la coche d'une checkbox, etc.
              $('.group-form').html('Veuillez vérifier vos saisies !');
              }else {
              //   event.preventDefault();
  
                // 1er méthode
                //--------------
                // document.querySelector('#message').textContent = 'Votre commande a bien été valider !';
                // var targetElement = document.querySelector(".cacherForm");
                // targetElement.style.display = "none";
  
                 // 2em méthode
                 $('.group-form').html('Votre commande a bien été valider !') ;
                 $('.group-form').addClass('form-control-success');
              }
         });// fin du submit
  
         choix.change(function(){
             $(this).removeClass('green red');
         });
         area.change(function(){
             $(this).removeClass('green red');
         });
         
       
  
       });
          
  
 

  
  
  
  
  
  
  
  
  
  });// fin du document ready