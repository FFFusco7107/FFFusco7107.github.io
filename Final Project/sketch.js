// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let cube;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cube = new Cube(width*0.2,height*0.7, 45);
}

function draw() {
  background(220);
  noStroke();
  fill(255,0,0);
  
  cube.display();
  cube.move();
   
  // ground
  fill(0);
  rect(0, height*0.7, width, height);
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    // rotate(framecount * 0.5);
     cube.jump();
     console.log("pressed");
  }
}

class Cube{
  // cube that jumps when pressing spacebar
  constructor(x,y,s){
    this.s = s;
    this.g = createVector(0,0.2);
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
  }
  display(){
    fill(255,0,0);
    square(this.pos.x, this.pos.y - this.s, this.s);
    fill(0,255,0);
    square(this.pos.x + 5,this.pos.y- this.s, this.s - 30)
  }
  move(){
      this.vel.add(this.g);
      this.vel.limit(100);
      this.pos.add(this.vel);
      if(this.pos.y > height*0.7){
        this.pos.y = height*0.7;
      }

  }
  jump(){
    if(this.pos.y === height*0.7){
      this.vel.y = -6;
    }
  }
}

