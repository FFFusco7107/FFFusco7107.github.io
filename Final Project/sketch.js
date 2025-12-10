// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let player;
let platform;
let level = [];
let levelSpeed = 9;

function setup() {
  createCanvas(windowWidth,windowHeight);
  player = new Cube(width*0.2,height*0.7, 45);
  level.push(new box(500,height*0.7 - 45, 45));
  level.push(new spike(700,height*0.7));
  level.push(new spike(745,height*0.7));
  level.push(new spike(790,height*0.7));
  
}

function draw() {
  background(220); 
  // platform.display();
  player.display(); 
  player.move();
  for(let o of level){ 
    o.display();
    o.slide();
  }  
   
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
    this.g = createVector(0,0.4);
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
      this.vel.y = -9;
      this.rotationSpeed = 4; // rotates 1.6 degrees every frame
      this.onGround = false;
    }
  }
}

class box{
  constructor(x,y,s){
    this.x = x; this.y = y; this.s = s;
  }  

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    square(this.x,this.y,this.s);
    pop();


  }

  slide(){

    this.x -= levelSpeed;
  }
}

class spike{
  constructor(x,y,s){
    this.x = x; this.y = y; 
  }

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    triangle(this.x,this.y, this.x + 45, this.y, this.x + 22.5, this.y - 45);
    pop();
  }

  slide(){

    this.x -= levelSpeed;
  }
}
