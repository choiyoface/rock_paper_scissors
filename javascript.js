

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const finalScore = document.querySelector(".final-score");
const playScreen = document.querySelector(".playScreen");

let playerSelection
let computerSelection
let result;
let pScore = 0;
let cScore = 0;
let finalWinner;

//when Btn is clicked
choiceBtn.forEach(button => button.addEventListener("click", ()=> {
    playerSelection = button.textContent;
    getComputerChoice();
    playerText.textContent = `${playerSelection}`;
    computerText.textContent = `${computerSelection}`;
    resultText.textContent = determineWinner();
    
}));


//add and reset score
const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;

    if (pScore === 5 || cScore === 5){
        fadeInAndOut();
        finalResult();
        resetSCore();
        return;
    }

};

function fadeInAndOut(){
    playScreen.classList.add("fadeOut");
    finalScore.classList.add("fadeIn");
}

function finalResult(){
    if (pScore > cScore){
        finalScore.textContent = `Final Winner is You`
    }else{
        finalScore.textContent = `Final Winner is Computer`
    }
};

function resetSCore(){
    pScore = 0;
    cScore = 0;
};

//determine which is the winner
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

//random choice for computer
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