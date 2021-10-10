/*************************************************
 * Randomly returns either 'Rock', 'Paper', or 'Scissors'. Used to represent the
 * computer's "choice" in the game.
 */
function getComputerPlay()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let iChoice = Math.floor(Math.random() * choices.length);
    return choices[iChoice];
}

/*************************************************
 * playRound() returns a string declaring the whether the player is the winner
 * or the loser of the round. Calls parseText() to normalize playerSelection  
 * prior to comparing with computerSelection.
 */
function playRound(playerSelection, computerSelection)
{
    playerSelection = parseText(playerSelection);

    if (playerSelection === computerSelection)
    {
        return "It's a tie!";
    }
    else if (playerSelection === "Rock")
    {
        if (computerSelection === "Scissors")
        {
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection === "Paper")
        {
            return "You Lose! Paper beats Rock";
        }
    }
    else if (playerSelection === "Paper")
    {
        if (computerSelection === "Rock")
        {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === "Scissors")
        {
            return "You Lose! Scissors beats Paper";
        }
    }
    else if (playerSelection === "Scissors")
    {
        if (computerSelection === "Paper")
        {
            return "You Win! Scissors beats Paper";
        }
        else if (computerSelection === "Rock")
        {
            return "You Lose! Rock beats Scissors";
        }
    }
}

/*************************************************
 * Returns the text passed to it as a parameter with only the first letter 
 * capitalized.
 */
function parseText(text)
{
    text = text.toLowerCase();
    let firstLetter = text[0].toUpperCase();
    text = text.replace(text[0], firstLetter);

    return text;
}

/*************************************************
 * Loops through 5 iterations of playRound() and prints each result to the console.
 * Enables user to make their selection through a window prompt.
 */
function game()
{
    for (let i = 0; i < 5; i++)
    {
        let result = playRound(window.prompt("Rock, Paper, or Scissors?"), getComputerPlay());
        console.log(result);
    }
}

game();