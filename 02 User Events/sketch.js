// User Events + Day 1 Challenge
// Lucas F. 
// Sept 11, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// GLOBAL VARIABLES HERE...
// can only work with "simple" data in this code
// section of code. No system variables are available until
// in setup(), ... after canvas is made
let circlecolor = false;
let currentcolor = "white"

let x;   let y =300;
let tsize = 50; // for text font size
//   declaration    initialization


function setup() {
  createCanvas(400, 400);
  x = width/2;
}

function draw() {
  background(220);
  challenge(); // coorinate system challenge
  movement();
  rect(x, y, 60, 30);
  mouseReport();
}

function mouseReport(){
  // inspect some of the built-ins (system variables)
  // for working with the mouse
  fill(0);
  let src = mouseX + " , " + mouseY + " , " + mouseIsPressed;
  text(src, mouseX, mouseY);

  if(mouseIsPressed){
    
  }
}

function mousePressed(){
  // function automatically called ONCE per mouse click interaction
  tsize = random(10,80);
}

function movement(){
  // check for keyboard pressed each frame
  // and move the rectangle accordingly
  if (keyIsDown(LEFT_ARROW)) x-=5;
  if (keyIsDown(RIGHT_ARROW)) x+=5;
  if (keyIsDown(UP_ARROW)) y-=5;
  if (keyIsDown(DOWN_ARROW)) y+=5;
}








function keyPressed(){
  // this is a special EVENT function, gets automatically
  // called anytime a keyboard button is pressed

  print("key was pressed");
  if (key === "g") currentcolor = "green";
  else if(keyCode === CONTROL) currentcolor = "aqua";
  circlecolor = !circlecolor;

  // how to tell which key is pressed???
 
 }

function challenge(){
  // draw 5 hollow circles, in 4 corners and center position
  noFill(); 

  if(circlecolor){ // circlecolor === true
    fill(currentcolor);
  }
  // 5 circles GGG
  circle(0, 0, 50); 
  circle(0, height, 50); 
  circle(width, 0, 50); 
  circle(width, height, 50); 
  circle(width/2, height/2, 50); 
}
