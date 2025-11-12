// Image Manipulation
// Lucas F.
// Nov 12 2025

let pilot; 

function setup() {
  createCanvas(891, 892);
  loadAssets();
  pixelDensity(1);

}

async function loadAssets(){
  pilot = await loadImage("assets/aviator.png");

}

function setPixelOneD(pos, r, g, b){
  // pos -> 1D location in pixels array ( red component)
  // r,g,b -> new colors for the pixel
  pixels[pos] = r; 
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}

function setPixel(x,y,r,g,b){
  // x,y -> ixel location
  // r,g,b -> pixel color 
  let index = (width*y + x) * 4
  setPixelOneD(index, r,g,b);
}

function draw() {
  image(pilot,0,0);
  loadPixels(); // fills the "canvas" pixel aray

  // run a filter to modify pixel array
  //boost();
  //greyScale();

  background(0);
  textImage();

  // updatePixels();
}

function textImage(){
  // render image using characters
  fill(255);
  for(let x=0; x<width; x+= 10){
    for(let y=0; y<height; y+= 10){
      let avg = getAvg(x,y);
      if(avg > 200)   text("%", x, y);
      else if(avg > 100)   text("l",x,y);
      else text(",",x,y);
    }
  }
}

function getAvg(x,y){
  // return the average intensity of pixel(x,y);
  let i = (width*y + x) * 4
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+g+b)/3;
}

function greyScale(){
  // use the average value of each pixel to turn it grey
  for(let x=0; x<width; x++){
    for(let y=0; y<height; y++){
      let avg = getAvg(x,y);
      setPixel(x,y,avg,avg,avg);
    }
  }
}

function boost(){
  // brightening filter
  let boost = map(mouseX, 0, width, -100, 100);
  for (let i=0;i < pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost
    setPixelOneD(i,r,g,b);
  }

}