// Drawing with Single LOops
// Lucas F.
// Sept 23, 2025
//

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradientBackround();
  circleLine(height*0.35, 30);
  circleLine(height/2, 50);
  circleLine(height*0.65, 80);
}

function gradientBackround(){
  // create a gradient to use as a backround
  let h = 3; // height of each rectangle

  // use a loop(doesnt have to be a while) draw a vertical stack of rectangles
  let y = 0 ; 
  while(y <= height){
    noStroke();
    let mappedY = map(y,0,height,0,255);
    let flippedY = 255 - mappedY
    let mappedMouseX = map(mouseX, 0 , width, 0 ,255)
    let mappedMouseY = map(mouseY, 0 , height, 0 ,255)
    fill(mappedMouseY, mappedY, mappedMouseX);
    rect(0, y, width, h);
    y += h;
  }
}



function cDistance(x1, y1, x2, y2){
  // calculate the straightline distance between (x1, y1) and (x2, y2)
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); // keep only one decimal place
}

function circleLine(y, size){
  // use this function to draw a line of circles(loop)
  // y -> number    The height at which you draw the line
  // size -> number   diameter of the circles
  let xStart = width*0.1;  // 10% of position from the left
  let xEnd = width*0.9;     // 90% horizontal position from the left

  for(let x = xStart; x <= xEnd; x += size){
    let d = cDistance(x,y,mouseX, mouseY);
    if(d <= size/2){ // distance less than radius in circle
      fill(200,200,0);
    }
    else{
      fill(225);
    }
    circle(x, y, size);
    textAlign(CENTER, CENTER) // CENTER text in circle
    fill(0)
    text(d, x ,y);
  }
}
