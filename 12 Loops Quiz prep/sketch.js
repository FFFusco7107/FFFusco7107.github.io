// Loops Quiz prep
// Lucas F
// Oct 6,2025




let gridSize = 40; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function grid(){
  // draw a grid or something 
   let x = 0;
   strokeWeight(10);
  while (x < width){ // x: 0, 40, 80, 120
    let y = 0;
    while (y < height){
      if(abs(width/2 - x) > 100){
        point(x,y); 
      }
      
      y += gridSize; 
    }
    x += gridSize; 
  }
}

function draw() {
  background(220);
  grid();
}

