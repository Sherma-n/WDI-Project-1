// Psuedo Code
// 	1. Determine Player Values
// 		1.1 Set Player Default = 100
// 	2. Count Turns
// 		2.1 Default Count Turn = 0
// 	3. Place Wagers
// 		3.1 Get Chip Values
// 			3.1.1 For Player 1
// 			3.1.2 For Player 2
// 			3.1.3 If Chip Value > Chip
// 				3.1.3.1 If true will turn chip opaque and cannot be clicked
// 				3.1.3.2 If False, Nothing Happens
// 		3.2 Chips Drag and Drop
// 			3.2.1 On click will bring the wager to the mouse.
// 			3.2.2 On Drop will assign wager to BetBox.
// 		3.3 Deduct Chip Value From Player Value
// 			3.3.1 Deduct for Player 1
// 			3.3.2 Deduct for Player 2
// 		3.4 Sum Total Wager On Bet
// 			3.4.1 For Player 1
// 			3.4.2 For Player 2 
// 		3.5 Get Sum of Wagers On Bets
// 			3.5.1 Sum For Player 1
// 			3.5.2 Sum For Player 2
// 	4. Roll Dice
// 		4.1 Random Die Values 1-6
// 		4.2 Sum both Dices
// 	5. Get Bet Wins
// 		5.1 Check for Pair Values
// 			5.1.1 If True Check if any Pair hits
// 			5.1.2 If False Skip
// 		5.2 Check if Sum of Dices Satisfies Condition for Win
// 			5.2.1 If True Highlight the BetBox
// 			5.2.1 If False Skip it
// 	6. Calculate Payout
// 		6.1 Check if Bet Wins for Bet Box
// 			6.1.1 If True, Check if wager is present
// 				6.1.1.1 If True, Proceed to Calculate Payout
// 			6.1.2 If False, Skip
// 		6.2 Calculate Payout 
// 			6.2.1 Determine Wager Value & * by Payout.
// 			6.2.2 Determine if Wager is from Player 1 or 2.
// 				6.2.2.1 If Player One add payout to value of Player One.
// 				6.2.2.2 If Payer Two add Payout to value of Player 2.
// 	7. Add Payout to Player Value
// 		7.1 Add Payout to Player 1 & calculate total value 
// 		7.2 Add Payout to Player 2 & Calculate total Value
// 		7.3 Alert to show round Summary
// 			7.3.1 Get sum of Payouts 
// 			7.3.2 Get sum of Wagers 
// 			7.3.3 Get Total Sum
// 		7.4 Reset Wager for board to be 0
// 	8. Determine Winner
// 		8.1 Check if Player Value > 0.
// 			8.1.1 If true, nothing Happens
// 			8.1.2 If False, will check if player 1 or 2 = 0.
// 				8.1.2.1 If player 1 = 0, Player 2 Wins
// 				8.1.2.2 if Player 2 = 0 , Player 1 Wins
// 				8.1.2.3 Else, Nothing Happens
// 		8.2 Check if Round Number >= 5.
// 			8.2.1 If False, Nothing Happens
// 			8.2.2 If True, Check if player value 1 > player value 2.
// 				8.2.2.1 If True, Player 1 Wins, Display player value for both. highlight player 1
// 				8.2.2.2 If False, Player 2 Wins, Display player value for both, highlight player 2
//				8.2.2.3 Else, Game Draw, Will Display Value for both players.
// 	9. Reset the Game
// 		9.1 Reload the page.
// Event Listners
// 	On Click Wagers
// 	Drag Wagers to BetBoxes
// 	Unclick Wagers
// 	Roll button
// 	Closing Round Summary Alert
// 	Reset Button for Page

$( document ).ready(function() {
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
	var coinsTypes = [10,20,30,40,50];


//dices
	var dices = [];
	$('.gameBoard .topPanel .dices').each(function(index,value){
		var $dice = $(value);
		dices.push({	id: 	$dice.attr('id'),
						rolls:	$dice.attr('data-value'),				
		})
	});
//Players of the game.
	var game = [];
	$('.gameBoard .panelPlayer').each(function(index,value) {
		var $player = $(value);
		game.push({			id:		$player.attr('id'),
							player: $player.attr('data-player'),

							element:$player
		})
	})
//betBoxes & Setting payouts
	var betBoxes = [];
	$('.betting .bets').each(function(index,value){
		var $bet = $(value);
			betBoxes.push ({	id:		$bet.attr('id'),
								value:  $bet.data('value'),
								winCon: $bet.attr('data-winCon'),
								element:$bet
		});
	})
//player chips
	var playerchips = [];
	$('.panelPlayer .chips').each(function(index,value){
		var $chip = $(value);
		playerchips.push({		id: 	$chip.attr('id'),
								value:  $chip.data('value'),
								element:$chip  
		});
	});

/*
 *	Coin Object 
 */
var coin = function(value){
	var value = playerchips.getValue('value');

	$('.panelPlayer .chips').each(function(index,value){
		var $chip = $(value);
		player1chips.push({		id: 	$chip.attr('id'),
								value:  $chip.data('value'),
								element:$chip  
		});
	});

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

} // ENd Of Javascript




































