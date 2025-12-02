// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  cube(45);
  // ground
  fill(0);
  rect(0, height*0.7, width, height);
}

function cube(s){
// cube that jumps when pressing spacebar
square(width*0.2, height*0.7 - s, s);

}
