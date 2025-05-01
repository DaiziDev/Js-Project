var perso = document.querySelector(".perso");
var jumpBtn = document.getElementById('jump')
var obstacle = document.querySelector('.obstacle');
var scoreResult = document.getElementsByClassName('score');
var score = 0;


function animationSpeed(){
    if(score > 50){
        obstacle.style.animationDuration = '1.5s'
        obstacle.style.backgroundColor = '#A1770D'
    }
    if(score > 100){
        obstacle.style.animationDuration = '1.0s'
        obstacle.style.backgroundColor = '#0179D6'
    }
    if(score > 150){
        obstacle.style.animationDuration ='0.5s'
        obstacle.style.backgroundColor = 'red'
    }
}

function jump(){

    if(perso.classList != "animation"){
        perso.classList.add('animation');

        setTimeout(function(){
            perso.classList.remove('animation');
        },500)
        score += 5;
        scoreResult[0].innerHTML = score;
        animationSpeed()
    }
}

jumpBtn.addEventListener('click', jump);
document.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        jump()
    }
    else{
        alert('The only key you can use to jump is enter')
    }
})

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue('top'));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))

    if(obstacleLeft < 20 && obstacleLeft > 0 && persoTop >= 130){
        obstacle.style.animation = "none";
        scoreResult[0].innerHTML = score;
        alert("Vous avez perdu. Votre score est :" + " " + score)
    }
},1)