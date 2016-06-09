/// 1. Define the bet types on html & bet object
/// 2. Append a text on html to show bet amounts
/// 3. RollDice
//






// Psuedo Code
//  1. Determine Player Values
//    1.1 Set Player Default = 100
//  2. Count Turns
//    2.1 Default Count Turn = 0
//  3. Place Wagers
//    3.1 Get Chip Values
//      3.1.1 For Player 1
//      3.1.2 For Player 2
//      3.1.3 If Chip Value > Chip
//        3.1.3.1 If true will turn chip opaque and cannot be clicked
//        3.1.3.2 If False, Nothing Happens
//    3.2 Chips Drag and Drop
//      3.2.1 On click will bring the wager to the mouse.
//      3.2.2 On Drop will assign wager to BetBox.
//    3.3 Deduct Chip Value From Player Value
//      3.3.1 Deduct for Player 1
//      3.3.2 Deduct for Player 2
//    3.4 Sum Total Wager On Bet
//      3.4.1 For Player 1
//      3.4.2 For Player 2
//    3.5 Get Sum of Wagers On Bets
//      3.5.1 Sum For Player 1
//      3.5.2 Sum For Player 2
//  4. Roll Dice
//    4.1 Random Die Values 1-6
//    4.2 Sum both Dices
//  5. Get Bet Wins
//    5.1 Check for Pair Values
//      5.1.1 If True Check if any Pair hits
//      5.1.2 If False Skip
//    5.2 Check if Sum of Dices Satisfies Condition for Win
//      5.2.1 If True Highlight the BetBox
//      5.2.1 If False Skip it
//  6. Calculate Payout
//    6.1 Check if Bet Wins for Bet Box
//      6.1.1 If True, Check if wager is present
//        6.1.1.1 If True, Proceed to Calculate Payout
//      6.1.2 If False, Skip
//    6.2 Calculate Payout
//      6.2.1 Determine Wager Value & * by Payout.
//      6.2.2 Determine if Wager is from Player 1 or 2.
//        6.2.2.1 If Player One add payout to value of Player One.
//        6.2.2.2 If Payer Two add Payout to value of Player 2.
//  7. Add Payout to Player Value
//    7.1 Add Payout to Player 1 & calculate total value
//    7.2 Add Payout to Player 2 & Calculate total Value
//    7.3 Alert to show round Summary
//      7.3.1 Get sum of Payouts
//      7.3.2 Get sum of Wagers
//      7.3.3 Get Total Sum
//    7.4 Reset Wager for board to be 0
//  8. Determine Winner
//    8.1 Check if Player Value > 0.
//      8.1.1 If true, nothing Happens
//      8.1.2 If False, will check if player 1 or 2 = 0.
//        8.1.2.1 If player 1 = 0, Player 2 Wins
//        8.1.2.2 if Player 2 = 0 , Player 1 Wins
//        8.1.2.3 Else, Nothing Happens
//    8.2 Check if Round Number >= 5.
//      8.2.1 If False, Nothing Happens
//      8.2.2 If True, Check if player value 1 > player value 2.
//        8.2.2.1 If True, Player 1 Wins, Display player value for both. highlight player 1
//        8.2.2.2 If False, Player 2 Wins, Display player value for both, highlight player 2
//        8.2.2.3 Else, Game Draw, Will Display Value for both players.
//  9. Reset the Game
//    9.1 Reload the page.
// Event Listners
//  On Click Wagers
//  Drag Wagers to BetBoxes
//  Unclick Wagers
//  Roll button
//  Closing Round Summary Alert
//  Reset Button for Page

