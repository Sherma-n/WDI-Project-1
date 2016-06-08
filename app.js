$(document).ready(function(){
  // HTML Elements
  var $rollGameBtn = $('#rollGame');
  var $chips       = $('.chips');
  var $bets       = $('.bets');

  // Game Settings
  var defaultCredits = 100;

  // Game Container Object
  var game = new Game(defaultCredits);

  // System Variables



  // Event Listeners
  $rollGameBtn.on('click', function(){
    var winners = game.winners;
    game.rollDice();
    game.checkWinners();
    // game.highlightWinner();
    // game.payout();
    // game.clearTable();

  });

  $chips.on('click', function(){
    var $chip   = $(this);
    var player  = $chip.data("player");
    var betSize = $chip.data("value")

    game.currentPlayer        = game[player];
    game.currentPlayerBetSize = betSize;
  });

  $bets.on('click', function(){
    var $OE           = $(this);
    var betType       = $OE.data("bet-type");
    var currentPlayer = game.currentPlayer;
    var betSize       = game.currentPlayerBetSize;
    if (currentPlayer.credits < betSize) {
      alert("Insufficient to make bet");                               //<Change Later>>
    } else {
      currentPlayer.credits       -= betSize;
      currentPlayer.bets[betType] += betSize;
      $ (this).text('Player' + " bets " + betSize);
      $ (this).prepend('<img id="theImg" style="max-width: 100px" src="./PokerChips.png"/>')
    }
  });

  window.debug = game;
});

