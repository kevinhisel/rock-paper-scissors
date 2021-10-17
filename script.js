function getComputerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let iChoice = Math.floor(Math.random() * choices.length);
    return choices[iChoice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
    }
}

function getScore() {
    if (playerScore < 5 && computerScore < 5) {
        return `Player: ${ playerScore } Computer: ${ computerScore }`
    } else if (playerScore >= 5) {
        endGame(true);
        return `Chicken dinner, you're the winner!`;
    } else {
        endGame(false);
        return `You lost, you lost - you ate tomato sauce.`;
    }
}

function endGame(playerWon) {
    const body = document.querySelector('body');

    buttons.forEach(button => button.disabled = true);
    if (playerWon) {
        body.style.backgroundColor = '#39FF39';
    } else {
        body.style.backgroundColor = '#FF7B7B';
    }
}

let playerScore   = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
const results = document.querySelector('.results');

const result = document.createElement('p');
const score  = document.createElement('p');

buttons[0].addEventListener('click', () => {
    result.textContent = playRound('Rock', getComputerPlay());
    score.textContent  = getScore();

    results.appendChild(result);
    results.appendChild(score);
});
buttons[1].addEventListener('click', () => {
    result.textContent = playRound('Paper', getComputerPlay());
    score.textContent  = getScore();

    results.appendChild(result);
    results.appendChild(score);
});
buttons[2].addEventListener('click', () => {
    result.textContent = playRound('Scissors', getComputerPlay());
    score.textContent  = getScore();

    results.appendChild(result);
    results.appendChild(score);
});