function getComputerChoice(){
    let computerChoiceNum = Math.floor(Math.random()*3)

    switch (computerChoiceNum) {
        case 0:
            var computerChoice = "rock"
            break;
        case 1:
            var computerChoice = "paper"
            break;
        case 2: 
            var computerChoice = "scissors"
            break;
        default:
            break;
    }
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper or scissors?");
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function playRounds(times){
    let humanScore = 0;
    let computerScore = 0;
    const weapons = {
        rock: {weakTo:"paper", strongTo: "scissors"},
        paper: {weakTo:"scissors", strongTo: "rock"},
        scissors: {weakTo: "rock", strongTo: "paper"}
    }
    
    for (let i = 0; i < times; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        if (weapons[humanChoice].strongTo === computerChoice) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore += 1;
        }
        else{
            if (weapons[humanChoice].weakTo === computerChoice) {
                console.log("You Lose! " + computerChoice + "beats " + humanChoice);
                computerScore += 1;
            } else {
                console.log("You draw!");
            }
        }
    }
    console.log("you have " +humanScore+ " wins and " +computerScore+ " losses.")
    
}

playRounds(5);