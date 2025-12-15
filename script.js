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
        endGame();
    } else if (computerScore === 5) {
        document.getElementById("game-result").textContent = "You lose! The Computer is the Champion!";
        endGame();
    }
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
}

function endGame() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("play-again").style.display = "inline-block";
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("human-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;
    document.getElementById("round-result").textContent = "Make your choice to start the game!";
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("play-again").style.display = "none";
}

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
document.getElementById("play-again").addEventListener("click", restartGame);
