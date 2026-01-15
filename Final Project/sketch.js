// Geometry Dash Capstone
// Lucas F.
// Dec 2 2025

let player;
let playerState;
let platform;
let level = [];
let levelSpeed = 9;
let mySound;
let gameStart = false;
let s = 45;
let portalBuffer = -1

async function loadMusic(){
  mySound = await loadSound('assets/1-01. Stereo Madness.mp3');
}

function setup() { 
  createCanvas(windowWidth,windowHeight);
  // frameRate(10);
  loadMusic();
  player = new Cube(width*0.2,height*0.7, 45);
  playerState = 0; // 0-cube   1-ship
  initLevel();

  
}

function initLevel(){
  level=[];
  let g = height*0.7; // ground height
  let s = 45; // block size
  // level.push(new box(600,height*0.7 - 45, 800));

  // good
  level.push(new spike(1060,g,0));
  level.push(new spike( s*38,g, s/2));
  level.push(new spike( s*39,g, 0));
  level.push(new spike( s*55,g, 0));
  level.push(new spike( s*56,g, 0));

  // good
  level.push(new box(s*57,g - s, s,s));
  level.push(new box(s*61,g - s, s,s));
  level.push(new box(s*61,g - s*2, s,s));
  level.push(new box(s*65,g - s, s,s));
  level.push(new box(s*65,g - s*2, s,s));
  level.push(new box(s*65,g - s*3, s,s));

  //good
  level.push(new spike( s*94,g, 0));
  level.push(new box(s*100,g - s, s*8,s));
  level.push(new spike( s*108,g, s/2));
  level.push(new spike( s*109,g, s/2));
  level.push(new spike( s*110,g, s/2));

  // good
  level.push(new box(s*111,g - s, s*10,s));
  level.push(new spike(s*115 + (4/9),g - s, 0));
  level.push(new spike( s*121,g, s/2));
  level.push(new spike( s*122,g, s/2));
  level.push(new spike( s*123,g, s/2));

  // good
  level.push(new box(s*124,g - s*2, s*10,s*10));
  level.push(new spike(s*129,g - s*2, 0));
  level.push(new box(s*137,g - s*3, s,s/2));
  level.push(new box(s*141,g - s*4, s,s/2));
  level.push(new box(s*145,g - s*5, s,s/2));
  level.push(new box(s*149,g - s*6, s,s/2));
  level.push(new box(s*153,g - s*7, s,s/2));

  // good
  level.push(new box(s*157,g - s*6, s,s));
  level.push(new box(s*158,g - s*6, s,s));
  level.push(new box(s*159,g - s*6, s*20,s*20));
  level.push(new spike(s*164,g - s*6, 0));
  level.push(new spike(s*165,g - s*6, 0));
  level.push(new spike(s*166,g - s*6, 0));
  level.push(new spike(s*167,g - s*6, 0));

  // good
  level.push(new box(s*165,g - s*8, s,s/2));
  level.push(new box(s*166,g - s*8, s,s/2));
  level.push(new spike(s*172,g - s*6, 0));
  level.push(new spike(s*173,g - s*6, 0));
  level.push(new spike(s*174,g - s*6, 0));
  level.push(new spike(s*175,g - s*6, 0));

  // good
  level.push(new box(s*173,g - s*8, s,s/2));
  level.push(new box(s*174,g - s*8, s,s/2));
  level.push(new box(s*179,g - s*5, s*10,s*10));
  level.push(new spike(s*182,g - s*7, 0));
  level.push(new spike(s*183,g - s*7, 0));
  level.push(new spike(s*184,g - s*7, 0));
  level.push(new spike(s*185,g - s*7, 0));

  // good
  level.push(new box(s*189,g - s*6, s*5,s*10));
  level.push(new spike(s*193,g - s*6, 0));
  level.push(new box(s*194,g - s*5, s*6,s*10));
  level.push(new spike(s*194,g - s*5, 0));
  level.push(new box(s*200,g - s*5, s*4,s));
  level.push(new box(s*206,g - s*5, s*4,s/2));

  // good
  level.push(new spike(s*209,g - s*5, 0));
  level.push(new box(s*211,g - s*4, s*7,s/2));
  level.push(new spike(s*217,g - s*4, 0));
  level.push(new box(s*219,g - s*3, s*5,s/2));
  level.push(new box(s*226,g - s*4, s,s/2));
  level.push(new box(s*230,g - s*5, s,s/2));
  level.push(new box(s*234,g - s*6, s,s/2));

  // good
  level.push(new box(s*238,g - s*7, s,s/2));
  level.push(new box(s*242,g - s*8, s,s/2));
  level.push(new box(s*246,g - s*9, s,s/2));
  level.push(new box(s*250,g - s*10, s,s/2));
  level.push(new spike(s*250,g - s*10, 0));

  //good
  level.push(new box(s*249,g - s*4, s*7,s));
  level.push(new box(s*256,g - s*4, s*30,s*10));
  level.push(new box(s*256,g - s*18, s*5,s*11));
  level.push(new box(s*261,g - s*17, s*7,s*11));
  level.push(new box(s*268,g - s*17, s*7,s*11));
  level.push(new box(s*275,g - s*18, s*11,s*11));

  level.push(new box(s*275,g - s*18, s*11,s*11));
  level.push(new box(s*319,g - s*10, s,s*3));
  level.push(new portal(s*30,g - s*3)); // s*286 s*6.7
  level.push(new portal(s*50,g - s*3)); // s*286 s*6.7
}



