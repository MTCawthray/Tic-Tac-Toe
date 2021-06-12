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
  makeNewGame(event)});

topLeftBtn.addEventListener('click', makeMove);
topCenterBtn.addEventListener('click', makeMove);
topRightBtn.addEventListener('click', makeMove);
centerLeftBtn.addEventListener('click', makeMove);
centerBtn.addEventListener('click', makeMove);
centerRightBtn.addEventListener('click', makeMove);
bottomLeftBtn.addEventListener('click', makeMove);
bottomCenterBtn.addEventListener('click', makeMove);
bottomRightBtn.addEventListener('click', makeMove);





//-------- Functions --------//
function makeMove(){
  currentGame.takeTurn();
}

function makeNewGame(event) {
  event.preventDefault();
  currentGame = new Game();
  currentGame.player1 = new Player('1', 'x');
  currentGame.player2 = new Player('2', 'o');
  currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
  currentGame.player1.retrieveWinsFromStorage();
  currentGame.player2.retrieveWinsFromStorage();
  // gameBoard.innerHTML = `
  //   <div class="a-row">
  //     <button type="button" class="a1" id="a1" name="1">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="a2" id="a2" name="2">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="a3" id="a3" name="3">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //   </div>
  //   <div class="b-row">
  //     <button type="button" class="b1" id="b1" name="4">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="b2" id="b2" name="5">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="b3" id="b3" name="6">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //   </div>
  //   <div class="c-row">
  //     <button type="button" class="c1" id="c1" name="7">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="c2" id="c2" name="8">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //     <button type="button" class="c3" id="c3" name="9">
  //       <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
  //       <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
  //     </button>
  //   <!-- </div>`
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
