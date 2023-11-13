
function getComputerChoice(){
    const comp = ['rock', 'paper', 'scissors'];
    let rand = comp [Math.floor(Math.random()* comp.length)];
    console.log (rand)
    return rand;
}

function singleRound(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, Paper, Scissors?").toLowerCase()
    if (playerSelection == 'rock' && computerSelection == 'scissors'
     || playerSelection == 'paper' && computerSelection == 'rock' 
     || playerSelection == 'scissors' && computerSelection == 'paper') {
        alert ('You win!')
        console.log('You win') 
        return 'Win'}
    else if (playerSelection == computerSelection) {
        alert ('Tie!')
        console.log('Tie!') 
        return 'Tie'
    } 
    else {
        alert ('You Lose!')
        return 'Lose'; 
    }
}
function game(){
    singleRound()
    singleRound()
    singleRound()
    singleRound()
    singleRound()
}
game()