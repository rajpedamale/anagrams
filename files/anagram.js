'use strict';

function createAnagrams(word) {
  return typeof word === 'undefined' ? ['']: [word];
}

module.exports = createAnagrams;
