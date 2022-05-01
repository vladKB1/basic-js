const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  let n = matrix.length;
  let m = matrix[0].length;

  ans = [];

  for (let i = 0; i < n; i++) {
    ans.push([]);
    for (let j = 0; j < m; j++) {
      let k = 0;
      for (let c = 0; c < 8; c++) {
        if (i + dx[c] < 0 || i + dx[c] >= n || j + dy[c] < 0 || j + dy[c] >= m) continue;
        if (matrix[i + dx[c]][j + dy[c]]) k++;
      }
      ans[i].push(k);
    }
  }

  return ans;
}

module.exports = {
  minesweeper
}

console.log(minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]));