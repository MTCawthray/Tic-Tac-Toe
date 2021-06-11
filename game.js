class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.xPositions = [];
    this.oPositions = [];
  }

  switchPlayer() {

  }

  updateBoard() {
    // this needs to check the current condition of the gameBoard
    // and reassign the global currentGame variable to it.
  }

  checkGame(player) {
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
    for (var i = 0; i < winScenarios.length; i++) {
      if (player.positions.includes(winScenarios[i][0])
        && player.positions.includes(winScenarios[i][1])
        && player.positions.includes(winScenarios[i][2])){
          player.wins++;
          player.saveToStorage();
          //somehow announce that the player has won
          clearGame();
        }
    };
  //   // if not a win, continue with game
  //   // if no more positions, decalare a draw
  // }

  clearGame() {
    //set time out
    currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
    gameBoard.innerHTML = `
    <div class="a-row">
      <button type="button" class="a1" id="a1" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="a2" id="a2" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="a3" id="a3" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
    </div>
    <div class="b-row">
      <button type="button" class="b1" id="b1" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="b2" id="b2" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="b3" id="b3" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
    </div>
    <div class="c-row">
      <button type="button" class="c1" id="c1" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="c2" id="c2" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
      <button type="button" class="c3" id="c3" name="">
        <img class="x-icon hidden" id="xIcon" src="./assets/X-icon.png" alt="X image" />
        <img class="o-icon hidden" id="oIcon" src="./assets/O-icon.png" alt="O image" />
      </button>
    </div>`
  }
}
