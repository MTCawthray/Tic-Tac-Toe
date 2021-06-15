
var currentPlayerDisplay = document.querySelector('#currentPlayer');
var gameBoard = document.querySelector('#gameBoard');
var player1WinCount = document.querySelector('#player1WinCount');
var player2WinCount = document.querySelector('#player2WinCount');

var currentGame;



window.addEventListener('load', makeNewGame);
gameBoard.addEventListener('click', function(event) {
  makeMove(event)});


function displayOWins() {
  player2WinCount.innerText = `Wins: ${currentGame.player2.wins}`;
};

function displayXWins() {
  player1WinCount.innerText = `Wins: ${currentGame.player1.wins}`;
};

function disableButton(position) {
  position.disabled = true;
};

function makeMove(event) {
  event.preventDefault();
  var position = event.target.closest("button");
  if (position) {
  var positionName = parseInt(event.target.name);
  currentGame.takeTurn(positionName);
  showIcon(position);
  disableButton(position);
  };
};

function makeNewGame() {
  currentGame = new Game();
  currentGame.makeNewPlayers();
  updateWinDisplay();
  showNewGame();
};

function refreshGameBoard() {
  toggleCelebration();
  gameBoard.innerHTML = `
  <div class="a-row">
    <button type="button" class="a-1" id="a1" name="1"></button>
    <button type="button" class="a-2" id="a2" name="2"></button>
    <button type="button" class="a-3" id="a3" name="3"></button>
  </div>
  <div class="b-row">
    <button type="button" class="b-1" id="b1" name="4"></button>
    <button type="button" class="b-2" id="b2" name="5"></button>
    <button type="button" class="b-3" id="b3" name="6"></button>
  </div>
  <div class="c-row">
    <button type="button" class="c-1" id="c1" name="7"></button>
    <button type="button" class="c-2" id="c2" name="8"></button>
    <button type="button" class="c-3" id="c3" name="9"></button>
  </div>
  `;
};

function selectNextPlayer() {
  if (currentGame.currentMove % 2) {
    currentPlayerDisplay.innerText = 'Player 2 Is Up';
  } else {
    currentPlayerDisplay.innerText = 'Player 1 Is Up';
  };
};

function showDraw() {
  currentPlayerDisplay.innerText = 'Its a DRAW';
  togglePointer();
  toggleCelebration();
  setTimeout(function(){currentGame.clearGame(); }, 3500);
};

function showIcon(position) {
  if (currentGame.currentMove % 2 !== 0) {
    position.innerHTML = `<img class="x-icon pointerDisabled" id="xIcon" src="./assets/X-icon.png" alt="X image" />`;
  } else {
    position.innerHTML = `<img class="o-icon pointerDisabled" id="oIcon" src="./assets/O-icon.png" alt="O image" />`;
  }
};

function showNewGame() {
  currentPlayerDisplay.innerText = 'New Game, Player 1 Is Up!';
};

function showPlayerWin(winner) {
  currentPlayerDisplay.innerText = `PLAYER ${winner} WINS!`
  toggleCelebration();
};

function toggleCelebration() {
  currentPlayerDisplay.classList.toggle('show-celebration');
}

function togglePointer() {
  gameBoard.classList.toggle('pointer-disabled');
}

function updateCurrentPlayerDisplay() {
  if (currentGame.currentMove >= 9) {
    showDraw();
  } else {
    selectNextPlayer();
  }
};

function updateWinDisplay() {
  if (currentGame.player1.wins && currentGame.player2.wins) {
    displayXWins();
    displayOWins();
  } else if (!currentGame.player1.wins && currentGame.player2.wins) {
    displayOWins();
  } else if (currentGame.player1.wins && !currentGame.player2.wins) {
    displayXWins();
  }
};
