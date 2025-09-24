// Working with Images and Random() and Noise()
// Lucas F. 
// Sept 24, 2025

let x1, y1, x2, y2; 
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.01;
  // "noiseSpeed" controls how connected our random noise() values are. 
let minSize = 5; let maxSize = 300; 

let mX, mY; // move x and y

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  mY = height*0.3
  //frameRate(10);
}

function noiseMove(){
  // use random noise to set the xposition of a circle
  mX = noise(noiseTime);
  mX = map(mX, 0, 1, minSize, maxSize);
  fill(210,20, 70)
  circle(mX,mY, 50)
  noiseTime += noiseSpeed;
}

function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  noiseMove();
}

function noiseCircle(){
  // draw a fixed circle with randomly change(bus smooth) diameters
  d2  = noise(noiseTime); // yield value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  fill(255,50,150);
  circle(x2,y2,d2);
  noiseTime += noiseSpeed;
}

function randomCircle(){
  // draw a fixed circle with randomly changing diameter
  fill(50, 150, 250);
  d1 = random(minSize, maxSize);
  circle(x1,y1,d1);
}
