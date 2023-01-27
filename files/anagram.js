'use strict';

function permutate(str) {
  if (str.length <= 1) {
    return str;
  } 
  const strArray = str.split("");
  if (strArray.length === 2) {
    return strArray.reverse().join("");;
  }
  return permutate(permutate(strArray.slice(1).join(""))
                   + strArray[0]);
}

function isEmptyWord(word) {
  return typeof word === 'undefined' || typeof word === 'null';
}

function createAnagrams(word) {
  const returnArray = isEmptyWord(word) ? ['']: [word];
  if (typeof word === 'string' && word.length > 1) {
    const nextWord = reverseString(word);
    if (!returnArray.includes(nextWord)) {
      returnArray.push(nextWord);
    }
  }
  return returnArray;
}

module.exports = createAnagrams;
