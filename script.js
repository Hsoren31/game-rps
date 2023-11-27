function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3);
    console.log(randomNumber);

    switch(randomNumber){
        case(0):
            return "Rock";
            break;
        case(1):
            return "Paper";
            break;
        case(2):
            return "Scissors";
            break;
        default:
            return "Something went wrong. Try again."
    }
}

console.log(getComputerChoice());
