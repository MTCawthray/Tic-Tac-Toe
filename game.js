// A Game should include:
// Two Player instances
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  updateBoard() {
    // this needs to check the current condition of the gameBoard
    // and reassign the global currentGame variable to it.
  }

  checkGame() {
    //This needs to check the current player's positions against the win scenarios Variable
    //if it is a winning scenario, add 1 to player.wins, invoke a save to local storage for the win count, and invoke the clearGame method
    // if not a win, continue with game
    // if no more positions, decalare a draw
    for (var i = 0; i < winScenarios.length; i++) {
      if (winScenarios[i].includes())

    }
  }

  clearGame() {
    currentPlayerDisplay.innerText = 'New Game, Player 1 is up!';
    gameBoard.innerHTML = '
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
    </div>'
  }
}
