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

function getplayerChoice(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    if(playerChoice.toLowerCase() == "rock" || "paper" || "scissors"){
        return playerChoice.toLowerCase();
    } else {
        return "Invalid choice."
    }
}

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


// console.log(playRound(getplayerChoice(), getComputerChoice()));

function game(){
    while(playerScore < 5 && computerScore < 5){
        playRound(getplayerChoice(), getComputerChoice());
    }
}

game();
console.log(playerScore);
console.log(computerScore);

function winGame(playerFinalScore, computerFinalScore){
    if(playerFinalScore == 5){
        return "You won the game. Congratulations!";
    } else if (computerFinalScore == 5) {
        return "You lost the game. Better luck next time.";
    }
}
winGame(playerScore, computerScore);