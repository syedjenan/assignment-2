var pos = [0,0];
var snake1 = 15;
var falltopos1 = 5;
var snake2 = 23;
var falltopos2 = 13;
var ladder1 = 2;
var climbtopos1 = 12;
var ladder2 = 10;
var climbtopos2 = 20;

function Roll(user){
  out = document.getElementById("output");
  rolldie = Math.oor(Math.random() * 6) + 1;
  pos[user-1] += rolldie;
  var stumble = "";
  switch(pos[user-1]){
    case snake1:
    pos[user-1] = falltopos1;
    stumble = ", You stumble on a snake, go back to position ";
    break;
    case snake2:
    pos[user-1] = falltopos2;
    stumble = ", You stumble on a snake, go back to position ";
    break;
    case ladder1:
    pos[user-1] = climbtopos1;
    stumble = ", You stumble on a ladder, advance to postion ";
    break;
    case ladder2:
    pos[user-1] = climbtopos2;
    stumble = ", You stumble on a ladder, advance to postion ";
    break;
    default :
    stumble = ", move to position ";
    break;
  }

  if(pos[user-1] > 25){
    out.textContent += "Player "+user+" WON!!!\n...Game Over...";
    inps = document.getElementById("btn1");
    inps.disabled = true;
    inps = document.getElementById("btn2");
    inps.disabled = true;
  }
  else
  out.textContent += "Player "+ user + " rolls...Die: " + rolldie + stumble + pos[user-1] + "\n";
}
