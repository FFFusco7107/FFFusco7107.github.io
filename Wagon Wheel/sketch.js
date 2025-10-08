// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(225);
  angleMode(DEGREES);
  drawBasicGrid(220);
  drawWheel();
}

function drawWheel(){
  let numLines = 40;
  let angle = 360/numLines;
  push();
  translate(200,200);
  circle(0,0,150)
  for(i = 0; i < 4; i ++){
    line(0,0,75,0);
    rotate(90);
  }



  pop();

}


function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}