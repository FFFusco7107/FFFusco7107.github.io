// Final COding Review
// Lucas F
// Jan 13, 2026

// Global Variables
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// Gorilla related
let idleIndex = 0; let swipeIndex = 0;
let gorillaState = 0; //0-idle   1-swipe
let gorillaX = 200;

// Spiral Related
let spiralObjects = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
}

async function loadAssets(){
  // Circles first
  for(let i=0; i<=15; i++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/circle"+i+".png"));
    }
  }

  // Gorillas Next
  for(let i = 1; i<=6; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }
}

function drawGorilla(){
  // render the gorilla at its position, choosing
  //the correct image for animation playback
  if(gorillaState === 0){// IDLE STATE
    image(gorillaIdle[idleIndex], gorillaX, height/2);
    if(frameCount % 8 === 0){
      idleIndex++;
      if(idleIndex > 5) idleIndex = 0;
    }
    

  }
  else if(gorillaState === 1){ // SWIPE STATE
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);
    if(frameCount % 8 === 0){
      swipeIndex++;
      if(swipeIndex > 5) swipeIndex = 0;
    }
  }
}

function keyPressed(){
  //triggers automatically once per keypress event
  if(key === " "){
    if(gorillaState === 0) gorillaState = 1;
    else gorillaState = 0;
  }
}

function moveGorilla(){
  // checking for a keypress ONCE PER FRAME
  // is better than a continuous detection...
  if(keyIsDown(77)){
    if(mouseX < gorillaX) gorillaX -= 5;
    else gorillaX += 5;
  }
}

function mousePressed(){
  // triggers automatically, once per click event
  spiralObjects.push(new Spiral(mouseX, mouseY));
  // DONT TRY TO DRAW ANYTHING HERE!
}

function draw() {
  imageMode(CENTER);
  background(0);
  drawGorilla();
  moveGorilla();

  //spiral things

  for(let i = 0; i < spiralObjects.length; i++){
    let s  = spiralObjects[i];
    s.display();
    if(s.active === false){
      spiralObjects.splice(i,1);
    }
  }


  // for(let s of spiralObjects){ // loop by item
  //   s.display();
  // }
}

class Spiral{
  constructor(x,y){ // runs once, each time an object is made
    this.x = x; this.y = y; 
    this.currentFrame = 0;
    this.active = true; // to mark the removal
  }

  //class methods
  display(){ // 0-15
    if(this.currentFrame > 15){
      this.active = frameCount;
    }
    else{
      image(spiralImages[this.currentFrame], this.x,this.y);
      if(frameCount % 3 === 0) this.currentFrame++
    }
  }
}
