$( document ).ready(function() {

// Coin types
var coinsTypes = [10,20,30,40,50];

// Credits per user
var defaultCredits = 100;

/*
 *	Coin Object 
 */
var coin = function(value){
	var value = value;

	this.getValue = function(){
		return value;
	}
}

/*
 *	Bet Object 
 */
var bet = function(payout, winCondition) {
	var coins = [];
	var payoutRatio = payout;
	this.win = winCondition
}

/*
 *	Player Object 
 */
var player = function(){

	var name = "";
	var total = 0;



	function init(){
		total = defaultCredits;
	};
	init();
}




/*
 *	Game Object 
 */
var game = function() {

	var that = this;
	var bets = [];
	var player =[];
	var coins = [];
	var turn = 0;
	var dice = {}


	this.rollDice = function() {

		return {
			dice_1: Math.ceil( Math.random() * 6 ),
			dice_2: Math.ceil( Math.random() * 6 ),
			total: dice_1 + dice_2
		}
	}



	this.init = function(){

		bets=[];
		player[];
		coin=[];
		turn=0;

		// init players
		that.player.push( new player());
		that.player.push( new player());

		// init bets
		that.bets.push( new bets(3, function(){
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


//	// $('#p1Chip10').attr('chipValue', '10').attr('chipFrom','p1');
//	

/*
var p1C10 = document.getElementById ('#p1Chip10');
 

var player2chips = [];
$('.player2 .chips').each(function(index, value){
	var $chip = $(value);
	player2chips.push( {	id: 	 $chip.attr('id'), 
							value: 	 $chip.data('value'),
							element: $chip
						});
});

*/

$(player2chips[0].element).attr('payout','5');






*/
