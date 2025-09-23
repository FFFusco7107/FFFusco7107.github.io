// State VAriables and Real Time 
// Lucas f.
// Sept 18,2025
//

// Global Variables
let shapeState = 0; // 0-Circle  1-Square  2-Triangle  3-Transition
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function manageTimer(){
  // update elapsedTIme and Display
  // print(millis());
  elapsedTime = millis() - startTime;
  text((elapsedTime/1000).toFixed(2), width*0.3, height*0.75);

}

function draw() {
  // targeting 60 fps
  // using this for time is sketchy, b/c no guarantee we can achieve
  // the target frameRate
  background(220);
  drawShape();
  //print("frame: " + frameCount); 
  manageTimer();
  if(shapeState===3 && elapsedTime > 2000){
    shapeState = 0
  }
}



function keyPressed(){
  //automatically called on any keyboard button press
  //state var: 0 -> 1   1->2
  //           2 -> 3 (for 2 seconds) ->0
  if (shapeState < 3){
    shapeState++;
    if(shapeState===3){
      startTime = millis();
    }
  }
}

function drawShape(){
  // inspect our state variable, and draw 1 of 4 possible options,
  // depenting on the current value
  switch(shapeState){
    case 0:
      circle(width/2,height/2,150)
      break;
    case 1:
      square(width/2,height/2,150)
      break;
    case 2:
      let x = width/2;  let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25)
      break;
    case 3:
      for(let i=0; i < 20; i++){
        let x = random(width*0.4, width*0.6);
        let y = random(height*0.4, height*0.6);
        line(x,y,x+25, y);
      }
  }
}
