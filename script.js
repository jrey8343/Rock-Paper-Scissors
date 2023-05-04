// Game memory
let currentRound = 0;
let currentUserScore = 0;
let currentComputerScore = 0;

// DOM Elements
const choices = document.querySelectorAll('article');
const round = document.getElementById('round');
const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const gameStatus = document.getElementById('game-status');

choices.forEach((choice) => {
  choice.addEventListener('click', game, {
    capture: true,
  });
});

// Game Logic

function game(event) {
  event.stopPropagation();
  const result = playRound(this.classList.value.toLowerCase(), getComputerChoice());
  currentRound += 1;
  if (currentRound <= 5) {
    //Update the stored scores
    currentUserScore += result.userScore;
    currentComputerScore += result.computerScore;
    //Update the DOM to reflect the scores
    round.innerText =  currentRound;
    userScore.innerText = currentUserScore;
    computerScore.innerText = currentComputerScore;
    gameStatus.innerText = result.message;
  } else {
    if (currentUserScore > currentComputerScore) {
      gameStatus.innerText = 'User wins! Make another selection to play another round!'
    } else if (currentUserScore < currentComputerScore) {
      gameStatus.innerText = 'Computer wins :( Make another selection to play another round!'
    } else {
      gameStatus.innerText = '5 Round Draw! What an unlikely event!'
    };
    //Reset the scores
    currentRound = 0;
    currentUserScore = 0;
    currentComputerScore = 0;
    //Update the DOM to reflect the scores
    round.innerText =  currentRound;
    userScore.innerText = currentUserScore;
    computerScore.innerText = currentComputerScore;
  }
}

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