// Image Animations
// Lucas F. 
// Oct 2, 2025 

// Global Variables
let pinImages = []; // array === list
let current = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading"); 
  // framerate(5); // usually use framerate to debug 


}

async function loadAssets(){
  // load all of our pinwheel images
  for(let i = 0; i < 9; i++){
   pinImages.push(await loadImage("assets/pin-0"+i+".png")); 
  }
  
}

function draw() { // This IS a loop
  background(0);
  // animateWithFor();

  // manage current image to display
  if (frameCount % 4 === 0){ // limits the frames that the image animates(makes it slower)
    current += 1
  if (current > 8) current = 0
  }
  imageMode(CENTER)
  image(pinImages[current], width/2, height*0.6)
} // Screen is upadtaed here!

function animateWithFor(){
  // Try to make an animation with a FOR loop
  // Doesnt work! 
  // FOR Loop yeilds a SINGLE IMAGE
  
  for(i = 0; i < 9; i++){
    image(pinImages[i], width/2, height*0.6);
    
  }
}
