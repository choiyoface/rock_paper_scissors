

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");

let playerSelection
let computerSelection
let result;


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




function determineWinner(playerSelection,computerSelection){
    if (playerSelection===computerSelection){
        return "It is a draw!";
    }
    else if(computerSelection=='Rock'){
        return(playerSelection == "Paper") ? "You Win" : "You Lose";
    }
    else if(computerSelection=='Paper'){
        return(playerSelection == "Scissors") ? "You Win" : "You Lose";
    }
    else if(computerSelection=='Scissors'){
        return(playerSelection == "Rock") ? "You Win" : "You Lose";
    }
        
}



/*function getUserChoice(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener('click',e => {
        playGame('rock')
    })
    paper.addEventListener('click',e => {
        playGame('paper')
    })
    scissors.addEventListener('click',e => {
        playGame('scissors')
    })
}




const playGame=(playerSelection)=>{
    const computerSelection = getComputerChoice();
    console.log ('You threw: '+ playerSelection);
    console.log ('Computer threw: '+ computerSelection);
    console.log (determineWinner(playerSelection,computerSelection));
}


getUserChoice();*/




