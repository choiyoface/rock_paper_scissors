



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
const getUserChoice = () => {
    let userInput = window.prompt('What is your choice');
    let userChoice = userInput.toLowerCase();
    if (userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper') {
        return userChoice;
    } else {
        console.log("Error! Please type: rock, paper, or scissors");
        return null; // Return a default value for invalid input
    }
};


/*const getUserChoice = userInput =>{
    userInput = window.prompt('What is your choice');
    userChoice=userInput.toLowerCase();
    if (userChoice === 'rock'|| userChoice==='scissors' || userChoice==='paper'){
        return userChoice
    }else{
        console.log("Error! please type: rock, paper or scissors");
    }
}*/

const playGame=()=>{
    const playerSelection=getUserChoice('');
    //cont playerSelection=window.promt('What is your choice')
    const computerSelection=getComputerChoice();
    console.log ('You threw: '+ playerSelection);
    console.log ('Computer threw: '+ computerSelection);
    console.log (determineWinner(playerSelection,computerSelection));
}

playGame();
