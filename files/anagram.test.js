'use strict';

const createAnagrams = require('./anagram');

describe('Anagrams', () => {
  it('Should complete execution', () => {
    expect(createAnagrams('')).toEqual('');
  });
});
