'use strict';

function createAnagrams(word) {
  const returnArray = typeof word === 'undefined' ? ['']: [word];
  if (typeof word === 'string' && word.length > 1)
  returnArray.push(word.reverse());
  return returnArray;
}

module.exports = createAnagrams;
