let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        document.getElementById("round-result").textContent = "It's a tie!";
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        document.getElementById("round-result").textContent = "You lose! Paper smothers Rock!";
        computerScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        document.getElementById("round-result").textContent = "You win! Rock crushes Scissors!";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        document.getElementById("round-result").textContent = "You lose! Scissors cuts Paper!";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        document.getElementById("round-result").textContent = "You win! Paper smothers Rock!";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        document.getElementById("round-result").textContent = "You lose! Rock crushes Scissors!";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        document.getElementById("round-result").textContent = "You win! Scissors cuts Paper!";
        humanScore++;
    }

    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    if (humanScore === 5) {
        document.getElementById("game-result").textContent = "Congratulations! You are the Champion!";
        resetGame();
    } else if (computerScore === 5) {
        document.getElementById("game-result").textContent = "You lose! The Computer is the Champion!";
        resetGame();
    }
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
