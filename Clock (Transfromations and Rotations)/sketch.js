// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let d = 300;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  angleMode(DEGREES);
  
}

function draw() {
  background(220);
  drawClock();
}


function drawClock(){
  push();
  // draw clock
  translate(200,200)
  noFill();
  strokeWeight(5);
  point(0,0)
  circle(0,0, d);
  for(i = 0; i < 12; i++){
    line(150-20, 0, 140, 0);
    rotate(30);
  }
  strokeWeight(1);
  for(i = 0; i < 60; i++){
    line(150-20, 0, 140, 0);
    rotate(6);
  }

  // hour hand
  rotate(((frameCount/10)/60)/60);
  line(0,0, 0, -50);

  // minute hand
  rotate((frameCount/10)/60);
  line(0,0, 0, -90);

  // second hand
  rotate(frameCount/10); 
  stroke(255,0,0);
  line(0,0,0,-110);
  stroke(0);



  pop();
}
