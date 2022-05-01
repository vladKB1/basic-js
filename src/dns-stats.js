const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ans = {};

  domains.forEach(domain => {
    let levelChain = '';
    levels = domain.split('.');

    for (let i = levels.length - 1; i >= 0; i--) {
      levelChain += `.${levels[i]}`;
      if (ans[levelChain]) {
        ans[levelChain]++;
      } else {
        ans[levelChain] = 1;
      }
    }
  });

  return ans;
}

module.exports = {
  getDNSStats
};
