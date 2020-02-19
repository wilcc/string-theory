function crazyCase(str) {
  let answer = '';
  for (let i = 0; i < str.length ; i++ ){
    if (i % 2 !==0){ answer = answer + str[i].toUpperCase()
    } else{
      answer += str[i].toLowerCase()
    }
  } return answer
}


function exclaim(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++){
    if (str[i] === '?' || str[i]=== '.'){answer += '!'}
    else {answer += str[i]}
  }return answer
}


function ciEmailify(str) {
  let answer = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' '){answer += '.'}
    else {answer += str[i].toLowerCase()}
    
  }return answer += '@codeimmersives.com'
}

function reverse(str) {
  let answer = ''
  for (let i = str.length-1; i >= 0; i--){
  if (str[i] === '?' || str[i]=== '.'){answer += '!'}
  else {answer += str[i]}
}return answer
}

function crazyCase2ReturnOfCrazyCase(str) {
  let answer = '';
  // let str2 = str.trim()
  // for (let i = 0; i < str2.length ; i++ ){
    
  //   if (i % 2 !==0 && str2[i] !==' '){ answer = answer +str2[i].toUpperCase()
  //   } else if (i % 2 === 0 && str2[i] !==' '){answer += str2[i].toLowerCase()}
  //   else {
  //     // answer += str[i]
  //   } 
  // } return answer
  let counter = 1
  for (let i = 0; i < str.length; i++){
  if (str[i]!==' '){counter++}
  if(counter % 2 !== 0){answer += str[i].toUpperCase()}
  if(counter % 2 === 0){answer += str[i].toLowerCase()}
  }counter ++
  return answer
}


crazyCase2ReturnOfCrazyCase('multiple words here')

function titleCase(str) {
  let answer = '';
  for (let i = 0; i < str.length ; i++ ){
    if (str[i-1] === ' ' || i === 0){answer += str[i].toUpperCase()}
  else {answer += str[i].toLowerCase()}
  }
  return answer 
}
function onlyVowels(str) {
  let vowels='aeiouAEIOU'
  let answer = '';
  for (let i = 0; i < str.length ; i++ ){
    if (vowels.includes(str[i])){answer += str[i]}
  } return answer
}

function crazyCase3SonOfCrazyCase(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let answer = ''
  let counter = 1
    for (let i = 0; i < str.length ; i++ ){
      if(letters.includes(str[i])){counter++}
      if(counter % 2 !== 0){answer += str[i].toUpperCase()}
      if(counter % 2 === 0){answer += str[i].toLowerCase()}
  }
  return answer

}
module.exports = {
  crazyCase,
  exclaim,
  ciEmailify,
  reverse,
  crazyCase2ReturnOfCrazyCase,
  titleCase,
  onlyVowels,
  crazyCase3SonOfCrazyCase
}