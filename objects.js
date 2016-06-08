// ====================
// Bet Object
// ====================
var Bet = function() {
  this.big   = 0;
  this.even  = 0;
  this.odd   = 0;
  this.small = 0;
  this.pair1 = 0;
  this.pair2 = 0;
  this.pair3 = 0;
  this.pair4 = 0;
  this.pair5 = 0;
  this.pair6 = 0;
  this.bet2  = 0;
  this.bet3  = 0;
  this.bet4  = 0;
  this.bet5  = 0;
  this.bet6  = 0;
  this.bet7  = 0;
  this.bet8  = 0;
  this.bet9  = 0;
  this.bet10 = 0;
  this.bet11 = 0;
  this.bet12 = 0;
}

// ====================
// Player Object
// ====================
var Player = function(name, credits){
  this.name  = name;
  this.credits = credits;
  this.bets  = new Bet();
};

// ====================
// Game Object
// ====================
var Game = function(defaultCredits) {
  this.turn    = 0;
  this.player1 = new Player("Denis", defaultCredits);
  this.player2 = new Player("Jens", defaultCredits);
  this.dice    = {};
  this.winners = []; // array of strings that matches the name of bet

  this.currentPlayer        = 'Denis';
  this.currentPlayerBetSize = 0;

  this.rollDice = function() {
    this.dice.dice1 = Math.ceil( Math.random() * 6 );
    this.dice.dice2 = Math.ceil( Math.random() * 6 );
    this.dice.total = this.dice.dice1 + this.dice.dice2;
  };

  this.checkWinners = function() {
    switch (true) {
      case (this.dice.dice1 === this.dice.dice2): this.winners.push("pair" + this.dice.dice1);
      case (this.dice.total > 1): this.winners.push("bets" + this.dice.total);
      switch ((this.dice.total%2) === 0) {
        case (true): this.winners.push("even"); break;
        case (false): this.winners.push("odd"); break; }
      switch (this.dice.total >= 7) {
        case (true): this.winners.push("big"); break;
        case (false): this.winners.push("small"); break; }
     };
    console.log(this.dice.dice1 + " " + this.dice.dice2 + " " + this.dice.total) //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<REMOVE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  };

};
