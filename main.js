// ------Variables----- //
var topLeftBtn = document.querySelector('#a1');
var topCenterBtn = document.querySelector('#a2');
var topRightBtn = document.querySelector('#a3');
var centerLeftBtn = document.querySelector('#b1');
var centerBtn = document.querySelector('#b2');
var centerRightBtn = document.querySelector('#b3');
var bottomLeftBtn = document.querySelector('#c1');
var bottomCenterBtn = document.querySelector('#c2');
var bottomRightBtn = document.querySelector('#c3');
var gameBoard = document.querySelector('#gameBoard');
var currentPlayerDisplay = document.querySelector('#currentPlayer');

var winScenarios = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
var currentMove = 0;
var currentGame;


//------ Event Listeners -------//
window.addEventListener('load', function(event) {
  newGame(event)});
topLeftBtn.addEventListener('click', '');
topCenterBtn.addEventListener('click', '');
topRightBtn.addEventListener('click', '');
centerLeftBtn.addEventListener('click', '');
centerBtn.addEventListener('click', '');
centerRightBtn.addEventListener('click', '');
bottomLeftBtn.addEventListener('click', '');
bottomCenterBtn.addEventListener('click', '');
bottomRightBtn.addEventListener('click', '');





//-------- Functions --------//
function takeTurn() {
  currentMove++;
  console.log("current move --> "currentMove);
  if (currentMove === 1 || 3 || 5 || 7 || 9) {
    // remove hidden class from the x image of button clicked and disable button.
    player1.positions.push(/* button name or value */);
    currentGame.updateBoard();
    currentGame.checkGame();
  } else {
    // remove hidden class from the o image of button clicked and disable button.
    player2.positions.push(/* button name or value */);
    currentGame.updateBoard();
    currentGame.checkGame();
  }


}

function newGame(event) {
  event.preventDefault();
  var player1 = new Player(1, x);
  var player2 = new Player(2, o);
  currentGame = new Game(player1, player2);
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
}
