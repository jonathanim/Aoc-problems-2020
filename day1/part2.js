

const fs = require('fs');

const data = fs.readFileSync('data.txt', 'utf-8').split('\n');


// three numbers in your expense report that meet the same criteria.

let total = 2020;


function findThree(array, target){

//find 3 values in the array to equal to 2020
//multiple the 3 values and return the result

let values = [];

  for(let i = 0; i < array.length; i++){
    let firstVal = parseInt(array[i]);

    for (let x = i + 1; x< array.length; x++){
      let secondVal = parseInt(array[x]);
      for (let t = x + 1 ; t < array.length; t++) {
        let thirdVal = parseInt(array[t]);
          if (firstVal + secondVal + thirdVal === target){
            values.push(firstVal,secondVal,thirdVal)
        }
      }
    }
  }
  return values[0] * values[1] * values[2]
}


console.log(findThree(data, total))
