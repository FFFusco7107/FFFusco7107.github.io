// Inheritance
// Lucas F.
// Oct 30, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 30; i++){
    objects.push(new AnimatedObject(random(width), random(height)));
    objects.push(new CircleObject(random(width), random(height)));
    objects.push(new LineObject());
  }

}

function draw() {
  background(220);
  for(o of objects){
    o.move();
    o.display();
  }
}



// Child Class #1 - Circle

class CircleObject extends AnimatedObject{
  constructor(x,y){
    super(x,y);
    // we can also add on to what was in the parent class
    this.size = random(20,40);
  }

  // no mention of move()... It will be the same as parent move()

  display(){ // function override -> copies overtop of parent version
    if(dist(this.x,this.y,mouseX,mouseY)< this.size/2){
      fill(0,255,0);
    }
    else{
      fill(255);
    }
    circle(this.x,this.y,this.size);

  }

}

// Child Class #2 - Line

class LineObject extends AnimatedObject{
  constructor(){
    super(random(width), random(height));

  }

  move(){ // combo override, but built on parent version
    super.move(); // runs parent version of move
    this.x -= 5
    if(this.x < 0) this.x = width;

  }

  display(){
    if(mouseIsPressed){
      strokeWeight(12);
    }
    else{
      strokeWeight(2);
    }
    line(this.x,this.y,this.x + 15, this.y);
  }
}
