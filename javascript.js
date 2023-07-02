
const getUserChoice=userInput=>{
    userInput=userInput.toLowerCase();
    if (userInput === 'rock'|| userInput==='scissors' || userInput==='paper'){
        return userInput
    }else{
        console.log("Error! please type: rock, paper or scissors");
    }
}
console.log(getUserChoice('papepp'));

const arr = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

