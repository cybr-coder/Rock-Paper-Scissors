playRound();

function playRound() {
    let playerSelection = playerPlay(prompt('Enter rock, paper or scissors'));
    let computerSelection = computerPlay();
    console.log(computerSelection);
    console.log(checkWinner(playerSelection, computerSelection))
}

function restartRound() {
    let playerReplay = playerPlay(prompt('Enter rock, paper or scissors'));
    let computerReplay = computerPlay();
    console.log(computerReplay);
    console.log(checkWinner(playerReplay, computerReplay));
}

function playerPlay(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        // alert("check your spelling");
        return 'ERROR'
    } 
    restartRound();
}


function computerPlay() {
    const random = Math.floor(Math.random() * 3);
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


function checkWinner(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return 'This game is a tie';
   };
   if (playerSelection === 'rock' && computerSelection === 'paper') {
           return 'You Lose!, Paper covers Rock';
       }else if (playerSelection === 'paper' && computerSelection === 'scissors')  {
           return 'You Lose!, Scissors cuts Paper';
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
            return 'You Lose!, Rock crashes Scissors';
       }
    
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper covers Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win!, Scissors cuts Paper';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win!, Rock crashes Scissors';
    }
}

// game()
function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}


