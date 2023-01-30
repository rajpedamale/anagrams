'use strict';

const createAnagrams = require('./anagram');

describe('Anagrams', () => {
  it('Should return an array of words', () => {
    expect(createAnagrams()).toEqual([undefined]);
  });

  it('Should return an array of same word for a single letter', () => {
    expect(createAnagrams('a')).toEqual(['a']);
  });

  it('Should return an array of 2 for a 2 lettered word', () => {
    expect(createAnagrams('ab')).toEqual(['ab', 'ba']);
  });

});
