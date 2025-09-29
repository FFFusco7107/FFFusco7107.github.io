// Starter Code for our Terrain Generation Assignment
// Lucas F. 
// Sept 29, 2025

let rectWidth = 5; 

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
    // NOTE!! change from random() to noise()

    let rectHeight = random(50,500);

    // calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);
  }


  rectMode(CORNERS); // revert to default 
}

function draw() {
  // don' need to use draw UNTIL animating the terrain ( panning )

  // background(220);
}
