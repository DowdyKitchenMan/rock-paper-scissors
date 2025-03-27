let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomInt = Math.floor(Math.random() * 3);

    switch (randomInt){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            return;
        return;
    }
}

function getHumanChoice(){
    return(prompt("show me your gang sign"));
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let playerOutcome;
    let winner;
    let loser;

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            playerOutcome = "win";
            winner = humanChoice;
            loser = computerChoice;
            humanScore++;
        }
    else if (humanChoice === computerChoice) {
        console.log("Draw!");
        return;
    }
    else {
        playerOutcome = "lose";
        winner = computerChoice;
        loser = humanChoice;
        computerScore++;
    }

    console.log(`You ${playerOutcome}! ${winner} beat ${loser}.`);
}

function playGame(){
    for (i = 0; i < 5; ++i){
        playRound(getHumanChoice(), getComputerChoice());
    }
}