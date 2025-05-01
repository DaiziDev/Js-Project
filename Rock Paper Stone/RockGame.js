

const computerContainerChoice = document.getElementById('computerChoice');
const userContainerChoice = document.getElementById('userChoice');
const resultContainer = document.getElementById('result');

const possibleChoice = document.querySelectorAll('button');
let userChoice
let result
let computerChoice

possibleChoice.forEach(possiblChoice => possiblChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;

    userContainerChoice.innerHTML = `<img src="${userChoice}.png">`;
    generateComputerChoice();
    verification();
}))

function generateComputerChoice(){
    random = Math.floor(Math.random() * 3) + 1;
    if(random === 1){
        computerChoice = "stone";
    }
    if(random === 2){
        computerChoice = "paper"
    }
    if(random === 3){
        computerChoice = "scissors"
    }
    computerContainerChoice.innerHTML = `<img src="${computerChoice}.png">`
}

function verification(){
    let result = " ";

    resultContainer.classList.remove('equal', 'lost', 'win');

    if(userChoice === computerChoice){
        result = "Equal";
        resultContainer.classList.add('equal')
    }
    if(userChoice === "stone" && computerChoice === "paper"){
        result = "Lost";
        resultContainer.classList.add('lost')
    }
    if(userChoice === "paper" && computerChoice === "scissors"){
        result = "Lost";
        resultContainer.classList.add('lost')
    }
    if(userChoice === "scissors" && computerChoice === "stone"){
        result = "Lost";
        resultContainer.classList.add('lost')
    }

    if(userChoice === "paper" && computerChoice === 'stone'){
        result = "Win";
    }
    if(userChoice === "stone" && computerChoice === "scissors"){
        result = "Win";
    }
    if(userChoice === "scissors" && computerChoice === "paper"){
        result = "Win";
    }
    
    resultContainer.innerHTML = result;
}



