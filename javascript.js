



const getComputerChoice=()=>{
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}



const determineWinner=(playerSelection,computerSelection)=>{
    if (playerSelection===computerSelection){
        return "It is a draw!";
    }if(playerSelection==='rock'){
        if(computerSelection==='paper'){
            return "You lose!Paper beats Rock";
        }else{
            return "You Won! Rock beats Scissors";
        }
    }if (playerSelection==='paper'){
        if(computerSelection==='scissors'){
            return "You lose! Scissors beats Paper";
        }else{
            return "You win! Paper beats Rock";
        }
    }if (playerSelection==='scissors'){
        if(computerSelection==='rock'){
            return "You lose! Rock beats Scissors";
        }else{
            return "You win! Scissors beat Paper";
        }
    }
}
function getUserChoice(){
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");

    rock.addEventListener('click',e => {
        console.log('rock')
    })
    paper.addEventListener('click',e => {
        console.log('paper')
    })
    scissors.addEventListener('click',e => {
        console.log('scissors')
    })
}

const playGame=()=>{
    const playerSelection=getUserChoice('');
    const computerSelection=getComputerChoice();
    console.log ('You threw: '+ playerSelection);
    console.log ('Computer threw: '+ computerSelection);
    console.log (determineWinner(playerSelection,computerSelection));
}

playGame();




/*const getUserChoice = () => {
    let userInput = window.prompt('What is your choice');
    let userChoice = userInput.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper') {
        return userChoice;
    } else {
        console.log("Error! Please type: rock, paper, or scissors");
        return null; // Return a default value for invalid input
    }
};*/
