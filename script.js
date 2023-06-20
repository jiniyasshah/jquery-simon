var keys = ["red", "green", "blue", "yellow"];
var userKey = [];
var gameKey = [];
var started = false;
var level = 0;
started = false;
$(document).keypress(function() {
    if(!started)
    {
    $("#level-title").text("Level " + level);
      nextSequence();
    started=true;
    }}
  );

$(".btn").click(function ()
{
 var getID = this.id;
 userKey.push(getID);
 $("#" + getID).fadeIn(100).fadeOut(100).fadeIn(100);

 check(userKey.length-1 );
 }
)

function nextSequence()
{
    userKey = [];
    
    level++;
    var randomnum = Math.floor(Math.random()*4);
    var toPush = keys[randomnum];
    gameKey.push(toPush);
    buttonPress(toPush);
    buttonSound(toPush);
    
}

function check(currentValue)
{

   if (gameKey[currentValue] === userKey[currentValue]) {

        if (userKey.length === gameKey.length){
        setTimeout(function () {
            
        $("#level-title").text("Level " + level);
          nextSequence();
        }, 1000);
      }
    }
    else
    {
        buttonSound("wrong");
        $("body").addClass("game-over");
        
            
            $("#level-title").text("Game Over"); 
           
     
            
 

        setTimeout(function () {
            $("body").removeClass("game-over");
            $("#level-title").text("Game Over, Press A Key to Start "); 
           
     
            }, 1000);
       
        startOver();
    }
    


}

function buttonPress(color)
{
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}


function buttonSound(color)
{
   var audio = new Audio("./sounds/"+color+".mp3");
   audio.play();
}

function startOver()
{
    userKey = [];
    gameKey = [];
    level = 0;
    started = false;
}

