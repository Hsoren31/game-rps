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
    let playerInputLower = playerSelection.toLowerCase();
    console.log(playerInputLower);
    console.log(computerSelection);
    if(playerInputLower == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beats rock.";
    } else if (playerInputLower == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beats paper.";
    } else if (playerInputLower == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beats scissors.";
    } else if (playerInputLower == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats scissors.";
    } else if (playerInputLower == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats rock.";
    } else if (playerInputLower == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats paper.";
    } else if (playerInputLower === computerSelection){
        return "You Tied!";
    }
}


// const playerSelection = "paper";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));