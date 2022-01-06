function computerPlay() {
    const random = Math.floor(Math.random() * 3);
    if (random === 0){
        return 'rock';
    } else if (random === 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

function playerPlay(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error')
    };
};

function playRound(playerSelection, computerSelection) {
   if (playerSelection === computerSelection) {
       return 'This game is a tie';
   };
   if (playerSelection === 'rock') {
       if (computerSelection === 'paper') {
           return 'You Lose!, Paper covers Rock';
       }else {
           return 'You win';
       };
   };
   if (playerSelection === 'paper') {
       if (computerSelection === 'scissors') {
           return 'You Lose!, Scissors cuts Paper';
       } else {
           return 'You win';
       };
   };
   if (playerSelection === 'scissors') {
       if (computerSelection === 'rock') {
           return 'You Lose!, Rock crashes Scissors';
       } else{
           return 'You Win';
       };
   };
};
const playerSelection = playerPlay(window.prompt('Enter your selection'));
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection))


