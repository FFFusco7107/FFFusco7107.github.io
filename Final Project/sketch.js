// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let cube;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  cube = new Cube(width*0.2,height*0.7, 45);
  cube.display();
   
  // ground
  fill(0);
  rect(0, height*0.7, width, height);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
     cube.move();
     console.log("pressed");
  }
}

class Cube{
  // cube that jumps when pressing spacebar
  constructor(x,y,s){
    this.x = x; this.y = y; 
    this.s = s;
    this.g = createVector(0,0.2);
    this.pos = createVector(x,y);
    this.vel = createVector(10);
  }
  display(){
    fill(255,0,0);
    square(this.x, this.y - this.s, this.s);
  }
  move(){

      this.vel.add(this.g);
      this.vel.limit(100); // cant go outside -20 and 20
      this.pos.add(this.vel);

  }
  
}

