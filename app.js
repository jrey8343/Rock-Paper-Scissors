// Write a function that plays a single round of Rock Paper Scissors

// 1. Take 2 parameters: playerSelection and computerSelection
// 2. Create an input prompt that takes in the user's playerSelection
// 3. Create a function that chooses rock, paper or scissors randomly
// 4. Assign the random value to computerSelection
// 5. Set up a logical if sequence to determine the winner
// 6. Output a string e.g. "You Lose! Paper beats Rock" depending on outcome
// 7. Use string methods to allow caSE inseNsitive inout to userSelection
// 

game();

function game() {
  let currentRound = 0;
  let userScore = 0;
  let computerScore = 0;
  let result;
    for (i = 0; i < 5; i++) {
      result = playRound(getComputerChoice());
      currentRound++;
      userScore += result.userScore;
      computerScore += result.computerScore;
  
      console.log(
        `Current round: ${currentRound} 
         User score = ${userScore},
         Computer score = ${computerScore}`)
  
      alert(result.message);
    }

  if (userScore > computerScore) {
    console.log(`User wins!: ${userScore} to ${computerScore}`)
  } else if (userScore < computerScore) {
    console.log(`User loses!: ${userScore} to ${computerScore}`)
  } else {
    console.log(`Draw!: ${userScore} to ${computerScore}`)
  }
  
}

function playRound(computerSelection) {
const options = ['rock', 'paper', 'scissors'];

let playerSelection = prompt('Choose rock, paper or scissors');

//First check that user has entered an option
if (typeof playerSelection === 'string') {
  //Convert to lower case
  playerSelection = playerSelection.toLowerCase();
  // Check if they have chosen a valid option 'Rock', 'Paper' or 'Scissors'
  if (options.find(element => element === playerSelection)) {
    //Now check who won and return an object with a status message, the score for user and computer
    if (
      playerSelection === 'rock' && computerSelection === 'scissors'
      || 
      playerSelection === 'paper' && computerSelection === 'rock'
      || 
      playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
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
      return {
        'message': `Draw! ${playerSelection} is equal to ${computerSelection}`,
        'userScore': 0, 
        'computerScore': 0};
    } 
    return;
  } else {
    //Return an error if they have not entered a valid selection
    return {
      'message': `Error! Please enter rock, paper or scissors`,
      'userScore': 0, 
      'computerScore': 0};
  }

} else {
  //Return if undefined as user cancelled
  return {
    'message': `Error! Input is undefined due to cancelled prompt`,
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