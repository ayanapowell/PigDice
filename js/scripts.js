// business logic
$(document).ready(function() {

  function Player(name, score) {
    this.name = name;
    this.score = score;
  };
  Player.prototype.addScore = function(total){
    this.score = this.score + total;
  }
  Player.prototype.resetScore = function(total){
    this.score = 0;
  }
  Player.prototype.showScore = function() {
    return "Your total is: " + this.score;
  }
//ui logic
  var score = 0;
  var name = "Anna";
  var playerOne = new Player(name, score);
  var playerTwo = new Player(name, score);
  var holdScoreOne = [];
  var holdScoreTwo = [];
  // Player One Roll
  $('#rollOne').click(function() {
    var diceRoll =  Math.floor(Math.random() * 6 +1);

    if(diceRoll > 1) {
      playerOne.addScore(diceRoll);
      $('#output1 .diceroll').text("Hey Player 1, you rolled a " + diceRoll);
      $('#output1 .total').text(playerOne.showScore());
      return;
    } else if (diceRoll === 1) {
      playerOne.resetScore(diceRoll);
      $('#output1 .diceroll').text("Hey Player 1, you rolled a " + diceRoll);
      $('#output1 .total').text(playerOne.showScore());
      $(".turn1").show();
      $(".player1 button").prop('disabled', true);
      $(".player2 button").prop('disabled', false);
      return;
    }
  });
  $('#holdOne').click(function() {
    holdScoreOne.splice(0, 1, playerOne.score);
    console.log(holdScoreOne);
    $(".player2 button").prop('disabled', false);
    $(".player1 button").prop('disabled', true);
    $(".turn2").hide();
    if (holdScoreOne === 100){
      $("#output").text("<h1> Player One Wins!!!!</h1>");
    }
  });
  // Player Two Roll
  $('#rollTwo').click(function() {
    var diceRoll =  Math.floor(Math.random() * 6 +1);

    if(diceRoll > 1) {
      playerTwo.addScore(diceRoll);
      $('#output2 .diceroll').text("Hey Player 2, you rolled a " + diceRoll);
      $('#output2 .total').text(playerTwo.showScore());
      return;
    } else if (diceRoll === 1) {
      playerTwo.resetScore(diceRoll);
      $('#output2 .diceroll').text("Hey Player 2, you rolled a " + diceRoll);
      $('#output2 .total').text(playerTwo.showScore());
      $(".turn2").show();
      $(".turn1").hide();
      $(".player2 button").prop('disabled', true);
      $(".player1 button").prop('disabled', false);
      return;
    }
  });
  $('#holdTwo').click(function() {
    holdScoreTwo.splice(0, 1, playerTwo.score);
    console.log(holdScoreTwo);
    $(".player2 button").prop('disabled', true);
    $(".player1 button").prop('disabled', false);
    $(".turn1").hide();
    if (holdScoreTwo === 100){
      $("#output").text("<h1> Player Two Wins!!!!</h1>");
    }
  });
});
