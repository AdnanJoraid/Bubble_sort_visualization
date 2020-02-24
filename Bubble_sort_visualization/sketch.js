let j = 0;
let i = 0;
let array = [];

function setup() {
  createCanvas(600, 600);
  array = new Array(width);
  for (let i = 0; i < array.length; i++) {
    array[i] = noise(i/100.0)*height;
    
   
  }

}

function draw() {
  background(255);

  if (i < array.length) {
    for (let j = 0; j < array.length - i - 1; j++) {
      let leftSide = array[j];
      let rightSide = array[j + 1];
      if (leftSide > rightSide) {

        swapElements(array, j, j + 1);
      }
    }
  } else {
    console.log('DONE');
    noLoop();

  }
  i++ 

  for (let i = 0; i < array.length; i++) {
    stroke(0);
    line(i, height, i, height - array[i]);

  }

}




function swapElements(array, ls, rs) {
  let left = array[ls]; // stores the value of the bigger element
  array[ls] = array[rs];
  array[rs] = left; 

}