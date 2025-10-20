// Cars Cars Cars (Vehicle Simulation)
// Lucas F.
// Oct 20, 2025
let myCar;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Car(100, 100);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
}

function drawRoad(){
  // draw a road with yellow dashed line
  fill(50);
  noStroke();
  rectMode(CORNERS);
  rect(0, height*0.20, width, height*0.80);
  // yellow line
  for(i = 0; i < width; i+= 60){
    fill(255,255,0);
    rect(i, height/2 + 5, i + 40, height/2 - 5);
  }
  
}

class Car{
  // Constructor
  constructor(y,d){
    this.x = random(width); this.y = y;
    this.s = random(3,20); this.d = d;
    this.c = color(random(255), random(255), random(255));
  }
  
  // Class Methods
  display(){
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 5, 10);
  }
}
