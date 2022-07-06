let computerScore = 0;
let playerScore = 0;
let playerPoints = document.querySelector('#playerScore');
let computerPoints = document.querySelector('#computerScore');

const $options = document.querySelectorAll('.sign').forEach(function ($button) {
    $button.onclick = handleSelections;
});

function handleSelections(event) {
    const $button = event.target;
    playerSelection = $button.innerText;
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    showSelection(playerSelection,computerSelection);

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {

        playerScore += 1
        
        document.querySelector('#scoreMessage').innerText = ('You win! ' + playerSelection + ' beats ' + computerSelection);
            playerPoints.textContent = playerScore;
            computerPoints.textContent = computerScore;
        if (playerScore == 5) {
            document.querySelector('#scoreMessage').innerText += '\n You won the game! Reload the page to play again.'
            hideButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        document.querySelector('#scoreMessage').innerText = ('Tie. Both chose ' + playerSelection);
        playerPoints.textContent = playerScore;
        computerPoints.textContent = computerScore;
    }
    else {
        computerScore += 1
        document.querySelector('#scoreMessage').innerText = ('You lose! ' + computerSelection + ' beats ' + playerSelection + '.');
            playerPoints.textContent = playerScore;
            computerPoints.textContent = computerScore;
        if (computerScore == 5) {
            document.querySelector('#scoreMessage').innerText += ' \n You lost the game! Reload the page to play again.'
            hideButtons()
        }
    }
}

function hideButtons() {
    document.querySelector('#buttons').className = "hide"
}

function showSelection(playerSelection,computerSelection){
    document.querySelector('#playerSelection').textContent = 'Your selection: ' + playerSelection;
    document.querySelector('#computerSelection').textContent = 'Computer selection: ' + computerSelection;
}

function computerPlay() {
    let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() * options.length)])
}