// Create Your First CLass 
// Lucas F.
// Oct, 14, 2025

// Globals
let myRoundRacer1; 
let myRoundRacer2; 
let myRoundRacer3; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  myRoundRacer1 = new RoundRacer(random(height), 150);
  myRoundRacer2 = new RoundRacer(random(height), 200);
  myRoundRacer3 = new RoundRacer(random(height), 255);
}

function draw() {
  background(0);
  myRoundRacer1.move();
  myRoundRacer1.display();
  myRoundRacer2.move();
  myRoundRacer2.display();
  myRoundRacer3.move();
  myRoundRacer3.display();
}

class RoundRacer{
  // constructor
  constructor(y,c){
    this.x = 0; this.y = y;
    this.c = c;
    this.speed = random(3,15);

  }

  move(){
    this.x += this.speed
    if(this.x > width) this.x = 0;
  }

  display(){
    fill(this.c);
    circle(this.x,this.y, 15); 

  }
}