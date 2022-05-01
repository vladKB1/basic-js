const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|' }) {
  str = String(str);
  addition = String(addition);

  addition = String(addition + additionSeparator).repeat(Math.max(1, additionRepeatTimes));
  addition = String(addition).slice(0, addition.length - additionSeparator.length);

  str = String(str + addition + separator).repeat(Math.max(1, repeatTimes));
  return String(str).slice(0, str.length - separator.length);
}

module.exports = {
  repeater
};

console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));