var payoutRatio = {
  big:    2,
  even:   2,
  odd:    2,
  small:  2,
  pair1:  30,
  pair2:  30,
  pair3:  30,
  pair4:  30,
  pair5:  30,
  pair6:  30,
  bet2:   30,
  bet3:   15,
  bet4:   7,
  bet5:   3,
  bet6:   2,
  bet7:   3,
  bet8:   2,
  bet9:   3,
  bet10:  7,
  bet11:  15,
  bet12:  30,
};

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
  this.name    = name;
  this.credits = credits;
  this.bets    = new Bet();
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
    this.turn       ++;
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
    console.log(this.dice.dice1 + " " + this.dice.dice2 + " " + this.dice.total);
    console.log(this.winners)
     //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<REMOVE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  };

  this.highLightWins = function () {
    var high = this.winners;
    for (i = 0 ; i < high.length ; i++) {
      //var light = "#" + high[i];
      var light = high[i]
      $('#'+ light).css("background-color", "black");
    }
  };

  this.payout = function () {
    this.calculatePayout("player1", payoutRatio);
    this.calculatePayout("player2", payoutRatio);
    this.player1.bets = [];
    this.player2.bets = [];
  };

  this.calculatePayout = function (player, payoutRatio) {
    var player               = this[player];

    for (var betName in player.bets) {
      var amount             = player.bets[betName];
      var winnerIndex        = this.winners.indexOf(betName);

      if (amount && winnerIndex >= 0) {
        ratio                = payoutRatio[betName];
        player.credits       += amount * ratio;
        player.bets[betName] = 0;
      }
    };
  };

  this.clearTable = function() {
    this.dice                 = {};
    this.winners              = [];
    this.currentPlayer        = ' ';
    this.currentPlayerBetSize = 0;
    $ (".bets").css("background", "rgba(100,100,140,.8)");
  };

  this.checkGameWinner = function () {
    if (this.player2.credits <= 0) {
      alert("Player 1 WINS! " + "Player1 Credits:" + this.player1.credits + " Player2 Credits:" + this.player2.credits);
    } else if ((this.player1.credits <= 0)) {
      alert("Player 1 WINS! " + "Player1 Credits:" + this.player1.credits + " Player2 Credits:" + this.player2.credits)
    } else if (this.turn >= 3) {
        if (this.player1.credits > this.player2.credits) {
          alert("Player 1 WINS! " + "Player1 Credits:" + this.player1.credits + " Player2 Credits:" + this.player2.credits);
        } else {
          alert("Player 2 WINS! " + "Player2 Credits:" + this.player2.credits + " Player1 Credits:" + this.player1.credits);
        }
    } else {
      console.log("no Winner yet!");
    };
  }


};