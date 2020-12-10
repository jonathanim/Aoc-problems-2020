

const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n');



function add(arr,targ){
//find two values that sum to 2020
//after finding the 2 values,
//return the result by multiplying val by the second val

let vOne;

let vTwo;


  for (let i = 0; i < arr.length; i++){
    let firstVal = parseInt(arr[i]);

    for( let x = i + 1; x < arr.length; x++){

      let secondVal = parseInt(arr[x]);

      if(firstVal + secondVal === targ){
        vOne = firstVal;
        vTwo = secondVal;
      }

    }
  }
  return vOne * vTwo
}

console.log(add(data, 2020));

//promises

//async / await ()
