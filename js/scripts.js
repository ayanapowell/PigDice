// business logic
$(document).ready(function() {

  function Player(name, score) {
    this.name = name;
    this.score = score;
    //this.playerScore = score;
  };

  Player.prototype.addScore = function(total){
    this.score = this.score + total;
    alert("Total = " + this.score);

  }

  Player.prototype.resetScore = function(total){
    this.score = 0;
    alert("Total = " + this.score);

  }

  Player.prototype.showScore = function() {
    return "Hey, " + this.name + "! Your score is: " + this.score;
  }

//ui logic
var score = 0;
var name = "Anna";
var playerOne = new Player(name, score);

$('#roll').click(function() {
  var diceRoll =  Math.floor(Math.random() * 6 +1);

  if(diceRoll > 1) {
    alert("Diceroll = " + diceRoll);
    playerOne.addScore(diceRoll);
    $('#output').text(playerOne.showScore());
    return;
  } else if (diceRoll === 1) {
    alert("Diceroll = " + diceRoll);
    playerOne.resetScore(diceRoll);
    $('#output').text(playerOne.showScore());
    return;
  }
});
});
