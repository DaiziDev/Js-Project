

var number1 = document.querySelector('.nb1');
var number2 = document.querySelector('.nb2');
var operations = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur = 0;

//Nombres Aleatoires debut du jeu
random1 = Math.random()*11 << 0;//Gener des nombres entre 0 et 11
random2 = Math.random()*11 << 0;//Pour genere des nombres entre 0 et 11
console.log(random1);
console.log(random2);
//Inserer les nombres au hazard dans les variables number
number1.innerHTML = random1;
number2.innerHTML = random2;

//function de verificationn massa ==============


function verifier(){
    //Recupere le resultat entre par le jouer
    var res = document.querySelector('.res').value;
    if(random1 + random2 == res){
        message.style.background = "green";
        message.innerHTML = "Correcte."

        random1 = Math.random()*11 << 0;//Gener des nombres entre 0 et 11
        random2 = Math.random()*11 << 0;//Pour genere des nombres entre 0 et 11
        console.log(random1);
        console.log(random2);
        //Inserer les nombres au hazard dans les variables number
        number1.innerHTML = random1;
        number2.innerHTML = random2;

        compteur = compteur + 1;

    }
    else{
        message.style.background = "red";
        message.innerHTML = "Vous avez perdu."
        section.innerHTML=" ";
        score.innerHTML = `<span>${compteur}</span></br> score`;
        link.style.display = "block"
    }
}