function draw() {
  background(0,150,255); 
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

  portalBuffer--;

  
    
  }

  else{
    background(0,100,255, 200);
    textAlign(CENTER);
    textSize(50);
    stroke(100);
    fill("lime");
    // pixel font
    // textFont("");
    text("space to start", width/2, height/2);
    rectMode(CENTER);
    fill(0);
    rect(width/2, height/2 + 40, 300, 50);
    fill(30);
    noStroke();
    rect(width/2 + 3, height/2 + 40, 250, 30)
    fill(255);
    textSize(20);
    text("SPACE", width/2 + 3, height/2 + 44)
    stroke(1);
    rectMode(CORNER);
    
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
    this.g = createVector(0,1.2);
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
         let hit = collideRectRect(this.pos.x,this.pos.y-45,this.s, this.s, o.x, o.y, o.s, o.s2);
         //  text(player.onGround + " " + player.vel.y +" " + player.pos.y +" " + o.y , width/2, height*0.2);
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
            else if(o instanceof box){
              initLevel();
              this.rotation = 0;
              loadMusic();
            }
          }
          else if(o instanceof spike){ 
            loadMusic();
            print("spike col");
            //to reset the level
            //just reset or re-create each var and item
            initLevel();
            // sets cube right side up
            this.rotation = 0;

            
          }
          else{
            print("portal");
            if(portalBuffer < 0){
              player = new Ship(player.pos.x, player.pos.y, player.s);
              portalBuffer = 20;
            }

                
        }
      }
  } 
}
  jump(){
    // can only jump when on ground
    if(this.onGround){
      // this.pos.y -= 1 
      this.vel.y = -15;
      this.rotationSpeed = 7.85; // rotates 7.9 degrees every frame
      this.onGround = false;
    }  
  } 
}

class Ship{
  constructor(x,y,s){
    this.s = s;
    this.pos = createVector(x,y); 
    this.g = createVector(0,1.2);
    this.vel = createVector(0,0);
  }
  display(){
    //ship
    circle(this.pos.x, this.pos.y, this.s);


    // roof
    rect(0,height*0.7 - (s*11), width, 45);
  }
  move(){


    // If hit roof
    if(this.pos.y < height*0.7 - (s*11)){
      initLevel();
      this.rotation = 0;
      loadMusic();
    }

    for(let o of level){
      let hit = collideRectRect(this.pos.x,this.pos.y-45,this.s, this.s, o.x, o.y, o.s, o.s2);
      if(hit){
        if(o instanceof box){

        }
        else if(o instanceof box){
          print("box col");
          loadMusic();
          initLevel();
          this.rotation = 0;
          
        }
        else if(o instanceof spike){
          print("spike col");
          loadMusic();
          initLevel();
          this.rotation = 0;
          
        }
        else{
          print("portal");
          if(portalBuffer < 0){
            player = new Cube(player.x,player.y, player.s);
            portalBuffer = 20;
          }
          
        }
      }
    }
  }
  jump(){ // fly up

  }
}

class portal{
  constructor(x,y){
    this.x = x; this.y = y;
    this.s = 6; this.s2 = 115;
  }
  display(){
    noStroke();
    fill("pink");
    rect(this.x, this.y,this.s,this.s2);
    stroke(1);
    
  }
  slide(){
    this.x -= levelSpeed;
  }
}

class box{
  constructor(x,y,s,h){
    this.x = x; this.y = y; this.s = s; this.h = h;
  this.s2 = s;
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
    this.s2 = s;
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