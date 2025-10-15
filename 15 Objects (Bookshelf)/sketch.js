// Classes and Objects (books) 
// Lucas F.
// Oct 15, 2025


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}


// typically organaize class to bottom 
class Book{
  // 1. constructor
  constructor(title, author, isbn, cover, pages, x){
    this.author = author; 
    this.title = title;
    this.pages = pages;
    // "softcover", "hardcover", "leatherbound"
    this.cover = cover;  
    this.isbn = isbn; 
    this.x = x;
    this.pickedUp = false; 
  }
  
  // 2. class methods 
  display(){
    // render our book object on the canvas
    rectMode(CENTER);   textAlign(CENTER, CENTER);
    textSize(20); 

    switch (this.cover){
      case "softcover":
        fill(250, 200, 150); break;
      case "hardcover":
        fill(120, 255, 255); break;
      case "leatherbound":
        fill(150, 100, 15); break; 
    }

    // now, draw the book elements
    push();
    translate(this.x, height/2);
    rect(0,0,this.pages/10,150);
    fill(255);
    text(this.title[0], this.x, height/2 - 50);
    pop();
  }

  printOut(){

  }
}