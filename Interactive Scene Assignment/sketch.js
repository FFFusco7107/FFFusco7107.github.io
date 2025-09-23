// Interactive Scene Assignment
// Lucas F.
// Sept 16 2025
// 
let size= 15 // variable for size of planets + sun
let currentBack = 0 // 0-> dark grey  1-> purple  2-> blue  3->  light blue


function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  
}

function draw() {
  background(40);
  back();
  sun();
  planets();
  fill(255)
  // name on the bottom right corner
  text("Lucas Fusco", width-100, height-20)
  
  
}

function back(){
  // change color of backround based on value of "currentBack" 
  switch(currentBack){
    case 0:
      background(40);
      break;
    case 1:
      background(124,36,148)
      break;
    case 2:
      background(87,81,233)
      break;
    case 3:
      background(69,174,238)
      break;
  }
}

function sun(){
  // sun moving wherever the mouse position is
  noStroke();
  fill(255,200,0)
  circle(mouseX, mouseY, size+55)
  fill(0)
  // sun face
  ellipse(mouseX-13, mouseY-13, 9, 15)
  ellipse(mouseX+13, mouseY-13, 9, 15)
  fill(0)
  arc(mouseX, mouseY+10, 30, 20,0, 180 )
}

function planets(){
  // planets moving with the mouse but offset from the sun
  noStroke();
  fill("brown")
  circle(mouseX-50,mouseY-50, size )
  fill("blue")
  circle(mouseX+100,mouseY-20, size+15 )
  fill("red")
  circle(mouseX-150,mouseY+70, size+10 )
  fill("tan")
  circle(mouseX+100,mouseY+120, size+40 )
  
  
}

function mousePressed(){
  // change the backround with center mouse button
  if (mouseButton === CENTER){
    if (currentBack < 3){
      currentBack++
    }
    else{
      currentBack = 0
    }
  }
}


function keyPressed(){
  // change size of planets/sun with up-arrow and down-arrow
  // UP-ARROW INCREASES SIZE, DOWN-ARROW DECREASES SIZE
  if (keyCode === UP_ARROW){
    size += 5
}
  if(keyCode === DOWN_ARROW){
    size -= 5
  }
  
}

