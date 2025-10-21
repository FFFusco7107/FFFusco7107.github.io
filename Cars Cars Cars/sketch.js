// Cars Cars Cars (Vehicle Simulation)
// Lucas F.
// Oct 20, 2025
let myCar;
function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Car(300, 1);
}

function draw() {
  background(220);
  drawRoad();
  myCar.display();
  myCar.move();
}

function drawRoad(){
  // draw a road with yellow dashed line
  fill(50);
  noStroke();
  rectMode(CORNERS);
  rect(0, height*0.20, width, height*0.80);
  // yellow line
  for(i = 0; i < width; i += 60){
    fill(255,255,0);
    rect(i, height/2 + 5, i + 40, height/2 - 5);
  }
  
}

class Car{
  // Constructor
  constructor(y,d){
    this.x = random(width); this.y = y; this.type = this.type;
    this.s = random(3,10); this.d = d;
    this.c = color(random(255), random(255), random(255));
  }
  
  // Class Methods
  display(){
    rectMode(CORNER);
    // car body
    fill(this.c);
    rect(this.x, this.y, 50, 25);
    // wheels
    fill(0);
    rect(this.x + 3, this.y - 5, 10, 5, 2, 2);
    rect(this.x + 35, this.y - 5, 10, 5, 2, 2 );
    rect(this.x + 3, this.y + 25, 10, 5, 2, 2 );
    rect(this.x + 35, this.y + 25, 10, 5, 2, 2 );
    // changing lane based off direction 
    if (d === 1){
      this.y = random()
    }
  }

  move(){
    if(this.d === 1){
      this.x += this.s;
      if(this.x > width) this.x = 0;
    }
    else{
      this.x -= this.s;
      if(this.x < 0) this.x = width;
    }
  }
}
