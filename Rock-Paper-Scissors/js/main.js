function computerPlay(){
    let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() *options.length)])
}

function playRound(playerSelection, computerSelection){

 if (playerSelection ==='rock' && computerSelection === 'rock') {
        return 'Tie. Both used Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose!'
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors')) {
        return'You win!'  
    }

    if (playerSelection ==='paper' && computerSelection === 'paper'){
        return'Tie. Both used Paper'
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose!'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return'You win!'
    }

    if (playerSelection ==='scissors' && computerSelection === 'scissors'){
       return 'Tie. Both used Scissors'
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return'You lose!'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return'You win!'
    }


}

const playerSelection = "rock";
const computerSelection = computerPlay();
