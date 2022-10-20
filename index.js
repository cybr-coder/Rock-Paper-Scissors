// DOM SELECTIONS
const rockBtn = document.getElementById("rock-el")
const paperBtn = document.getElementById("paper-el")
const scissorsBtn = document.getElementById("scissors-el")
const scores = document.querySelector(".scores")
const selectEL = document.querySelector(".select-el")
const playerPoint = document.querySelector(".player-point") 
const computerPoint = document.querySelector(".computer-point")
const buttons = document.querySelectorAll("button")
const winnerText = document.querySelector(".winner-text")

// VARIABLES
let pWinMessage = "You Win!, click the restart button to play again."
let cWinMessage = "Computer Wins!, click the restart button to play again."
let playerSelection = "";
let playerWin = 0;
let computerWin = 0;

// EVENT LISTENERS FOR PLAYER BUTTONS
rockBtn.addEventListener("click", function() {
    playerSelection = "rock"
    playRound()  
})
paperBtn.addEventListener("click", function() {
    playerSelection = "paper"
    playRound()
})
scissorsBtn.addEventListener("click", function() {
    playerSelection = "scissors"
    playRound()
})

// COMPUTER CHOICE
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3)
    switch (random) { 
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

// FUNCTION TO PLAY GAME
function playRound() {
    const computerSelection = getComputerChoice();
    selectEL.textContent = `COMPUTER CHOOSES: ${computerSelection}`
    scores.textContent = checkWinner(playerSelection, computerSelection)
    playerPoint.textContent = `Player: ${playerWin}`
    computerPoint.textContent = `Computer: ${computerWin}`
    endGame();
}

// FUNCTION TO CHECK WINNER
function checkWinner(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return 'This game is a tie';
   };
   if (playerSelection === 'rock' && computerSelection === 'paper') {
       computerWin++;
        return 'You Lose!, Paper covers Rock';
    }else if (playerSelection === 'paper' && computerSelection === 'scissors')  {
        computerWin++;
        return 'You Lose!, Scissors cuts Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerWin++;
        return 'You Lose!, Rock crashes Scissors';
       }
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWin++;
        return 'You Win! Paper covers Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerWin++;
        return 'You Win!, Scissors cuts Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerWin++;
        return 'You Win!, Rock crashes Scissors';
    }
}

// HELPER FUNCTIONS

// DISABLE BUTTONS
function disableButton() {
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

// END GAME
function endGame() {
    if (playerWin === 5) {
        disableButton()
        restart()
        winnerText.textContent += " " + pWinMessage
    }
    if (computerWin === 5) {
        disableButton()
        restart()
        winnerText.textContent += " " + cWinMessage
    }    
}

// RESTART GAME
function restart() {
    const restartBtn = document.createElement("button")
    restartBtn.textContent = "RESTART";
    document.body.appendChild(restartBtn)
    restartBtn.addEventListener("click", function () {
        location.reload();
    })
}



