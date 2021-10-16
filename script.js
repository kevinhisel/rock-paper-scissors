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

function printResult(result) {
    const container = document.querySelector('.results');
    
    const para = document.createElement('p');
    para.textContent = result;

    container.appendChild(para);
}

function game() {
    const buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', () => {
        printResult(playRound('Rock', getComputerPlay()));
    });
    buttons[1].addEventListener('click', () => {
        printResult(playRound('Paper', getComputerPlay()));
    });
    buttons[2].addEventListener('click', () => {
        printResult(playRound('Scissors', getComputerPlay()));
    });
    
}

game();