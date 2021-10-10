/*************************************************
 * Randomly returns either 'Rock', 'Paper', or 'Scissors'. Used to represent the
 * computer's "choice" in the game.
 * **********************************************/
function getComputerPlay()
{
    let choices = ['Rock', 'Paper', 'Scissors'];
    let iChoice = Math.floor(Math.random() * choices.length);
    return choices[iChoice];
}
