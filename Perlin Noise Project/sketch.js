// Perlin Noise Project (Terrain Generation) 
// Lucas F.
// Sept 29, 2025

let rectWidth = 1; 
let noiseTime = 0; 
let noiseTimeStart;
let NoiseOff = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // for now, generate the terrain once 
  //generateTerrain();
  noiseTimeStart = noiseTime;
}

function generateTerrain(){
  // Use a Loop to generate and draw several rectangles side to side
  // to look like 2D terrain 
  rectMode(CORNERS);
  stroke(0);
  noFill();
  let highestPeak = 0;
  let peakY = 0;
  let peakX = 0;
  let sumY = 0;
  let AvgY;


  for(let x = 0; x < width; x += rectWidth){
    // generate a random height

    rectHeight = noise(noiseTime);
    rectHeight = map(rectHeight, 0, 1, height* 0.3, height* 0.8)

    // calculate the upper-right corner of rect
    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2); // draw the rectangle
    noiseTime += NoiseOff;  // change noiseTime of each rectangle by noiseOff (0.01)

    // check for highest peak
    if(rectHeight > highestPeak){
      highestPeak = rectHeight;
      peakX = x2
      peakY = y2
    }
    sumY = sumY + rectHeight
    AvgY = sumY/x  
  }
   



  noiseTimeStart += NoiseOff;
  noiseTime = noiseTimeStart;
  drawFlag(peakX, peakY); 
  drawAverage(AvgY);


  rectMode(CORNERS); // revert to default 
}

function keyPressed(){
  // decrease and icrease the rectangle size with left and right arrows
  if(keyCode === 37){
    if(rectWidth > 1){
      rectWidth -=  1;
    } 
  }

  if(keyCode === 39){
    if(rectWidth < 10){
     rectWidth += 1; 
  }
}
}

function draw() {
  // don' need to use draw UNTIL animating the terrain ( panning )
  background(220);
  generateTerrain();
  
}

function drawFlag(x,y){
  rectMode(CORNER); 
  noStroke();
  fill(0); 
  rect(x,y,1,height*-0.05);
  noStroke();
  fill(255,0,0);
  triangle(x+1.5,y+height*-0.05, x+1.5, y+height*-0.03, x+height*0.03, y+height*-0.04);
}

function drawAverage(y){
  rectMode(CENTER);
  noStroke();
  fill(255,0,0,75);
  rect(width/2, height-y, width, height*0.01); 
}