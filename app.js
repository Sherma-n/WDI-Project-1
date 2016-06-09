$(document).ready(function(){
  // HTML Elements
  var $rollGameBtn = $('#rollGame');
  var $chips       = $('.chips');
  var $bets       = $('.bets');

  // Game Settings
  var defaultCredits = 100;

  // Game Container Object
  var game = new Game(defaultCredits);

  // Event Listeners
  $rollGameBtn.on('click', function(){
    game.clearTable();
    var winners = game.winners;
    game.rollDice();
    game.checkWinners(); // creates array of key names as strings
    game.highLightWins ();
    game.payout();
    game.updateChips();

    // game.highlightWinner(); // takes the array and highlight the boxes
    // game.payout(); // take the array and for both p1 and p2
  });

  $chips.on('click', function(){
    game.checkGameWinner();
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
      $ (this).css("background-image", "url(http://customcandyexpress.com/graphics/denom.png)");
      $ (this).css("border", "3px solid white");
      $ (this).css("background-size", "contain");
      $ (this).css("background-repeat", "no-repeat");
    }
  });

  $('#resetGame').on('click', function(){
    location.reload();
  });

  window.debug = game;
});

