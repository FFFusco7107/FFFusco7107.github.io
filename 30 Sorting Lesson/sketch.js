// Sorting Lesson
// Lucas F.
// Jan 7, 2026

let values = [];
const ARRAY_SIZE = 20;

function setup() {
  noCanvas(); populateArray();
  print(values); // unsorted
  selectionSort(); print(values);
}

function bubbleSort(){
  
}

function selectionSort(){
  // for each index, find the smallest remaining value on right
  // and swap if it is smaller than the item at the index. 
  for(let i = 0; i < values.length-1; i++){
    let minimum = values[i];
    let minimumIndex = i;
    for(let search = i+1; search < values.length; search++){
      let cur = values[search];
      if(cur < minimum){
        minimum = cur;
        minimumIndex = search;
      }
    }
    let temp = values[i];
    values[i] = values[minimumIndex];
    values[minimumIndex] = temp;
  }
}

function populateArray(){
  //using a loop, fill our array randomly
  for(let i = 0; i < ARRAY_SIZE; i++){
    values.push(floor(random(1000))); // 0-999
  }
}