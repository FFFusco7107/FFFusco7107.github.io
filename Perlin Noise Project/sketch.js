// Perlin Noise Project (Terrain Generation) 
// Lucas F.
// Sept 29, 2025

let rectWidth = 1; 
let noiseTime = 0; 
let NoiseOff = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for now, generate the terrain once 
  generateTerrain();
}

function generateTerrain(){
  // Use a Loop to generate and draw several rectangles side to side
  // to look like 2D terrain 
  rectMode(CORNERS);

  for(let x = 0; x < width; x += rectWidth){
    // generate a random height

    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height* 0.3, height* 0.8)

    // calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2); // draw the rectangle
    noiseTime += NoiseOff;  // change noiseTime of each rectangle by noiseOff (0.01)
  }


  rectMode(CORNERS); // revert to default 
}

function KeyPressed(){
  if 
}

function draw() {
  // don' need to use draw UNTIL animating the terrain ( panning )

  // background(220);
}
