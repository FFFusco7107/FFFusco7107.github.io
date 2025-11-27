// Libraries (GUI)
// Lucas F
// Nov 27 2025

let d = 100;
let gui;
let s;


function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui();
  s = createSlider("diameter", width/2,height*0.8, 128,32,40,400);
}

function draw() {
  background(220);
  circle(width/2,height/2,s.val);
  drawGui();
}
