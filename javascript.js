
const getUserChoice=userInput=>{
    userInput=userInput.toLowerCase();
    if (userInput === 'rock'|| userInput==='scissors' || userInput==='paper'){
        return userInput
    }else{
        console.log("Error! please type: rock, paper or scissors");
    }
}


const arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
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

const playGame=()=>{
    const playerSelection=getUserChoice('paper');
    const computerSelection=getComputerChoice();
    console.log ('You threw: '+ playerSelection);
    console.log ('Computer threw: '+ computerSelection);
    console.log (determineWinner(playerSelection,computerSelection));
}
playGame()


