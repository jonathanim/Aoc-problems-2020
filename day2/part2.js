

const fs = require('fs');

const data = fs.readFileSync('text.txt','utf-8');

const passwords = data.split('\n');



// 1 means first chracter

// 2 means second character

//only 1 of this position must include the given character


let sanitizedPassword = [];

let result = 0;


for(let i = 0; i < passwords.length -1; i++){

  let password = passwords[i].split(' ');

  let character = password[1].replace(':', '');

  let indexOne = password[0].split('-')[0];
  let indexTwo = password[0].split('-')[1];

  sanitizedPassword.push({

    firstIndex: parseInt(indexOne),
    secondIndex: parseInt(indexTwo),
    matchingCharacter: character,
    password: password[2]
  });
}


for( let obj of sanitizedPassword){
  if(validated(obj.password,obj.matchingCharacter,obj.firstIndex,obj.secondIndex)=== true){
    result++;
  }


}


function validated(password, char, index, index2){

let arrOfCharacters = password.split('');

let valid = false;
  if(arrOfCharacters.includes(char)){
    if(arrOfCharacters[index -1] === char && arrOfCharacters[index2 -1] !== char){
      valid = true;
    }
    else if(arrOfCharacters[index -1] !== char && arrOfCharacters[index2 -1] === char){
      valid = true;
    }
    else {
      valid = false;
    }
  }

return valid;

}

console.log(result);
return result;

//1-3 a: abcde is valid:
//1-3 b: cdefg is invalid:
//2-9 c: ccccccccc is invalid:
//1-3 a: abcde is valid:
