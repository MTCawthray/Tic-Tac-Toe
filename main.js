
var currentPlayerDisplay = document.querySelector('#currentPlayer');
var gameBoard = document.querySelector('#gameBoard');
var player1WinCount = document.querySelector('#player1WinCount');
var player2WinCount = document.querySelector('#player2WinCount');

var currentGame;



window.addEventListener('load', makeNewGame);
gameBoard.addEventListener('click', function(event) {
  makeMove(event)});



function disableButton(position) {
  position.disabled = true;
};

function makeMove(event) {
  var position = event.target;
  var positionName = parseInt(event.target.name);
  currentGame.takeTurn(positionName);
  showIcon(position);
  disableButton(position);
};

function makeNewGame() {
  currentGame = new Game();
  currentGame.makeNewPlayers();
  updateWinDisplay();
  showNewGame();
};

function refreshGameBoard() {
  gameBoard.innerHTML = `
  <div class="a-row">
  <button type="button" class="a1" id="a1" name="1"></button>
  <button type="button" class="a2" id="a2" name="2"></button>
  <button type="button" class="a3" id="a3" name="3"></button>
  </div>
  <div class="b-row">
  <button type="button" class="b1" id="b1" name="4"></button>
  <button type="button" class="b2" id="b2" name="5"></button>
  <button type="button" class="b3" id="b3" name="6"></button>
  </div>
  <div class="c-row">
  <button type="button" class="c1" id="c1" name="7"></button>
  <button type="button" class="c2" id="c2" name="8"></button>
  <button type="button" class="c3" id="c3" name="9"></button>
  </div>
  `;
};

function showDraw() {
  currentPlayerDisplay.innerText = 'Its a DRAW';
  togglePointer();
  setTimeout(function(){currentGame.clearGame(); }, 3000);
};

function showIcon(position) {
  if (currentGame.currentMove % 2 !== 0) {
    position.innerHTML = `<img class="x-icon" id="xIcon" src="./assets/X-icon.png" alt="X image" />`;
  } else {
    position.innerHTML = `<img class="o-icon" id="oIcon" src="./assets/O-icon.png" alt="O image" />`;
  }
};

function showNewGame() {
  currentPlayerDisplay.innerText = 'New Game, Player 1 Is Up!';
};

function showPlayer1IsUp() {
  currentPlayerDisplay.innerText = 'Player 1 Is Up';
};

function showPlayer2IsUp() {
  currentPlayerDisplay.innerText = 'Player 2 Is Up';
};

function showPlayerWin(winner) {
  currentPlayerDisplay.innerText = `PLAYER ${winner} WINS!`
};

function togglePointer() {
  gameBoard.classList.toggle('pointer-disabled');
}

function updateCurrentPlayerDisplay() {
  if (currentGame.currentMove >= 9) {
    showDraw();
  } else if (!(currentGame.currentMove % 2)) {
    showPlayer1IsUp();
  } else if (currentGame.currentMove % 2){
    showPlayer2IsUp();
  }
};

function updateWinDisplay() {
  player1WinCount.innerText = `Wins: ${currentGame.player1.wins}`;
  player2WinCount.innerText = `Wins: ${currentGame.player2.wins}`;
};
