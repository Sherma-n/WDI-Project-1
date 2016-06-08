// Coin types
var coinsTypes = [10,20,30,40,50];

// Credits per user
var defaultCredits = 100;

/*
 *	Coin Object
 */
var coin = function(value){
	var value = value;
	var coins = [];
	$('.panelPlayer .chips').each(function(index,value){
		var $chip = $(value);
		coins.push({
      id: 	   $chip.attr('id'),
			value:   $chip.data('value'),
			element: $chip
		});
	});

	// this.getValue = function(){
	// 	value = .indexof(coins[]).data('value');
	// }
}

$('.betting .bets').each(function(index,value){
	var $bet = $(value);
		betBoxes.push ({	id:		$bet.attr('id'),
						  value:  $bet.data('value'),
							winCon: $bet.attr('data-winCon'),
							element:$bet
	});
})

var winCondition = function (value) {
	var value = value;
	// value = indexOf(betBoxes[]).attr('data-winCon');
	return value;
}

var payout = function (value) {
 	var value = value;
 	// value = indexOf(betBoxes[]).data('value');
 	return value;
}

// ====================
// Bet Object
// ====================
var Bet = function(payout, winCondition) {
	var coin = [];
	var payoutRatio = payout;
	this.win = winCondition;
	if (this.win === true) {
		winnings = payoutRatio * coin[];
		return winnings;
	} else {}
}

// ====================
// Player Object
// ====================
var Player = function(defaultCredits){
	var name = "";
	var total = defaultCredits;
}

// ====================
// Game Object
// ====================
var Game = function() {
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
		};
	};

	this.init = function(){

		bets=[];
		player[];
		coin=[];
		turn=0;

		// init players
		that.player.push( new Player(defaultCredits));
		that.player.push( new Player(defaultCredits));

		// init bets
		that.bets.push( new bets(3, function(){
			return dice > 7;
		}));
		// init coins
	};
};