$(document).ready(function() {
      //Define Default Global Variables
      //Turns: 5 to victory
      var turnCount = 0;
      // Player Wagers
      var playerWagers1 = 0;
      var playerWagers2 = 0;
      //total Wagers
      var wagerValue = 0;
      // Credits per user
      var defaultCredits = 100;
      // Coin types
      var coinsTypes = [10, 20, 30, 40, 50];


      //dices
      var dices = [];
      $('.gameBoard .topPanel .dices').each(function(index, value) {
        var $dice = $(value);
        dices.push({
          id: $dice.attr('id'),
          rolls: $dice.attr('data-value'),
        })
      });
      //Players of the game.
      var game = [];
      $('.gameBoard .panelPlayer').each(function(index, value) {
          var $player = $(value);
          game.push({
            id: $player.attr('id'),
            player: $player.attr('data-player'),

            element: $player
          })
        })
        //betBoxes & Setting payouts
      var betBoxes = [];
      $('.betting .bets').each(function(index, value) {
          var $bet = $(value);
          betBoxes.push({
            id: $bet.attr('id'),
            value: $bet.data('value'),
            winCon: $bet.attr('data-winCon'),
            element: $bet
          });
        })
        //player chips
      var playerchips = [];
      $('.panelPlayer .chips').each(function(index, value) {
        var $chip = $(value);
        playerchips.push({
          id: $chip.attr('id'),
          value: $chip.data('value'),
          element: $chip
        });
      });

      /*
       *  Coin Object
       */
      var coins = [];
      $('.panelPlayer .chips').each(function(index, value) {
        var $chip = $(value);
        coins.push({
          id: $chip.attr('id'),
          value: $chip.data('value'),
          element: $chip
        });
      });
      this.getValue = function(index, currentvalue) {
        return currentvalue;
      };
      /*
       *  Bet Object
       */


      var bet = function(payout, winCondition) {
        var coins = [];
        var payoutRatio = payout;
        this.win = winCondition;

      }

      /*
       *  Player Object
       */
      var player = function() {

        var name = "";
        var total = 0;



        function init() {
          total = defaultCredits;
        };
        init();
      }




      /*
       *  Game Object
       */
      var game = function() {

          var that = this;
          var bets = [];
          var player = [];
          var coins = [];
          var turn = 0;
          var dice = {}


          this.rollDice = function() {

            return {
              dice_1: Math.ceil(Math.random() * 6),
              dice_2: Math.ceil(Math.random() * 6),
              total: dice_1 + dice_2
            }
          }



          this.init = function() {

            bets = [];
            player[];
            coin = [];
            turn = 0;

            // init players
            that.player.push(new player());
            that.player.push(new player());

            // init bets
            that.bets.push(new bets(3, function() {
              return dice > 7;
            }));



            // init coins

          }

        } // ENd Of Javascript


















      /*

      $( document ).ready(function() {

      // Coin types
      var coinsTypes = [10,20,30,40,50];

      // Credits per user
      var defaultCredits = 100;

      //Player turncount
      var turnCount = 0;
      /*
       *  ADD TURN;
       */
      var nextTurn = function() {
          turnCount++;
        }
        /*
         *  Coin Object
         */
      var coin = function(value) {
        var coins = [];
        $('.panelPlayer .chips').each(function(index, value) {
          var $chip = $(value);
          coins.push({
            id: $chip.attr('id'),
            value: $chip.data('value'),
            element: $chip
          });
        });
        var value = 0;
        this.getValue = function(coin) {
          if (coins[].value === 10) {
            value = 10;
            return value;
          } else if (coins[].value === 20) {
            value = 20;
            return value;
          } else if (coins[].value === 30) {
            value = 30;
            return value;
          } else if (coins[].value === 40) {
            value = 40;
            return value;
          } else {
            value = 50;
            return value;
          }
        }
      }

      /*
       *  Bet Object
       */
      var betBoxes = [];
      $('.betting .bets').each(function(index, value) {
        var $bet = $(value);
        betBoxes.push({
          id: $bet.attr('id'),
          value: $bet.data('value'),
          winCon: $bet.attr('data-winCon'),
          element: $bet
        });
      });
      var bet = function(payout, winCondition) {
          var coin = [];
          var payoutRatio = payout;
          this.win = winCondition;
          var reward = 0;
          if (this.win === true) {
            reward = payoutRatio * coin;
            return reward;
          } else {
            reward = 0;
            return reward;
          }
        }
        /*
         *  Player Object
         */
      var player = function() {

        var name = " ";
        var total = 0;



        function init() {
          total = defaultCredits;
        };
        init();
      }




      /*
       *  Game Object
       */
      var game = function() {

        var that = this;
        var bets = [];
        var player = [];
        var coins = [];
        var turn = 0;
        var dice = {}


        this.rollDice = function() {
          return {
            dice_1: Math.ceil(Math.random() * 6),
            dice_2: Math.ceil(Math.random() * 6),
            total: dice_1 + dice_2
          }
        }



        this.init = function() {

          bets = [];
          player[];
          coin = [];
          turn = 0;

          // init players
          that.player.push(new player());
          that.player.push(new player());

          // init bets
          that.bets.push(new bets(3, function() {
            return dice > 7;
          }));



          // init coins

        }

      }











      //Drag and Drop Chips
      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
      }


      allowDrop(betBoxes);
      drag()



















      /*



      //Check if player can afford chip - add to placeWager Function
        function playerAfford (playerWager, wagerValue) {
          if (playerWager > wagerValue) {
        //If payer cannot afford, black background & remove pointer events.
            document.getElementsByClassName("chips").this.css("background-color", "rgba(0,0,0,0.6)");
            document.getElementsByClassName("chips").this.css("pointer-events", "none");
          } else {
            console.log("player has sufficient $"); //<------ Remove Later
          }
        };
      //wager Values for each chip type - add placeWager function
        function wagerValues () {
        //If text on wager = 10, value = 10 etc.
          if ((this).text() === 10) {
            wagerValue = 10;
          } else if ((this).text() === 20) {
            wagerValue = 20;
          } else if ((this).text() === 30) {
            wagerValue = 30;
          } else if ((this).text() === 40) {
            wagerValue = 40;
          } else if ((this).text() === 50) {
            wagerValue = 50;
          } else {
            wagerValue = 0;
          }
        };
      //Finding the origin of the chip (p1 or 2) - add to placeWager Function
        function chipFrom () {
          var playerWager = " ";
          var player1 = " ";
          var player2 = " ";
          if ((this).class() === "playerOneChips") {
            playerWager = "player1";
          } else if ((this).class() === "playerOneChips") {
            playerWager = "player2";
          } else {
            Alert("Error Player Chip not chosen");
          }
        };
      //Chips Drag and Drop
        $(function() {
          var $dragStart = $( ".chips" ),
            $dragStop = $( ".bets" ),
          $( ".draggable" ).draggable({
        //Chips on start drag
            start: function() {
              var wager = wagerValues() { return wagerValue };
              if (chipFrom() === "player1") {
          //On Startdrag will remove player value from pool
                player1Value = player1Value - wager;
              } else {
                player2Value = player2Value - wager;
              };
            },
        //wager on stop function
            stop: function() {
              var wager = wagerValues() { return wagerValue };
              var BetBoxWager = [playerOneBets, playerTwoBets];
              var playerOneBets = 0;
              var playerTwoBets = 0;
          //Calculating bets for each player in chips
              if (chipFrom() ==== "player1") {
                playerOneBets = playerOneBets + wager;
              } else {
                playerTwoBets = playerTwoBets + wager;
              };
          //Assigning wagers to betboxes
              var BetBoxWager = [playerOneBets, playerTwoBets];
            };
          });
      //RollDices --used in getWin
        function rollDices () {
        //Turn +1
          turnCount++;
        //For displaying in dice total
          var status = document.getElementById('dieResult');
        //Random rolls for 6 sided dices
          var d1 = Math.floor(Math.random() * 6) + 1;
          var d2 = Math.floor(Math.random() * 6) + 1;
        //Calculating dice totals
          var diceSum = d1 + d2;
        //Displaying roll results
          die1 = d1;
          die2 = d2;
          die1.innerHTML = d1;
          die2.innerHTML = d2;
        //For displaying in dice total
          status.innerHTML = "Dice total" + diceSum+".";
          console.log(die1);
          console.log(die2);
          console.log(diceSum);
        }
      //Get bet Wins
        function getBetWins () {
        //If Pair is Rolled
          if (die1 === die2) {
        //Win Condition for the pairs & Highlight Box + push into win array.
            if (die1 === 1) {
              betBox5.css("background", "red");
              boxWin.push("betBox5");
            } else if (die1 === 2) {
              betBox6.css("background", "red");
              boxWin.push("betBox6");
            } else if (die1 === 3) {
              betBox7.css("background", "red");
              boxWin.push("betBox7");
            } else if (die1 === 4 ) {
              betBox8.css("background", "red");
              boxWin.push("betBox8");
            } else if (die1 === 5 ) {
              betBox9.css("background", "red");
              boxWin.push("betBox9");
            } else {
              betBox10.css("background", "red");
              boxWin.push("betBox10");
            };
        // Win Condition for the big/Small Bets
          } else if {
            var Bbets = document.getElementsByClassName(".betsBS .betValue .winValue").getElementById("#betBig");
            if (diceSum >= Bbets.html()) {
              betBox1.css("background", "red");
              boxWin.push("betBox1");
            } else {
              betBox4.css("background", "red");
              boxWin.push("betBox4");
            }
        //Win Condition for individual rolls.
          } else if {
            var numBets = document.getElementsByClassName(".betsNum .betValue .winValue");
            if (diceSum == numBets.html()) {
              this.css("background", "red");
        //push Win var into boxWin.
              boxWin.push(this);
            } else {
              console.log("Error!, No number in dices")// <--------------------------------------------------------Remove Afterwards
              }
        //Win Condition for odd/even
          } else if {
            var Ebets = document.getElementsByClassName(".betsOE .betValue .winValue").getElementById("#betEven").html();
            var Obets = document.getElementsByClassName(".betsOE .betValue .winValue").getElementById("#betOdd").html();
            if (diceSum%2 === 0) {
              Ebets.css("background", "red");
              boxWin.push(Ebets);
            } else {
              Obets.css("background, red");
              boxWin.push(Obets);
            };
          } else {
            console.log("ERRROR, no WInner??");// <--------------------------------------------------------Remove Afterwards
          };
        };
      //resetting all wagers and bets
        function resetbets () {
          boxWin = [];
          wagerValue = 0;
          playerWager = " ";
          playerOneBets = 0;
          playerTwoBets = 0;
        }
      // Calculate Payout
        //Setting Payout atributes
        function Payout ([arr]) {
          //loop through the win elements.
          for (var i=0; i>=arr.length; i++) {
            var payoutMulti = arr[i].getAttribute("payout");
            //multiply wager value against the payout
            var payTotal = wagerValue * payoutMulti;
            //add payout to total value
            if function (chipFrom) (playerWager === "player1") {
              player1Value = player1Value + payTotal;
            } else if function (chipFrom) (playerWager === "player2") {
              player2Value = player2Value + payTotal;
            } else {
              console.log("Error no player to pay to!"); // <--------------------------------------------------------Remove Afterwards
            };
          };
          alert("ROUND SUMMARY" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
          resetbets();
        };
      //Check for Winner
        function checkWinner () {
          //check if turncount = 5, if so player with higher score wins.
          if (turnCount >= 5) {
            if (player1Value > player2Value) {
              alert("PLAYER 1 WINS!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            } else if (player2Value > player1Value) {
              alert("PLAYER 2 WINS!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            } else {
              alert("Draw Game!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            };
          } else {
            //check if any player's value = 0, if so, the opposing wins.
            if (player1Value <= 0) {
              alert("PLAYER 2 WINS!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            } else if (player2Value <= 0) {
              alert("PLAYER 1 WINS!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            } else {
              alert("Draw Game!" + " Player 1 score =" + player1Value + " Player 2 score =" + player2Value);
            };
          };
        }
      //resetting the game
        $('#resetGame').click(function() {
          location.reload();
        });


      // initializing functions
      var initialize = function() {

      }


      //  // $('#p1Chip10').attr('chipValue', '10').attr('chipFrom','p1');
      //

      /*
      var p1C10 = document.getElementById ('#p1Chip10');


      var player2chips = [];
      $('.player2 .chips').each(function(index, value){
        var $chip = $(value);
        player2chips.push( {  id:    $chip.attr('id'),
                    value:   $chip.data('value'),
                    element: $chip
                  });
      });


      $(player2chips[0].element).attr('payout','5');







      */


    if (dice.dice1 === dice2) { winners.push("pair" + dice1);
    } else if {
        if (total >= 7) { winners.push("big");}
        else { winners.push("small"); };
    } else if {
        if (total%2 === 0) { winner.push("even");}
        else { winner.push("odd"); }
    } else { winners.push("bets" + total) };




          case (this.dice.total%2 === 0):
        this.winners.push("even");
      case (this.dice.total%2 !== 0):
        this.winners.push("odd");


              case (this.dice.total >= 7):
        this.winners.push("big");
      case (this.dice.total <= 6):
        this.winners.push("small");






            switch (true) {
      case (this.dice.dice1 === this.dice.dice2):
        this.winners.push("pair" + this.dice.dice1);
      case (this.dice.total > 1):
        this.winners.push("bets" + this.dice.total);
      switch ((this.dice.total)%2 === 0) {
        case (true):
          this.winners.push("even");
        case (false):
          this.winners.push("odd");
      };
      switch (this.dice.total > 6) {
        case (true):
          this.winners.push("big");
        case (false):
          this.winners.push("small");
      };
    }





          if (this.dice.dice1 === this.dice.dice2) {
        this.winners.push("pair" + this.dice.dice1);
      } else if (this.dice.total > 1) {
        this.winners.push("bets" + this.dice.total);
      } else if ((this.dice.total%2) === 0) {
        this.winners.push("even");
      } else if ((this.dice.total%2) !== 0) {
        this.winners.push("odd");
      } else if ((this.dice.total) > 6) {
        this.winners.push("big");
      } else if ((this.dice.total) < 7) {
        this.winners.push("small");
      } else {alert("no Winner? something is wrong.")}
  console.log(this.dice.dice1 + " " + this.dice.dice2 + " " + this.dice.total)
  };





        if (this.dice.dice1 === this.dice.dice2) {
        this.winners.push("pair" + this.dice.dice1);
      } else if (this.dice.total > 1) {
        this.winners.push("bets" + this.dice.total);
      } else if ((this.dice.total%2) === 0) {
        this.winners.push("even");
      } else if ((this.dice.total%2) !== 0) {
        this.winners.push("odd");
      } else if ((this.dice.total) > 6) {
        this.winners.push("big");
      } else if ((this.dice.total) < 7) {
        this.winners.push("small");
      } else {alert("no Winner? something is wrong.")}
  console.log(this.dice.dice1 + " " + this.dice.dice2 + " " + this.dice.total)
  };
}