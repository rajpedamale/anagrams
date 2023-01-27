'use strict';

function reverseString(str) {
    return str.split("").reverse().join("");
}

function isEmptyWord(word) {
  return typeof word === 'undefined';
}

function createAnagrams(word) {
  const returnArray = isEmptyWord(word) ? ['']: [word];
  if (typeof word === 'string' && word.length > 1)
  returnArray.push(reverseString(word));
  return returnArray;
}

module.exports = createAnagrams;
