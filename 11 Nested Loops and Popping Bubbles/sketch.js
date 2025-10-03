// Nested Loops and Popping Bubbles
// Lucas F.
// Oct 3, 2025

let bubbles = [];
let bubbleSize = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
  //drawWithGrid();
}

function populateArray(){
  // use a nested loop to generate x,y positions for all of our bubbles 
  for(let x = 0; x < width; x+= bubbleSize){
    for(let y = 0; y < height; y+= bubbleSize){
      let b = {
        x: x,  y: y 
      }
      bubbles.push(b); 
    }
  }
}

function showBubbles(){
  // traverse the array, and display a bubble at each (x,y) 
  for(let i = 0; i < bubbles.length; i++){
    let b = bubbles[i]; 
    circle(b.x, b.y, bubbleSize); 
    // point-in-circle distance check (pop):
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      // to delete an item: use .splice()
      // .splice(pos, #ofItemsToDelete, [replacementItems]); 
      bubbles.splice(i, 1); 
    }
  }
}

function draw() {
background(220);
 showBubbles();
}




















function drawWithGrid(){
  for(x = 0; x <= width; x += 30){
    for(y = 0; y<=height; y+= 30){
      circle(x+10, y+10, 2)
    }
  }
}
