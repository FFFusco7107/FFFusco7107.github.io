// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let player;
let square;

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Cube(width*0.2,height*0.7, 45);
  square = new box;
}

function draw() {
  background(220);
  player.display();
  player.move();
   
  // ground
  fill(0);
  rect(0, height*0.7, width, height);

  // spacebar -> jump
  if(keyIsDown(32)){
    player.jump();
    console.log("pressed");
  }
}

class Cube{
  // cube that jumps when pressing spacebar
  constructor(x,y,s){
    this.s = s;
    this.pos = createVector(x,y);
    this.g = createVector(0,0.2);
    this.vel = createVector(0,0);

    this.rotation = 0;
    this.rotationSpeed = 0;
    this.onGround = true;
  }
  display(){
    push();
    translate(this.pos.x + this.s/2, this.pos.y - this.s /2);
    rotate(radians(this.rotation));
    strokeWeight(2);
    fill(255,200,50);
    square(-this.s /2, -this.s /2, this.s);
    fill(0,255,255);
    square(-this.s/2 + 9,this.s/2 - this.s + 9, this.s - 38);
    square(-this.s/2 + 28,this.s/2 - this.s + 9, this.s - 38);
    rectMode(CENTER);
    rect(-this.s/2 + 22,this.s/2 - this.s + 30,this.s/2 + 5, this.s - 40);
    pop();
  }
  move(){
      this.vel.add(this.g);
      this.vel.limit(100);
      this.pos.add(this.vel);

      // If on ground
      if(this.pos.y >= height*0.7){
        this.pos.y = height*0.7;
        this.vel.y = 0;

        if(!this.onGround){
          this.onGround = true;

          // snaps the cube to nearest right angle (90,180,270,360...)
          this.rotation = round(this.rotation/90) * 90;
          this.rotationSpeed = 0;
        }
      }
      // If in air -> rotate
      else {
        this.onGround = false;
        this.rotation += this.rotationSpeed;
      }

  }
  jump(){
    // can only jump when on ground
    if(this.onGround){ 
      this.vel.y = -6;
      this.rotationSpeed = 3; // rotates 1.6 degrees every frame
      this.onGround = false;
    }
  }
}

class box{
  constructor(){
    this.x = 100; this.y = height*0.7 -45; this.s = 45;
  }

  display(){
    fill(255);
    strokeWeight(1);
    fill(0);
    square(this.x,this.y,this.s)
  }
}
