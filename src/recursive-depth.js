const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let ans = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) || arr[i].length === '') {
        ans = Math.max(ans, this.calculateDepth(arr[i]) + 1);
      }
    }
    return ans; IsN
  }

}


function sortByBit(arr) {
  arr.sort((a, b) => {
    let aa = calcBits(a);
    let bb = calcBits(b);
    if (aa > bb) {
      return 1;
    } else
      if (aa === bb) {
        if (a > b) {
          return 1;
        } else {
          return -1;
        }
      } else {
        return -1;
      }
  })

  return arr;
}

function calcBits(x) {
  let ans = 0;
  while (x != 0) {
    if (x % 2 === 1) ans++;
    x = Math.trunc(x / 2);
  }
}

console.log(sortByBit([3, 8, 3, 6, 5, 7, 9, 1]));


module.exports = {
  DepthCalculator
}