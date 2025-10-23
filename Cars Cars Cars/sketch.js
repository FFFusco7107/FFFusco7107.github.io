// Cars Cars Cars (Vehicle Simulation)
// Lucas F.
// Oct 20, 2025
let myVehicle;
let eastbound = [];
let westbound = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 20; i++){
    eastbound.push(new Vehicle(300,round(random(0,1)), round(random(0,1))));
    westbound.push(new Vehicle(300,round(random(0,1)), round(random(0,1))));
  }
  
}

function draw() {
  background(220);
  drawRoad();
  for (let e of eastbound){
    e.action();
  }
  for (let w of westbound){
    w.action();
  }
 

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

class Vehicle{
  // Constructor
  constructor(y,d,type){
    this.x = random(width); this.y = y; this.type = type
    this.xSpeed = random(3,10); this.d = d;
    this.c = color(random(255), random(255), random(255));
  // changing lane based off direction 
  if (this.d === 1){
      this.y = random(height/2 + 50,height/2 + 250);
    }
    else{
      this.y = random(height/2 - 50, height/2 - 250);
    }
  
  
  }
  
  // Class Methods
  display(){
    rectMode(CORNER);
    if(this.type === 0){
      // car body
      fill(this.c);
      rect(this.x, this.y, 50, 25);
      // wheels
      fill(0);
      rect(this.x + 3, this.y - 5, 10, 5, 2, 2);
      rect(this.x + 35, this.y - 5, 10, 5, 2, 2 );
      rect(this.x + 3, this.y + 25, 10, 5, 2, 2 );
      rect(this.x + 35, this.y + 25, 10, 5, 2, 2 );
    } 
    else{
      // truck
      fill(this.c);
      rect(this.x,this.y, 30, 30);
      if(this.d === 1){
        rect(this.x + 35, this.y, 15, 30)
      }
      else{
        rect(this.x - 20, this.y, 15, 30); 
      }
    }
  }

  move(){
    if(this.d === 1){
      this.x += this.xSpeed;
      if(this.x > width) this.x = 0;
    }
    else{
      this.x -= this.xSpeed;
      if(this.x < 0) this.x = width;
    }
  }

  speedUp(){
    if (this.xSpeed < 15){
      this.xSpeed += 1
    }
    else{
      this.xSpeed = 15
    }
  }

  speedDown(){
    if(this.xSpeed > 1){
      this.xSpeed -= 1
    }
  }
  changeColor(){
    this.c = color(random(255), random(255), random(255)); 
  }

  action(){
    this.move();
    this.up = round(random(100))
    if (this.up === 67){
      this.speedUp();
    }
    this.down = round(random(100))
    if (this.down === 67){
      this.speedDown();
    }
    this.change = round(random(100))
    if (this.change === 67){
      this.changeColor();
    }
    this.display();
  }
}
