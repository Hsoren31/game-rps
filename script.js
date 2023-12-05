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
        computerScore++;
        return `You Lose. ${computerSelection} beats ${playerSelection}.`;

    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")){
        playerScore++;
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
        playersScore.textContent = playerScore;
        compsScore.textContent = computerScore;
    })
})

//Display Results
const resultContainer = document.querySelector('.results');
const playerResults = document.querySelector('.playerResults')
const compResults = document.querySelector('.compResults');

const playersScore = document.createElement('p');
playersScore.classList.add('playersScore');

resultContainer.insertBefore(playersScore, compResults);

const compsScore = document.createElement('p');
compsScore.classList.add('compsScore');

resultContainer.appendChild(compsScore);
