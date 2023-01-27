'use strict';

function reverseString(str) {
    return str.split("").reverse().join("");
}

function createAnagrams(word) {
  const returnArray = typeof word === 'undefined' ? ['']: [word];
  if (typeof word === 'string' && word.length > 1)
  returnArray.push(reverseString(word));
  return returnArray;
}

module.exports = createAnagrams;
