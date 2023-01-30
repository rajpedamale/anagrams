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

  it('Should return an array of 1 for a 2 lettered word ' +
     'with repeated characters', () => {
    expect(createAnagrams('aa')).toEqual(['aa']);
  });

  it('Should return 6 items for a 3 letter word', () => {
    const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
    expect(createAnagrams('abc')).toEqual(expected);
  });
});
