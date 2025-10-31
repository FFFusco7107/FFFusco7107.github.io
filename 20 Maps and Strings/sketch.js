// Maps Data Structure and Reading Files
// Lucas F.
// Oct 31, 2025

let textFile;
let imgText, rows, cols, colorMap;

function preload(){
  // use this function to load the text from our files
  textFile = loadStrings("assets/info.txt");
  imgText = loadStrings('assets/colorimage.txt');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // processText();

  // determine the number of rows/columns
  rows = imgText.length;
  cols = imgText[0].length;

  // Construct the Map of colors
  colorMap = new Map([
    ['b', 'black'],['w',color(255)],['r','red'],['p','purple'],['l','brown']
  ]);

  drawImage();
}

function drawImage(){
  // read through our text info
  // and construct an image
  let pixelSize = 50;
  for (let y = 0; y < rows ; y++){
    let currentRow = imgText[y];

    for(let x =0; x < cols ; x++){
      let currentKey = currentRow[x];
      fill(colorMap.get(currentKey))
      rect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
}

function draw() {
  // background(220);
}



function processText(){
  // look at 3 different ways to split up a larger string
  // into words or individual characters
  // split()  and ... spread syntax

  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords);

  print("SPLIT INTO CHARACTERS");
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS");
  let spreadChars = [...textFile[2]];
  print(spreadChars);
}