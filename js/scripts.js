// business logic
$(document).ready(function() {

  function Player(name, score) {
    this.name = name;
    this.score = score;
    //this.playerScore = score;
  };

  Player.prototype.addScore = function(total){
    this.score = this.score + total;
  }

  Player.prototype.resetScore = function(total){
    this.score = 0;

  }

  Player.prototype.showScore = function() {
    return "Hey, " + this.name + "! Your total is: " + this.score;
  }

//ui logic
var score = 0;
var name = "Anna";
var playerOne = new Player(name, score);
var playerTwo = new Player(name, score);

// Player One Roll
$('#rollOne').click(function() {
  var diceRoll =  Math.floor(Math.random() * 6 +1);

  if(diceRoll > 1) {
    playerOne.addScore(diceRoll);
    $('.diceroll').text("Hey Player 1, you rolled a " + diceRoll);
    $('.total').text(playerOne.showScore());
    return;
  } else if (diceRoll === 1) {
    playerOne.resetScore(diceRoll);
    $('.diceroll').text("Hey Player 1, you rolled a " + diceRoll);
    $('.total').text(playerOne.showScore());
    return;
  }
});

// Player Two Roll
$('#rollTwo').click(function() {
  var diceRoll =  Math.floor(Math.random() * 6 +1);

  if(diceRoll > 1) {
    playerTwo.addScore(diceRoll);
    $('.diceroll').text("Hey Player 2, you rolled a " + diceRoll);
    $('.total').text(playerTwo.showScore());
    return;
  } else if (diceRoll === 1) {
    playerTwo.resetScore(diceRoll);
    $('.diceroll').text("Hey Player 2, you rolled a " + diceRoll);
    $('.total').text(playerTwo.showScore());
    return;
  }
});
});
