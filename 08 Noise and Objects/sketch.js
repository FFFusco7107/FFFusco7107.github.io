// Objects and Noise
// Lucas F. 
// Sept 26. 2025
//

let ball, ball2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = { // object notation. Inside the bracket
           // set up a bunch of property : value pairs
      x: 300, y: 400, size: 20, 
      c: color(random(255), random(255), random(255)), 
      timeX: random(100), timeY: random(100),
      timeOff: 0.02
    }

  ball2 = {
    x: 500, y:200, size: 30, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.05
  }

  ball3 = {
    x: 300, y:400, size: 25, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.07
  }
  ball4 = {
    x: 300, y:400, size: 15, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.09
  }
  ball5 = {
    x: 300, y:400, size: 17, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.1
  }
  ball6 = {
    x: 300, y:400, size: 13, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.15
  }
  ball7 = {
    x: 300, y:400, size: 25, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.07
  }
  ball8 = {
    x: 300, y:400, size: 15, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.09
  }
  ball9 = {
    x: 300, y:400, size: 17, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.1
  }
  ball10 = {
    x: 300, y:400, size: 13, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.15
  }
  ball11 = {
    x: 300, y:400, size: 25, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.07
  }
  ball12 = {
    x: 300, y:400, size: 15, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.09
  }
  ball13 = {
    x: 300, y:400, size: 17, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.1
  }
  ball14 = {
    x: 300, y:400, size: 13, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.15
  }
  ball15 = {
    x: 300, y:400, size: 25, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.07
  }
  ball16 = {
    x: 300, y:400, size: 15, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.09
  }
  ball17 = {
    x: 300, y:400, size: 17, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.1
  }
  ball18 = {
    x: 300, y:400, size: 13, 
    c: color(random(255), random(255), random(255)), 
    timeX: random(100), timeY: random(100),
    timeOff: 0.15
  }
}

function draw() {
  // TRICK #1 //background(220);
  // TRICK #2 -> clear backround with semi-transparent box
   fill(255,70); // 0-255 opacity 
   rect(0,0,width,height);
  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
  moveBall(ball9);
  moveBall(ball10);
  moveBall(ball11);
  moveBall(ball12);
  moveBall(ball13);
  moveBall(ball14);
  moveBall(ball15);
  moveBall(ball16);
  moveBall(ball17);
  moveBall(ball18);
}

function moveBall(b){
  //b -> Ball type object
  // update position and draw provided ball

  // generte random position change (x and y)
  let dx = noise(b.timeX); // 0-1
  dx = map(dx, 0, 1, -5, 5); 
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5); 

  // advance noise graph "cursors"
  b.timeX += b.timeOff;  b.timeY += b.timeOff;

  // handle and "wrap-arounds" necessary
  if(b.x < 0) b.x += width;
  else if(b.x > width) b.x -= width;

  if(b.y < 0) b.y += height;
  else if(b.y > height) b.y -= height; 

  b.x += dx;     b.y += dy;

  // render the circle
  fill(b.c);
  circle(b.x, b.y, b.size); 
}