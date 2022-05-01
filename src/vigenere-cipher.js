const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;

    this.matrix = [];
    for (let i = 0; i < 26; i++) {
      this.matrix.push([]);
      for (let j = 0; j < 26; j++) {
        this.matrix[i].push((i + j) % 26);
      }
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let ans = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        ans[i] = message[i];
        continue;
      }

      let mesChar = message.charCodeAt(i) - 65;
      let keyChar = key.charCodeAt(Number(j % key.length)) - 65;
      ans[i] = String.fromCharCode(this.matrix[mesChar][keyChar] + 65);
      j++;
    }

    return this.mode ? ans.join('') : ans.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let ans = [];
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90) {
        ans[i] = message[i];
        continue;
      }

      let mesChar = message.charCodeAt(i) - 65;
      let keyChar = key.charCodeAt(Number(j % key.length)) - 65;
      let h = 0;
      for (h = 0; h < 26; h++) {
        if (this.matrix[h][keyChar] === mesChar) break;
      }
      ans[i] = String.fromCharCode(h + 65);
      j++;
    }

    return this.mode ? ans.join('') : ans.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
