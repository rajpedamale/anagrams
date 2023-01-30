'use strict';

function isEmptyWord(word) {
  return typeof word === 'undefined' || typeof word === 'null';
}

function createAnagrams(word) {
  if (isEmptyWord(word) || word.length<2) { 
    return [word];
  }
  const returnArray = [];
  for (let i=0; i<word.length; i++) {
    const currentChar = word[i];
    const remainingChars = word.slice(0,i) + word.slice(i+1);
    const anagrams = createAnagrams(remainingChars);
    anagrams.forEach((anagram) => {
      if (!returnArray.includes(anagram)) {
        returnArray.push(anagram);
      }
    });
  }
  return returnArray;
}

module.exports = createAnagrams;
