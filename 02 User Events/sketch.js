// User Events + Day 1 Challenge
// Lucas F. 
// Sept 11, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  challenge(); // coorinate system challenge
}

function challenge(){
  // draw 5 hollow circles, in 4 corners and center position
  noFill(); 

  // 5 circles 
  circle(0, 0, 50); 
  circle(0, height, 50); 
  circle(width, 0, 50); 
  circle(0, 0, 50); 
  circle(0, 0, 50); 
}

