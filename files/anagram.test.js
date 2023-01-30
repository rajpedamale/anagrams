'use strict';

const createAnagrams = require('./anagram');

describe('Anagrams', () => {
  it('Should return an array of words', () => {
    expect(createAnagrams()).toEqual([undefined]);
  });


});
