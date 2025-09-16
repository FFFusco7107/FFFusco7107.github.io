// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let HeadSize = 70

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  shape()
}

function shape(){
  noStroke();
  fill(144,238,144);
  circle(width/2, height/2, HeadSize)
  rect((width-70)/2, (height)/2, HeadSize,50)
  rect((width/2)-(HeadSize/2), (height/2)-(HeadSize/10), HeadSize/10, 80)
  rect((width/2)+(HeadSize/2.5), (height/2)+(HeadSize/10), HeadSize/10, 67)
}

function Drawface(){
  fill(0)
  circle((width/2)-(Headsize/4), )
}
