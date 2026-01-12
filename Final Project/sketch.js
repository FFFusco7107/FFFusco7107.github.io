// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let player;
let platform;
let level = [];
let levelSpeed = 9;
let mySound;
let gameStart = false;

async function loadMusic(){
  mySound = await loadSound('assets/1-01. Stereo Madness.mp3');
}

function setup() { 
  createCanvas(windowWidth,windowHeight);
  // frameRate(10);
  loadMusic();
  player = new Cube(width*0.2,height*0.7, 45);
  initLevel();

  
}

function initLevel(){
  level=[];
  let g = height*0.7; // ground height
  let s = 45; // block size
  // level.push(new box(600,height*0.7 - 45, 800));

  level.push(new spike(1060,g,0));
  level.push(new spike( s*38,g, s/2));
  level.push(new spike( s*39,g, 0));
  level.push(new spike( s*55,g, 0));
  level.push(new spike( s*56,g, 0));
  level.push(new box(s*57,g - 45, s,s));
  level.push(new box(s*61,g - 45, s,s));
  level.push(new box(s*61,g - 90, s,s));
  level.push(new box(s*65,g - 45, s,s));
  level.push(new box(s*65,g - 90, s,s));
  level.push(new box(s*65,g - 135, s,s));
  level.push(new spike( s*94,g, 0));
  level.push(new box(s*100,g - 45, s*8,s));
  level.push(new spike( s*108,g, s/2));
  level.push(new spike( s*109,g, s/2));
  level.push(new spike( s*110,g, s/2));
  level.push(new box(s*111,g - 45, s*10,s));
  level.push(new spike(s*115 + (4/9),g - 45, 0));
  level.push(new spike( s*121,g, s/2));
  level.push(new spike( s*122,g, s/2));
  level.push(new spike( s*123,g, s/2));
  level.push(new box(s*124,g - 90, s*10,s*10));
  level.push(new spike(s*129,g - 90, 0));
  level.push(new box(s*137,g - 135, s,s/2));
  level.push(new box(s*141,g - 180, s,s/2));
  level.push(new box(s*145,g - 225, s,s/2));
  level.push(new box(s*149,g - 270, s,s/2));
  level.push(new box(s*153,g - 315, s,s/2));
  level.push(new box(s*157,g - 270, s,s));
  level.push(new box(s*158,g - 270, s,s));
  level.push(new box(s*159,g - 270, s*20,s*20));
  level.push(new spike(s*164,g - 270, 0));
  level.push(new spike(s*165,g - 270, 0));
  level.push(new spike(s*166,g - 270, 0));
  level.push(new spike(s*167,g - 270, 0));
  level.push(new box(s*165,g - 340, s,s/2));
  level.push(new box(s*166,g - 340, s,s/2));
  level.push(new spike(s*172,g - 270, 0));
  level.push(new spike(s*173,g - 270, 0));
  level.push(new spike(s*174,g - 270, 0));
  level.push(new spike(s*175,g - 270, 0));
  level.push(new box(s*173,g - 340, s,s/2));
  level.push(new box(s*174,g - 340, s,s/2));
  level.push(new box(s*179,g - 225, s*10,s*10));
  level.push(new spike(s*182,g - 315, 0));
  level.push(new spike(s*183,g - 315, 0));
  level.push(new spike(s*184,g - 315, 0));
  level.push(new spike(s*185,g - 315, 0));
  level.push(new box(s*189,g - 270, s*5,s*10));
}



function draw() {
  background(220); 
  if (gameStart){
  // platform.display();
  
  
  player.display(); 
  player.move();
  for(let o of level){ 
    o.display();
    o.slide();  
  }  
  // spacebar -> jump
  if(keyIsDown(32)){
    player.jump();
    console.log("pressed");
  }  
  // ground 
  fill(0);
  rect(0, height*0.7, width, height);

  
    
  }

  else{
    text("space to start", width/2, height/2);
  }
  
}

function keyPressed(){
  if(!gameStart){
    gameStart = true;
    mySound.play();
  }
}

class Cube{
  // cube that jumps when pressing spacebar
  constructor(x,y,s){
    this.s = s;
    this.pos = createVector(x,y);
    this.g = createVector(0,0.9);
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
    square(-this.s/2 + 9,this.s/2 - this.s +  9, this.s - 38);
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
          print("ground collision")
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
      // stroke("red");
      // line(0,this.pos.y,width,this.pos.y);
      // collisions
      for(let o of level){
         let hit = collideRectRect(this.pos.x,this.pos.y-45,this.s, this.s, o.x, o.y, o.s, o.s);
         //  text(player.onGround + " " + player.vel.y +" " + player.pos.y +" " + o.y , width/2, height*0.2);
        strokeWeight();
         text(player.pos.x, width/2, height/2,);
        //  stroke("green");
        //  line(0,o.y,width,o.y);
        if(hit){
          if(o instanceof box){
            print("box col");
            if (this.pos.y - o.y < 45){
              this.vel.y = 0;
              if(!this.onGround){
                this.onGround = true;
                this.rotation = round(this.rotation/90) * 90;
                this.rotationSpeed = 0;
              }
              this.pos.y = o.y; 
            }
            else{
              initLevel();
              this.rotation = 0;
            }
            
          }
          else if(o instanceof spike){ 
            print("spike col");
            //to reset the level
            //just reset or re-create each var and item
            initLevel();
            // sets cube right side up
            this.rotation = 0;
            
          }
        }
      }

      
 
  } 
  jump(){
    // can only jump when on ground
    if(this.onGround){
      // this.pos.y -= 1 
      this.vel.y = -12;
      this.rotationSpeed = 7; // rotates 1.6 degrees every frame
      this.onGround = false;
    }  
     


  } 
}
  
class box{
  constructor(x,y,s,h){
    this.x = x; this.y = y; this.s = s; this.h = h;
  } 

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    rect(this.x,this.y,this.s,this.h);
    pop();


  }

  slide(){

    this.x -= levelSpeed;
  }
}

class spike{
  constructor(x,y,s){
    this.x = x; this.y = y; this.s = s;
  }

  display(){
    push();
    strokeWeight(2);
    stroke(255);
    fill(0);
    triangle(this.x,this.y, this.x + 45, this.y, this.x + 22.5, this.y - 45 + this.s);
    pop();
  }

  slide(){

    this.x -= levelSpeed;
  }
}