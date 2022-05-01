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

function check(item) {
    const special = ['--double-next', '--double-prev', '--discard-prev', '--discard-next'];

    for (let i = 0; i < special.length; i++) {
        if (item === special[i]) {
            return false;
        }
    }

    return true;
}

function transform(arr) {
    console.log(arr);

    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    let ans = JSON.parse(JSON.stringify(arr));

    for (let i = 0; i < ans.length; i++) {
        switch (ans[i]) {
            case '--discard-next': {
                if (i + 1 < ans.length && check(ans[i + 1])) ans.splice(i + 1, 1);
                break;
            }
            case '--discard-prev': {
                if (i - 1 >= 0 && check(ans[i - 1])) {
                    ans.splice(i - 1, 1);
                    i--;
                }
                break;
            }
            case '--double-next': {
                if (i + 1 < ans.length && check(ans[i + 1])) ans.splice(i + 1, 0, ans[i + 1]);
                break;
            }
            case '--double-prev': {
                if (i - 1 >= 0 && check(ans[i - 1])) {
                    ans.splice(i - 1, 0, ans[i - 1]);
                    i++;
                }
                break;
            }
        }
    }

    for (let i = 0; i < ans.length; i++) {
        if (!check(ans[i])) {
            ans.splice(i, 1);
            i--;
        }
    }

    return ans;
}

module.exports = {
    transform
};

console.log(transform(['--discrard-prev', 4]));
