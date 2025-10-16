// Object- Object Interactions 
// Lucas F.
// Oct 16, 2025

// Global Variables
let nodes = [];
let reach = 70; 

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  // create one node per mouse pressed
  for ( i =0; i < 25; i++){
    nodes.push(new csNode(mouseX, mouseY));
  }
  
  // [csNode, csNode, csNode]
  //    0       1        2
}

function draw() {
  background(0);
  // loop by item is good when we dont plan on deleting objects
  // from array
  for( let n of nodes){
    n.move();
    //n.display();
    n.connect(nodes);
  }

}

class csNode{
  //1. Constructor
  constructor(x,y){
    // properties related to position/display
    this.x = x;   this.y = y;
    this.size = 20;
    this.c = color(random(50,255), 0, random(0, 100));

    // properties related to movement
    this.xTime = random(10);  this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 10;

  }

  //2. Class Methods
  display(){ // Draw our csNode as a circle on the canvas
    fill(this.c);
    noStroke();
    circle(this.x,this.y, this.size);
  }

  move(){
    // use perlin noise for x/y movement
    let xSpeed = noise(this.xTime);  //0 - 1
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if(this.x > width) this.x = 0;


    // now same for y
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.yTime += this.timeShift;

    this.y += ySpeed;
    if(this.y < 0) this.y = height;
    else if(this.y > height) this.y = 0;
  }

  connect(nodeArray){
    // check if the current point is close to any other points. If
    // so, join with a line
    stroke(this.c);
    for(let n of nodeArray){
      // this.x   this.y   n.x    n.y
      if(n !== this){ // make sure not to compare to self
        let d = dist(this.x, this.y, n.x, n.y);
        if(d < reach){ // the two points ARE close.... 
          line(this.x, this.y, n.x, n.y);
        }
      }
    }
  }

}
