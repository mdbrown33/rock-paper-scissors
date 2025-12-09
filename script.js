function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    return humanChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie, try again!");
        }
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("You lose. Paper smothers Rock!");
            computerScore += 1;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock crushes Scissors!");
            humanScore += 1;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("You lose! Scissors cuts Paper!");
            computerScore += 1;
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper smothers Rock!");
            humanScore += 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("You lose. Rock crushes Scissors!");
            computerScore += 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors cuts Paper!");
            humanScore += 1;
        }
    }

    for (let round = 1; round <= 5; round++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Current score: Human ${humanScore}, Computer ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the Champion");
    } 
    else if (computerScore > humanScore) {
        console.log("The computer is the Champion! Better luck next time!");
    }
    else {
        console.log("It's a tie! No one is the Champion!");
    }
}

playGame();
