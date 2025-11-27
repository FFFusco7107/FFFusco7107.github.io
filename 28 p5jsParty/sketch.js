// PS Party

let shared = {painting : [], invert: false};
let c;

const colors = [
  "#ee6666",
  "#eeee66",
  "#66ee66",
  "#66eeee",
  "#6666ee",
  "#ee66ee",
];

function pickColor(){
  return random(colors);
}

function mousePressed(){
  
  shared.painting.push([mouseX,mouseY,c]);
  c = pickColor();
}

function preload(){
  partyConnect("wss://demoserver.p5party.org", "cs30party3")
  shared = partyLoadShared("shared", shared);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = pickColor();
  
}

function renderPaint(){
  for(let p of shared.painting){
    fill(p[2]);
    circle(p[0], p[1], 30);
  }
}

function draw() {
  background(220);
  renderPaint();
}

