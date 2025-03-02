const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const countMap1 = {};
  const countMap2 = {};

  for (const char of s1) {
    countMap1[char] = (countMap1[char] || 0) + 1;
  }

  for (const char of s2) {
    countMap2[char] = (countMap2[char] || 0) + 1;
  }

  let commonCount = 0;

  for (const char in countMap1) {
    if (countMap2[char]) {
      commonCount += Math.min(countMap1[char], countMap2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
