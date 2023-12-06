//Game functions
let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
    }
 
function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if((playerSelection == "rock" && computerSelection == "paper")
       || (playerSelection == "paper" && computerSelection == "scissors")
       || (playerSelection == "scissors" && computerSelection == "rock")){
        computerScore++;
        return `You Lose. ${computerSelection} beats ${playerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")){
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection){
        computerScore++;
        playerScore++;
        return "You Tied!";
    }
}

function endGame(){
    if(playerScore > computerScore){
        winnerMessage.textContent = 'You won the Game!';
    }else if(computerScore > playerScore){
        winnerMessage.textContent = 'You lost the Game.';
    } else {
        winnerMessage.textContent = 'You tied.';
    }
}

const buttons = document.querySelectorAll('.button');
const roundResults = document.querySelector(".roundResults");
const resultContainer = document.querySelector('.results');
const playerResults = document.querySelector('.playerResults')
const compResults = document.querySelector('.compResults');
const playersScore = document.querySelector('.playersScore');
const compsScore = document.querySelector('.compsScore');
const winnerMessage = document.querySelector('.winnerMessage');


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = button.id;
        const resultText = playRound(playerSelection, getComputerChoice());
        roundResults.textContent = resultText;
        playersScore.textContent = playerScore;
        compsScore.textContent = computerScore;

        if(playerScore === 5 || computerScore === 5){
            endGame();
            playerScore = 0;
            computerScore = 0;
            winnerMessage = '';
        } 
    })
})