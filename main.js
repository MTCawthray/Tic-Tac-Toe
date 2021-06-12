// ------Variables----- //
var topLeftBtn = document.querySelector('#a1')
var xIcon1 = document.querySelector('#xIconA1');
var oIcon1 = document.querySelector('#oIconA1');
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

var currentGame;

//------ Event Listeners -------//
window.addEventListener('load', function(event) {
  newGame(event)});
// gameBoard.addEventListener('click' function(event) {
//
// });
topLeftBtn.addEventListener('click', function(event) {
  takeTurn(event)});
topCenterBtn.addEventListener('click', takeTurn);
topRightBtn.addEventListener('click', takeTurn);
centerLeftBtn.addEventListener('click', takeTurn);
centerBtn.addEventListener('click', takeTurn);
centerRightBtn.addEventListener('click', takeTurn);
bottomLeftBtn.addEventListener('click', takeTurn);
bottomCenterBtn.addEventListener('click', takeTurn);
bottomRightBtn.addEventListener('click', takeTurn);





//-------- Functions --------//
function takeTurn(event) {
debugger
  currentGame.currentMove++;
  console.log("in takeTurn move counter-->", currentGame.currentMove);
  if (currentGame.currentMove === 1 || 3 || 5 || 7 || 9) {
    var position = parseInt(event.target.name);
    event.target.disabled = true;
    currentGame.player1.positions.push(position);
    currentGame.checkGame(currentGame.player1);
    // currentGame.updateBoard();
    // remove hidden class from the x image of button clicked and disable button.
    // showX();
  } else {
    var position = parseInt(event.target.name);
    event.target.disabled = true;
    currentGame.player2.positions.push(position);
    currentGame.checkGame(currentGameplayer2);
    // currentGame.updateBoard();
    // remove hidden class from the o image of button clicked and disable button.
    // showO();
  }
}

function newGame(event) {
  event.preventDefault();
  currentGame = new Game();
  currentGame.player1 = new Player('1', 'x');
  currentGame.player2 = new Player('2', 'o');
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
}

function showX(event) {
    if(event.target.classList.contains('x-icon')) {
      event.target.classList.remove('hidden');
    }
  }

function showO(event) {
  if(event.target.classList.contains('o-icon')) {
    event.target.classList.remove('hidden');
  }
}
