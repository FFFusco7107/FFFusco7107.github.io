// Multiple Keys and Outines 
// Lucas F.
// Sept 15, 2025
//
// KeyIsDown( Keycode ) -> returns boolean(True or False)


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  checkmulti();
}

function checkmulti(){
  strokeWeight(mouseX / 10);
  stroke(255,0,0);
  // check for multiple keypresses (3 simulateneous)
  let a = keyIsDown(65); // "a"
  let b = keyIsDown(66); // "b"
  let c = keyIsDown(67); // "c"
  textSize(40);
  text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
}