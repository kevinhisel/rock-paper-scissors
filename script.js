function getComputerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let iChoice = Math.floor(Math.random() * choices.length);
    return choices[iChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        }
    }
}

function capitalize(text) {
    text = text.toLowerCase();
    let firstLetter = text[0].toUpperCase();
    text = text.replace(text[0], firstLetter);

    return text;
}

function game() {
    for (let i = 0; i < 5; i++) {
        let result = playRound(window.prompt("Rock, Paper, or Scissors?"), getComputerPlay());
        console.log(result);
    }
}

game();