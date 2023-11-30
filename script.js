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
    if(playerSelection == "rock" && computerSelection == "paper"){
        ++computerScore;
        return "You Lose! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        ++computerScore;
        return "You Lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        ++computerScore;
        return "You Lose! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        ++playerScore;
        return "You Win! Rock beats scissors.";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        ++playerScore;
        return "You Win! Paper beats rock.";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        ++playerScore;
        return "You Win! Scissors beats paper.";
    } else if (playerSelection === computerSelection){
        return "You Tied!";
    }
}


//UI
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});