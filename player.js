class Player {
  constructor(id, icon) {
    this.id = id;
    this.icon = icon;
    this.wins = 0;
  }
};
  saveToStorage() {
    var stringifiedWins = JSON.stringify(this.wins);
    localStorage.setItem(stringifiedWins);
  }
