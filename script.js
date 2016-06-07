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
	//The Dices
	var die1 = document.getElementById('dieOne');
	var die2 = document.getElementById('dieTwo');
	var diceSum = 0;
	//Turns: 5 to victory
	var turnCount = 0;
	//Player Values
	var player1Value = document.getElementById('playerOneValue');
	var player2Value = document.getElementById('playerTwoValue');
	// Player Wagers
	var playerWagers1 = 0;
	var playerWagers2 = 0;
	//wager From
	var playerWager = " ";
	//total Wagers
	var wagerValue = 0;
	// CheckBetWin
	var checkBetWin = 0;
	var checkWinner = 0;
	//betBoxes
	var betBoxes = [];
	var betBox1 = document.getElementById ('betBig')
	var betBox2 = document.getElementById ('betEven')
	var betBox3 = document.getElementById ('betOdd')
	var betBox4 = document.getElementById ('betSmall')
	var betBox5 = document.getElementById ('betPairOne')
	var betBox6 = document.getElementById ('betPairTwo')
	var betBox7 = document.getElementById ('betPairThree')
	var betBox8 = document.getElementById ('betPairFour')
	var betBox9 = document.getElementById ('betPairFive')
	var betBox10 = document.getElementById ('betPairSix')
	var betBox11 = document.getElementById ('betNum2')
	var betBox12 = document.getElementById ('betNum3')
	var betBox13 = document.getElementById ('betNum4')
	var betBox14 = document.getElementById ('betNum5')
	var betBox15 = document.getElementById ('betNum6')
	var betBox16 = document.getElementById ('betNum7')
	var betBox17 = document.getElementById ('betNum8')
	var betBox18 = document.getElementById ('betNum9')
	var betBox19 = document.getElementById ('betNum10')
	var betBox20 = document.getElementById ('betNum11')
	var betBox21 = document.getElementById ('betNum12')


//Plus one to turnCount - added to diceRoll function
function turnPlusOne () {
	turnCount += 1;
};
//Check if player can afford chip - add to placeWager Function
function chipFrom () {
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

















































//dice rolls
function roll() {

	rollCount++; // roll count to know if it is the first time rolling of dice or not
	
	// rolling the 2 dice by using a for loop
    for (i = 1; i <= 2; i++) {

        var rollValue = Math.floor((Math.random() * 6) + 1);
        if (i == 1) {



}
