const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ans = [];

  let k = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      k++;
      continue;
    }

    if (k === 1) {
      ans.push(str[i - 1]);
    } else {
      ans.push(k);
      ans.push(str[i - 1]);
    }
    k = 1;
  }
  if (k === 1) {
    ans.push(str[str.length - 1]);
  } else {
    ans.push(k);
    ans.push(str[str.length - 1]);
  }

  return ans.join('');
}

module.exports = {
  encodeLine
};

