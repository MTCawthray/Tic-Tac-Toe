class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.positions = [];
    this.wins = 0;
  }

  saveToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(`player${this.id}WinCount`, stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem(`player${this.id}WinCount`);
    var parsedWins = JSON.parse(retrievedWins);
    this.wins = parsedWins;
  }

};
