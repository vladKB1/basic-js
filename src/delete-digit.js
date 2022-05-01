const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n).split('');

  let max = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    str.splice(i, 1);
    max = Math.max(max, Number(str.join('')));
    str.splice(i, 0, char);
  }

  return max;
}

module.exports = {
  deleteDigit
};

//console.log(deleteDigit(152));