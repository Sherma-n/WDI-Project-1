// ====================
// Payout Ratio Object - Payout for Each Bet
// ====================
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
// Bet Object - Array to store Wagers for each Bet
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
};

// ====================
// Player Object - Player values
// ====================
var Player = function(name, credits){
  this.name    = name;
  this.credits = credits;
  this.bets    = new Bet();
};

// ====================
// Game Object - Game Objects and Functions
// ====================
var Game = function(defaultCredits) {
  this.turn                 = 0;                                             //Check Game Winner
  this.player1              = new Player("Denis", defaultCredits);           //Payout & Check Game Winner
  this.player2              = new Player("Jens", defaultCredits);            //Payout & Check Game Winner
  this.dice                 = {};                                            //rollDice
  this.winners              = [];                                            //Array of strings that matches the name of bets
  this.currentPlayer        = 'Denis';                                       //Player that just clicked on Chips
  this.currentPlayerBetSize = 0;                                             //Player bet that just selected CHips

  // ====================
  // Sounds
  // ====================
   this.coins = new buzz.sound( "./Money-sound-insert-coin.mp3",             //Runs when Chips clicked & Bets Clicks
     { preload: true, loop: false });

   this.rollSound = new buzz.sound( "./Knock-on-door.mp3",                   //Runs when Roll is Clicked
     { preload: true, loop: false });

   this.winSound = new buzz.sound( "./Happy-music.mp3",                      //Runs when there is a Winner
     { preload: true, loop: false });


  this.rollDice = function() {                                               //Rolls Both Dices For Random Number Between 1 to 6
    this.dice.dice1 = Math.ceil( Math.random() * 6 );                        //Rolls Dice 1
    this.dice.dice2 = Math.ceil( Math.random() * 6 );                        //Rolls Dice 2
    this.dice.total = this.dice.dice1 + this.dice.dice2;                     //Sum of Dice 1 & 2
    this.turn       ++;                                                      //Turn Count +1
    $('#dieOne').css("background-size", "contain");                          //For Dice Image
    $('#dieOne').css("background-repeat","no-repeat");                       //For Dice Image
    $('#dieTwo').css("background-size", "contain");                          //For Dice Image
    $('#dieTwo').css("background-repeat","no-repeat");                       //For Dice Image
    if      (this.dice.dice1 === 1) { $('#dieOne').css("background-image", "url(http://www.clipartkid.com/images/170/dice-faces-clipart-1-9-reaching-teachers-labd0b-clipart.png)");}       //Dice Image when random value is 1 for dice1
    else if (this.dice.dice1 === 2) { $('#dieOne').css("background-image", "url(http://i363.photobucket.com/albums/oo79/fizzgig2k4/dice%20face%20images/lego2dice-1-2.jpg)");}                            //Dice Image when random value is 2 for dice1
    else if (this.dice.dice1 === 3) { $('#dieOne').css("background-image", "url(http://liarsdice.co/static/face3.png)");}
                                                                             //Dice Image when random value is 3 for dice1
    else if (this.dice.dice1 === 4) { $('#dieOne').css("background-image", "url(http://dobbelsteen.virtuworld.net/img/4c.gif)");}
                                                                             //Dice Image when random value is 4 for dice1
    else if (this.dice.dice1 === 5) { $('#dieOne').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png)");}                                                        //Dice Image when random value is 5 for dice1
    else if (this.dice.dice1 === 6) { $('#dieOne').css("background-image", "url(http://www.zonkthegame.com/img/6.png)");}
                                                                             //Dice Image when random value is 6 for dice1
    else {console.log("Error:No Dice1")};
    if      (this.dice.dice2 === 1) { $('#dieTwo').css("background-image", "url(http://www.clipartkid.com/images/170/dice-faces-clipart-1-9-reaching-teachers-labd0b-clipart.png)");}       //Dice Image when random value is 1 for dice2
    else if (this.dice.dice2 === 2) { $('#dieTwo').css("background-image", "url(http://i363.photobucket.com/albums/oo79/fizzgig2k4/dice%20face%20images/lego2dice-1-2.jpg)");}                            //Dice Image when random value is 2 for dice2
    else if (this.dice.dice2 === 3) { $('#dieTwo').css("background-image", "url(http://liarsdice.co/static/face3.png)");}
                                                                             //Dice Image when random value is 3 for dice2
    else if (this.dice.dice2 === 4) { $('#dieTwo').css("background-image", "url(http://dobbelsteen.virtuworld.net/img/4c.gif)");}
                                                                             //Dice Image when random value is 4 for dice2
    else if (this.dice.dice2 === 5) { $('#dieTwo').css("background-image", "url(https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png)");}                                                        //Dice Image when random value is 5 for dice2
    else if (this.dice.dice2 === 6) { $('#dieTwo').css("background-image", "url(http://www.zonkthegame.com/img/6.png)");}
                                                                             //Dice Image when random value is 6 for dice2
    else {};

  };

  this.checkWinners = function() {                                           //Check For Winning bets of each round(not game winner)
    switch (true) {                                                                             //Checking for Pairs
      case (this.dice.dice1 === this.dice.dice2): this.winners.push("pair" + this.dice.dice1);  //Pushing Pair Value into round bet wins
      case (this.dice.total > 1):                 this.winners.push("bets" + this.dice.total);
                                                                                                //Pushing total value into round bet wins
    switch ((this.dice.total%2) === 0) {                                                        //Checking for add and even
      case (true):                                this.winners.push("even"); break;             //Push even into round bet wins
      case (false):                               this.winners.push("odd"); break; }            //Push odd to round bet wins
    switch (this.dice.total >= 7) {                                                             //Checking for big or small
      case (true):                                this.winners.push("big"); break;              //Pushing Big to round bet wins
      case (false):                               this.winners.push("small"); break; }          //Pushing Small to round bet wins
     };
    console.log(this.dice.dice1 + " " + this.dice.dice2 + " " + this.dice.total);               //Logging dice roll returns
    console.log(this.winners)                                                                   //check winning array
  };

  this.highLightWins = function () {                                         //Hightling "BetBoxes that are in the winng array"
    var high = this.winners;                                                 //Pushing to winning array
    for (i = 0 ; i < high.length ; i++) {                                    //Looping through the array
      var light = high[i]
      $('#'+ light).css("background-color", "white");                        //css effect
      $('#'+ light).css("border", "3px solid white");                        //css effect
      $('#'+ light).css("background-image", "url(http://awardswriters.com/wp-content/uploads/Winner-stamp1-e1428843025115.jpg)");
      $('#'+ light).css("background-size", "contain");                       //css effect
      $('#'+ light).css("background-repeat", "no-repeat");                   //css effect
    }
  };

  this.payout = function () {                                                //Depositing Payout for wins to each player
    this.calculatePayout("player1", payoutRatio);                            //Depositing Player1
    this.calculatePayout("player2", payoutRatio);                            //Depositing Player2
    this.player1.bets = [];                                                  //Round bets for p1
    this.player2.bets = [];                                                  //Round bets for p2
  };

  this.calculatePayout = function (player, payoutRatio) {                    //Calculating amount for payout
    var player               = this[player];                                 //Determine Player
    for (var betName in player.bets) {                                       //For loop to get each bet
      var amount             = player.bets[betName];                         //Amount Player Bet in
      var winnerIndex        = this.winners.indexOf(betName);                //Winning bets this round
      if (amount && winnerIndex >= 0) {                                      //if bet made + bet won
        ratio                = payoutRatio[betName];                         //Calculate payout
        player.credits       += amount * ratio;                              //add payout to player
        player.bets[betName] = 0;                                            //Reset payer bets
      }
    };
  };

  this.clearTable = function() {                                             //clearing the table at the end of each round
    this.dice                 = {};                                          //reset dices
    this.winners              = [];                                          //reset winners
    this.currentPlayer        = ' ';                                         //reset playing player
    this.currentPlayerBetSize = 0;                                           //reset bets
    $ (".bets").css("background", "green");                                  //reset gameboard css
  };

  // ====================
  // Noty
  // ====================                                                    //Noty - message for winners
  this.messageWin1 = function () { noty({                                    //p1 wins
      text: "Player 1 WINS! " + "Player1 Credits:" + this.player1.credits + " Player2 Credits:" + this.player2.credits + " Press New Game!",
      animation: {
          open: 'animated bounceInLeft',      // Animate.css class names
          open: {height: 'toggle'},           //effect for fade in
          close: 'animated bounceOutLeft',    // Animate.css class names
          easing: 'swing',                    // unavailable - no need
          speed: 300                          // unavailable - no need
      }
    });
    this.winSound.play();                     //win sound(unavailable?)
  };
  this.messageWin2 = function() { noty({                                    //p2 wins
      text: "Player 2 WINS! " + "Player2 Credits:" + this.player2.credits + " Player1 Credits:" + this.player1.credits + " Press New Game!",
      animation: {
          open: 'animated bounceInLeft',      // Animate.css class names
          open: {height: 'toggle'},           //effect for fade in
          close: 'animated bounceOutLeft',    // Animate.css class names
          easing: 'swing',                    // unavailable - no need
          speed: 300                          // unavailable - no need
      }
    });
    this.winSound.play();                     //win sound(unavailable?)
  };
  this.messageDraw = function() { noty({                                    //Game draw
      text: "Game Draw!" + "Player2 Credits:" + this.player2.credits + " Player1 Credits:" + this.player1.credits + " Press New Game!",
      animation: {
          open: 'animated bounceInLeft',      // Animate.css class names
          open: {height: 'toggle'},           //effect for fade in
          close: 'animated bounceOutLeft',    // Animate.css class names
          easing: 'swing',                    // unavailable - no need
          speed: 300                          // unavailable - no need
      }
    });
    this.winSound.play();                     //win sound(unavailable?)
  };

  this.checkGameWinner = function () {                                      //checking for a game winner
    if        (this.turn >= 3) {                                            //check if turns is up(3)
        if        (this.player1.credits > this.player2.credits) { this.messageWin1(); } //P1 wins
        else if   (this.player1.credits < this.player2.credits) { this.messageWin2(); } //P2 wins
        else                                                    { this.messageDraw(); };//Game Draw
    } else if (this.player1.credits <= 0 || this.player2.credits <= 0) {    //check if one of the players is broke
        if        (this.player1.credits <= 0)                   { this.messageWin1(); } //P1 Wins
        else if   (this.player2.credits <= 0)                   { this.messageWin2(); } //P2 wins
        else                                                    { this.messageDraw(); };//Game Draw
      };
    };

  this.updateChips = function () {                                          //Updating player values (with Payout - bet)
    $('#playerOneValue').text(this.player1.credits);                        //P1
    $('#playerTwoValue').text(this.player2.credits);                        //P2
  };
};//Game Objects & Functions END