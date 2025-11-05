// Puzzle Game Assignment
// Lucas F.
// Nov 4, 2025

// 0 (black) 255 (white)

let grid = [
  [0, 0, 0, 255, 0],
  [255, 0, 255, 0, 255],
  [255, 255, 0, 255, 255],
  [0, 255, 0, 0, 0]
];

let rows = grid.length;
let cols = grid[0].length;

let squareSize = 100;

function setup() {
  createCanvas(cols*squareSize, rows*squareSize);
  
}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(), getCurrentY());
}

function mousePressed(){
  //flip the current tile 
  // upgrade: only do this is mouse is on canvas
  
  let x = getCurrentX();
  let y = getCurrentY();

  
  if(keyIsDown(SHIFT)){
    // flip the "focused" tile while pressign shift
    flip(x,y);
  }
  else{
  // IF THEY EXIST: flip our neighbours (cross pattern)  
    flip(x,y);
    if(x+1 < cols) flip(x+1,y);
    if(y-1 >= 0) flip(x,y-1);
    if(x-1 >= 0) flip(x-1,y);
    if(y+1 < rows) flip(x,y+1);
  }
}

function getCurrentX(){
  // determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  // determine current col of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}

function flip(x,y){
  //takes a tile at x,y and inverts its value
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function renderGrid(){
  // interpret the information in the 2D array, and draw a grid of
  // squares on the screen to reflect it
  for(let y = 0;y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}

function win(){
  // if all boxes are the same on the screen say " you win!" across
  // the screen
  let gridColor = grid[0][0];
  for(let y = 0;y < rows; y++){
    for(let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      if(gridColor !== fillColor){
        return;
      }
    }
  if(gridColor === 0){
      fill(255);
    }
  else{
    fill(0);
  } 

  text("YOU WIN!", width/2, height/2);
    
  }
}