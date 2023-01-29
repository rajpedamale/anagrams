'use strict';

function getAnagrams(str) {
    return [str.split("").reverse().join("")];
}

function isEmptyWord(word) {
  return typeof word === 'undefined' || typeof word === 'null';
}

function createAnagrams(word) {
  const returnArray = isEmptyWord(word) ? ['']: [word];
  if (typeof word === 'string' && word.length > 1) {
    const anagrams = getAnagrams(word);
    anagrams.forEach((anagram) => {
      if (!returnArray.includes(anagram)) {
        returnArray.push(anagram);
      }
    });
  }
  return returnArray;
}

module.exports = createAnagrams;
