// ------Variables----- //
var gameBoard = document.querySelector('#gameBoard');
var player1WinCount = document.querySelector('#player1WinCount');
var player2WinCount = document.querySelector('#player2WinCount');
var currentPlayerDisplay = document.querySelector('#currentPlayer');

var currentGame;

//------ Event Listeners -------//
window.addEventListener('load', makeNewGame);
gameBoard.addEventListener('click', function(event) {
  makeMove(event)});

//-------- Functions --------//
function makeMove(event) {
  event.target.disabled = true;
  var position = event.target;
  var positionName = parseInt(event.target.name);
  currentGame.takeTurn(positionName);
  showIcon(position);
}

function showIcon(position) {
  if (currentGame.currentMove % 2 !== 0) {
    position.innerHTML = `<img class="x-icon" id="xIcon" src="./assets/X-icon.png" alt="X image" />`;
  } else {
    position.innerHTML = `<img class="o-icon" id="oIcon" src="./assets/O-icon.png" alt="O image" />`;
  }
}

function makeNewGame() {
  currentGame = new Game();
  currentGame.makeNewPlayers();
  updateWinDisplay();
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
}

function updateCurrentPlayerDisplay() {
  if (currentGame.currentMove % 2 !== 0) {
    currentPlayerDisplay.innerText = 'Player 2 Is Up';
  } else {
    currentPlayerDisplay.innerText = 'Player 1 Is Up';
  }
}

function updateWinDisplay() {
  player1WinCount.innerText = `Wins: ${currentGame.player1.wins}`;
  player2WinCount.innerText = `Wins: ${currentGame.player2.wins}`;
}
