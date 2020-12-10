


const fs = require('fs');

const data = fs.readFileSync('text.txt','utf-8');


const passwords = data.split('\n');

// return how many passwords ere valid from the data

const sanitizedPasswords = [];

let valid = 0;

//first convert the password data into obj with minReq and maxReq, casematch, passwords

//push each object created to the new array of sanitized passwords;

//check if the password is valid

//if valid then add to counter

// return counter

for(let i = 0; i < passwords.length -1; i++){
  // split each string line
  let password = passwords[i].split(' ');
  let minMax = password[0].split('-');
  let character = password[1].replace(':', '');
  let objectInfo = {
    min: parseInt(minMax[0]),
    max: parseInt(minMax[1]),
    character,
    password: password[2]
  };
  sanitizedPasswords.push(objectInfo);
}

  for(let obj of sanitizedPasswords){

    let sortedPassword = obj.password.split('').sort().join('');

    let minReqCharacter = obj.character.repeat(obj.min);

    let maxReqCharacter = obj.character.repeat(obj.max);

  if(validated(sortedPassword,obj.character,obj.min, obj.max) === true){
    valid++;
  }

  }
//2-7 b: fdbvbdb ==> bbb dd f v


  function validated(password, character, min, max){

    let passwordArr = password.split(''); // split password into Array
    let onlyChar = ''; //the matching characters in password

    if(password.includes(character)){
      for(let i = 0; i < passwordArr.length; i++){
        if(passwordArr[i] === character){
          onlyChar = onlyChar + passwordArr[i];
        }
      }
    }
    //
    if(onlyChar.length >= min && onlyChar.length <= max ){
      return true;
    }else {
      return false;
    }
  }

console.log(valid);
return valid;




  // '9-10 b: bbktbbbxhfbpb', '9-10' 'b:' 'bbktbbbxhfbpb'
  // '2-10 x: xxnxxxwxxsx',
  // '5-7 w: ghwwdrr',
  // '4-6 z: nzzjzk',
