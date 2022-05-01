const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(mac) {
  mac = mac.split('-');
  if (mac.length !== 6) return false;

  for (let i = 0; i < mac.length; i++) {
    if (mac[i].length !== 2) return false;

    for (let j = 0; j < 2; j++) {
      if (!('0' <= mac[i][j] && mac[i][j] <= '9')
        && !('A' <= mac[i][j] && mac[i][j] <= 'F')) {
        return false;
      }
    }

    return true;
  }
}

//console.log(isMAC48Address('Z1-1B-63-84-45-E6'));

module.exports = {
  isMAC48Address
};
