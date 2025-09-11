// Project Title
// Lucas F.
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Coordinate Systems and User Events
// Lucas F.
// Interactive programs
// A first look at interactive programs with p5.js

function setup() { // runs ONCE at the start
  createCanvas(400, 400);
  print(windowWidth, windowHeight, width, height);
  // windeoWidth: current browser width
  // width: canvas width
  
}

function draw() { // runs OVER and OVER targeting 60 fps
  // STRIVE to keep draw() clean and tidy

  background(220); // draws a solid rectangle
  // 0 = black  255 = white
  drawTwoCircles();

}

function drawTwoCircles() { // [ALT] [SHIFT] [F] -> Autoformat
  
  // draws two circles, one at a fixed location
  // one at the mouse location

  // Draw order:
  // Later thing is "drawn" (further down in draw())
  // The higher it is in the draw stack
  fill(0, 255, 0);
  // R, G, B
  circle(mouseX, mouseY, 30)

  circle(width/2, height/2, 100)
}
