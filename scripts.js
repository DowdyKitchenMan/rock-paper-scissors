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
    console.log(prompt("show me your gang sign"));
}

