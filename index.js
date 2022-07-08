function playRound() {
    const playerSelection = playerPlay(window.prompt('Enter your selection'));
    const computerSelection = computerPlay();
    console.log(checkWinner(playerSelection, computerSelection))
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

function playerPlay(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else{
        window.prompt('Type either Rock, Paper or Scissors');     
    }
}


function checkWinner(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return 'This game is a tie';
   };
   if (playerSelection === 'rock') {
       if (computerSelection === 'paper') {
           return 'You Lose!, Paper covers Rock';
       }else {
           return 'You win';
       }
   }
   if (playerSelection === 'paper') {
       if (computerSelection === 'scissors') {
           return 'You Lose!, Scissors cuts Paper';
       } else {
           return 'You win';
       }
   }
   if (playerSelection === 'scissors') {
       if (computerSelection === 'rock') {
           return 'You Lose!, Rock crashes Scissors';
       } else{
           return 'You Win';
       }
   }
}
game()

function game() {
    for(let i = 0; i < 5; i++) {
        playRound();
    }
}

