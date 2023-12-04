let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);

    switch(randomNumber){
        case(0):
            return "rock";
            break;
        case(1):
            return "paper";
            break;
        case(2):
            return "scissors";
            break;
        default:
            return "Something went wrong. Try again."
    }
}
// console.log(getComputerChoice());    

function playRound(playerSelection, computerSelection){
    console.log(playerSelection);
    console.log(computerSelection);
    if((playerSelection == "rock" && computerSelection == "paper")
       || (playerSelection == "paper" && computerSelection == "scissors")
       || (playerSelection == "scissors" && computerSelection == "rock")){
        ++computerScore;
        return `You Lose. ${computerSelection} beats ${playerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")){
        ++playerScore;
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else if (playerSelection === computerSelection){
        return "You Tied!";
    }
}

//UI
const buttons = document.querySelectorAll('.button');
const roundResults = document.querySelector(".roundResults");

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = button.id;
        const resultText = playRound(playerSelection, getComputerChoice());
        roundResults.textContent = resultText;
        
    })
})

//Display Results
const resultContainer = document.querySelector('.results');
const playerResults = document.querySelector('.playerResults')
const compResults = document.querySelector('.compResults');

const playerFinalScore = document.createElement('p');
playerFinalScore.classList.add('playerFinalScore');
playerFinalScore.textContent = playerScore;
resultContainer.insertBefore(playerFinalScore, compResults);

const compFinalScore = document.createElement('p');
compFinalScore.classList.add('compFinalScore');
compFinalScore.textContent = computerScore;
resultContainer.appendChild(compFinalScore);
