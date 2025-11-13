// Image Generation Exercises
// Lucas F. 
// Nov 13 2025

let chip; 

function setup() {
  loadAssets();
  createCanvas(windowWidth, windowHeight);
  
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
}

function setPixelOneD(pos, r, g, b){
  // pos -> 1D location in pixels array ( red component)
  // r,g,b -> new colors for the pixel
  pixels[pos] = r; 
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x,y,r,g,b){
  // x,y -> pixel location
  // r,g,b -> pixel color 
  let index = (width*y + x) * 4
  setPixelOneD(index, r,g,b);
}

function draw() {
  background(220);
  image(chip,0,0);
  loadPixels();
  // r,g,b picture
  majorityColor();
  updatePixels();
}

function majorityColor(){
  // set pixels to red,greed,or blue based on rgb values
  // which ever value is the largest is the color that is shown
  for(let x=0; x<width; x++){
    for(let y=0; y<height; y++){
      let i = (width*y + x) * 4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(r > g && r > b){
        setPixel(x,y,255,0,0);
      }
      else if(g > r && g > b){
        setPixel(x,y,0,255,0);
      }
      else if(b > r && b > g){
        setPixel(x,y,0,0,255);
      }
      else{
        setPixel(x,y,0,0,255);
      }
    }
  }
}