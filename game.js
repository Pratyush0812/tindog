var started = false;
var level = 0;
let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function playSound(name){
  var audio = new Audio('sounds/'+name+'.mp3');
  audio.play();
}

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){$("#"+currentColour).removeClass("pressed");},100);
}
function startOver(){
  level =0;
  started = false;
  gamePattern = [];
}
function gameOver(){
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){$("body").removeClass("game-over");},200);
  $("#level-title").text("Game Over, Press Any Key to Restart");
}
function checkAnswer(currentlevel){
  if(userClickedPattern[currentlevel]!==gamePattern[currentlevel]){
    gameOver();
    startOver();
    return;
  }
  if(level===currentlevel+1)
  setTimeout(function(){nextSequence();},800);
}

function nextSequence(){
  userClickedPattern.splice(0, userClickedPattern.length);
  level++;
  $("#level-title").text("Level "+level);
  let randomNumber =  Math.floor(Math.random()*4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}
userClickedPattern =[];
$(".btn").click(function(event){
   let userChosenColour =this.id;
   userClickedPattern.push(userChosenColour);
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
});
//Starting the Game
$(document).keydown(function(){
  if(started===false){
  $("#level-title").text("Level 0");
  started = true;
  nextSequence();
  };

});
