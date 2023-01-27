'use strict';

function reverseString(str) {
    return str.split("").reverse().join("");
}

function isEmptyWord(word) {
  return typeof word === 'undefined' || typeof word === 'null';
}

function createAnagrams(word) {
  const returnArray = isEmptyWord(word) ? ['']: [word];
  if (typeof word === 'string' && word.length > 1) {
    const nextWord = reverseString(word);
    if (!returnArray.contains(nextWord) {
      returnArray.push(nextWord);
    }
  }
  return returnArray;
}

module.exports = createAnagrams;
