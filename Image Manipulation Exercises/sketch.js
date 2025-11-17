// Image Generation Exercises
// Lucas F. 
// Nov 13 2025

let chip; 
let race; 
let nuit;
let hand;
let butterfly;

function setup() {
  loadAssets();
  createCanvas(600,600);
  
}

async function loadAssets(){
  chip = await loadImage("assets/chip.jpg");
  race = await loadImage("assets/race.jpg");
  nuit = await loadImage("assets/nuit.jpg");
  hand = await loadImage("assets/hand.jpg");
  butterfly = await loadImage("assets/butterfly.jpg");
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
  // image(chip,0,0);
  // image(race,0,600);
  image(nuit,0,0);
  // image(hand,0,1800);
  // image(butterfly,0,0);

  loadPixels();
  // r,g,b picture
  // majorityColor();
  // noGreen();
  // fiveColor();
  // mirror();
  // rotateImg();
  updatePixels();
}

function getAvg(x,y){
  // return the average intensity of pixel(x,y);
  let i = (width*y + x) * 4
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+g+b)/3;
}

function majorityColor(){
  // set pixels to red,greed,or blue based on rgb values
  // which ever value is the largest is the color that is shown
  for(let x=0; x<width; x++){
    for(let y=0; y< 600; y++){
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

function noGreen(){
  // right side pixels have no green
  for(let x=0; x<width; x++){
    for(let y=600; y<1200; y++){
      let i = (width*y + x) * 4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if (x > width/2){
        setPixel(x,y,r,0,b);
      }
    }
  }
}

function fiveColor(){
  for(let x=0; x<width; x++){
    for(let y=1200; y<1800; y++){
      let avg = getAvg(x,y);
      if ( avg >= 205){
        setPixel(x,y,170,230,220);
      }
      else if( avg >= 155){
        setPixel(x,y,105,150,210);
      }
      else if( avg >= 105){
        setPixel(x,y,120,180,60);
      }
      else if( avg >= 55){
        setPixel(x,y,130,30,130);
      }
      else{
        setPixel(x,y,90,10,50);
      }
    }
  }
}

function mirror(){
  for(let x=0; x<width; x++){
    for(let y=1800; y<height; y++){
      let i = (width*y + x) * 4
      let r = pixels[i];
      let g = pixels[i+1];
      let b = pixels[i+2];
      if(x > width/2){
        setPixel(width-x,y,r,g,b);
      }
    }
  }
}

function rotateImg(){
  let srcPixels = structuredClone(pixels);
  for(let x=0; x<width; x++){
    for(let y=0; y<height; y++){
      let i = (width*y + x) * 4
      let r = srcPixels[i];
      let g = srcPixels[i+1];
      let b = srcPixels[i+2];
      if ( x < width/2 && y < height/2) setPixel(x+width/2,y,r,g,b);
      else if(x > width/2 && y < height/2) setPixel(x,y+height/2,r,g,b);
      else if(x > width/2 && y > height/2) setPixel(x-width/2,y,r,g,b);
      else setPixel(x,y-height/2,r,g,b);
      

    }
  }
}

function getAvgBlur(x,y,r){
  let valueX = 0;
  let valueY = 0; 
  for(let i = 0; i < r; r++){

  }
}

function blur(r){
  let srcPixels = structuredClone(pixels);
  let radius = r;
  for(let x=0; x<width; x++){
    for(let y=0; y<height; y++){
      let i = (width*y + x) * 4
      let r = srcPixels[i];
      let g = srcPixels[i+1];
      let b = srcPixels[i+2];
      let sumR = r;
      let sumG = g;
      let sumB = b;
      for(let t = -radius; t <= radius; t++){
        let i = (width*(y+t + x+t)) * 4;
        sumR += srcPixels[i];
        sumG += srcPixels[i+1];
        sumB += srcPixels[i+2];
      }
    }
  }
}
