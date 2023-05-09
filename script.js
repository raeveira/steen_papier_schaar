let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
let resultDiv = document.getElementById("result");

// Get buttons into js
document.getElementById("rock-button").addEventListener("click", function() {
  play("rock");
});

document.getElementById("paper-button").addEventListener("click", function() {
  play("paper");
});

document.getElementById("scissors-button").addEventListener("click", function() {
  play("scissors");
});

// Computer handler
function play(playerChoice) {
  let computerChoice = computerPlay();
  let result = getResult(playerChoice, computerChoice);
  displayResult(result, playerChoice, computerChoice);
  updateScore(result);
}

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors'];
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Different combinations (win/lose)
function getResult(playerChoice, computerChoice) {
  switch (playerChoice) {
    case 'rock':
      switch (computerChoice) {
        case 'rock':
          return 'tie';
        case 'paper':
          return 'lose';
        case 'scissors':
          return 'win';
      }
    case 'paper':
      switch (computerChoice) {
        case 'rock':
          return 'win';
        case 'paper':
          return 'tie';
        case 'scissors':
          return 'lose';
      }
    case 'scissors':
      switch (computerChoice) {
        case 'rock':
          return 'lose';
        case 'paper':
          return 'win';
        case 'scissors':
          return 'tie';
      }
  }
}

// Show result
function displayResult(result, playerChoice, computerChoice) {
  let resultText = '';
  switch (result) {
    case 'win':
      resultText = 'You win!';
      break;
    case 'lose':
      resultText = 'You lose!';
      break;
    default:
      resultText = "It's a tie!";
  }
  resultDiv.innerHTML = `${resultText} You chose ${playerChoice}, computer chose ${computerChoice}.`;
}

//Updates the scoreboard either won or lost.
function updateScore(result) {
  switch (result) {
    case 'win':
      playerScore++;
      break;
    case 'lose':
      computerScore++;
      break;
  }
  playerScoreSpan.innerHTML = playerScore;
  computerScoreSpan.innerHTML = computerScore;
}
