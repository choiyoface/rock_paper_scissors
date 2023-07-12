

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let playerSelection
let computerSelection
let result;
let pScore = 0;
let cScore = 0;


choiceBtn.forEach(button => button.addEventListener("click", ()=> {
    playerSelection = button.textContent;
    getComputerChoice();
    playerText.textContent = `Player: ${playerSelection}`;
    computerText.textContent = `Computer: ${computerSelection}`;
    resultText.textContent = determineWinner();
    
}))


const getComputerChoice=()=>{
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            computerSelection = 'Rock';
            break;
        case 1:
            computerSelection ='Paper';
            break;
        case 2:
            computerSelection = 'Scissors';
            break;
    }
}


const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

}

function determineWinner(){
    if (playerSelection===computerSelection){
        return "It is a draw!";
    }
    if(computerSelection=='Rock'){
        if(playerSelection == "Paper") {
        pScore+=1;
        updateScore();
        return "You Win"; 
        
      }else {
        cScore+=1;
        updateScore()
        return "You Lose";
        
    }}
    if(computerSelection=='Paper'){
        if(playerSelection == "Scissors"){
        pScore+=1;
        updateScore();
        return "You Win"; 
        
      }else {
        cScore+=1;
        updateScore();
        return "You Lose";
        
    }}
    if(computerSelection=='Scissors'){
        if(playerSelection == "Rock"){
        pScore+=1;
        updateScore();
        return "You Win"; 
        
      }else {
        cScore+=1;
        updateScore();
        return "You Lose";
        
    }}
     
}


