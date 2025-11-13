// Image Manipulation
// Lucas F.
// Nov 12 2025
//Part 2: swapping to video
let pilot; 

function setup() {
  createCanvas(891, 892);
  loadAssets();
  pixelDensity(1);

}

async function loadAssets(){
  // pilot = await loadImage("assets/aviator.png");
  pilot = await createVideo("assets/bball.mp4");
  pilot.hide();

}

let started = false;

function mousePressed(){
  started = true;
  resizeCanvas(pilot.width,pilot.height,false);
  pilot.loop();
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
  if (started) {
    image(pilot,0,0);
    loadPixels(); // fills the "canvas" pixel aray

    // run a filter to modify pixel array
    // boost();
    //greyScale();

    background(0);
    textImage();

    // updatePixels();
    }
  else {
    text("Click to Start", width/2, height,2);
  }
}
  

function textImage(){
  // render image using characters
  fill(255);
  let scaleAmount = 5;
  textSize(scaleAmount);
  for(let x=0; x<width; x+= scaleAmount){
    for(let y=0; y<height; y+= scaleAmount){
      let avg = getAvg(x,y); // 0-255
      if(avg > 200)   text("%", x, y);
      else if(avg > 180) text("O", x,y);
      else if(avg > 140)   text("/",x,y);
      else if(avg > 100)   text("=",x,y);
      else if (avg > 50) text(",",x,y);
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