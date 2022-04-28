const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) { 
    console.log(arr);

    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    if (arr instanceof Number) {
        arr = new Array(arr);
    }

    let ans = arr.slice();
    for (let i = 0; i < ans.length; i++) {
        if (ans[i] === '--discard-next') {
            if (i + 1 < ans.length) {
                if (typeof ans[i + 1] != 'string') {
                    ans.splice(i + 1, 1);

                }
            } 
        } else
        if (ans[i] === '--discard-prev') {
            if (i - 1 >= 0) {
                if (typeof ans[i - 1] != 'string') {
                    ans.splice(i - 1, 1);
                    i--;
                }
            }
        } else
        if (ans[i] === '--double-next') {
            if (i + 1 < ans.length) {
                if (typeof ans[i + 1] != 'string') {
                    ans.splice(i + 1, 0, ans[i + 1]);            
                }
            }
        } else 
        if (ans[i] === '--double-prev') {
            if (i - 1 >= 0) {
                if (typeof ans[i - 1] != 'string') {
                    ans.splice(i - 1, 0, ans[i - 1]);
                    i++;
                }
            }
        }
    }    

    for (let i = 0; i < ans.length; i++) {
        if (typeof ans[i] === 'string') {
            //console.log(i);
            ans.splice(i, 1);
            i--;
        }
    }

    return ans;
}

module.exports = {
  transform
};
