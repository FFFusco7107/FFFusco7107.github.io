// Growing Trees
// Lucas F
// Nov 26, 2025
 
let angle = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  translate(width/2, height);
  
  branch(220,20);
}

function draw() {
  // background(220);
  angle = map(mouseX, 0, width, 0,random(100,180));
  angle = (random(100,180));
  
}

function branch(len,g){
  
  let t = map(len, 2, 220, 1, 10);
  strokeWeight(t);

  line(0,0,0,-len);
  
  translate(0,-len);
  stroke(100,g,50);

  if(len > 2){ // recursive case
    push();
      rotate(angle);
      branch(len*random(0.6,0.8), g + 15);
    pop();
    push();
      rotate(-angle);
      branch(len*random(0.6,0.8), g + 15);
    pop();
  }
}