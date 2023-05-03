// Game memory
let currentRound = 0;
let userScore = 0;
let computerScore = 0;

// DOM Elements
const buttons = document.querySelectorAll('button');
const roundDisplay = document.getElementById('round');
const userDisplay = document.getElementById('user-score');
const computerDisplay = document.getElementById('computer-score');
const gameStatus = document.getElementById('game-status');

// Game
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const result = playRound(event.target.innerText.toLowerCase(), getComputerChoice());
    currentRound += 1;
    if (currentRound <= 5) {
      //Update the stored scores
      userScore += result.userScore;
      computerScore += result.computerScore;
      //Update the DOM to reflect the scores
      roundDisplay.innerText =  currentRound;
      userDisplay.innerText = userScore;
      computerDisplay.innerText = computerScore;
      gameStatus.innerText = result.message;
    } else {
      if (userScore > computerScore) {
        gameStatus.innerText = 'User wins! Make another selection to play another round!'
      } else if (userScore < computerScore) {
        gameStatus.innerText = 'Computer wins :( Make another selection to play another round!'
      } else {
        gameStatus.innerText = '5 Round Draw! What an unlikely event!'
      };
      //Reset the scores
      currentRound = 0;
      userScore = 0;
      computerScore = 0;
      //Update the DOM to reflect the scores
      roundDisplay.innerText =  currentRound;
      userDisplay.innerText = userScore;
      computerDisplay.innerText = computerScore;
      // gameStatus.innerText = 'Lets play another round!';
    }
    
  });
});

// Logic to determine winner of round

function playRound(playerSelection, computerSelection) {

    if (
      playerSelection === 'rock' && computerSelection === 'scissors'
      || 
      playerSelection === 'paper' && computerSelection === 'rock'
      || 
      playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
      console.log(`You win! ${playerSelection} beats ${computerSelection}`);
      return {
      'message': `You win! ${playerSelection} beats ${computerSelection}`,
      'userScore': 1, 
      'computerScore': 0};
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper'
        || 
        playerSelection === 'paper' && computerSelection === 'scissors'
        || 
        playerSelection === 'scissors' && computerSelection === 'rock' 
    ) {
      console.log(`You lose! ${playerSelection} defeated by ${computerSelection}`);
      return {
      'message': `You lose! ${playerSelection} defeated by ${computerSelection}`,
      'userScore': 0, 
      'computerScore': 1};
    } else if (
        playerSelection === 'rock' && computerSelection === 'rock'
        || 
        playerSelection === 'paper' && computerSelection === 'paper'
        || 
        playerSelection === 'scissors' && computerSelection === 'scissors' 
      ) {
        console.log(`Draw! ${playerSelection} is equal to ${computerSelection}`);
      return {
        'message': `Draw! ${playerSelection} is equal to ${computerSelection}`,
        'userScore': 0, 
        'computerScore': 0};
    } 
}

function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let index = getRandomArbitrary(0, choices.length);
  return choices[index];
}

function getRandomArbitrary(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}