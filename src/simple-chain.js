const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

export default {
    chain: [],

    getLength() {
        return this.chain.length;
    },
    addLink(value) {                
        this.chain.push(' ' + String(value) + ' ');                    
        return this;
    },
    removeLink(position) {
        if (typeof position !== Number || position <= 0 || position > this.chain.length) {
            this.chain = [];
            throw new Error('You can\'t remove incorrect link!');
        }
        this.chain.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let ans = '';
        for (let i = 0; i < this.chain.length - 1; i++) {
            ans = ans + `(${this.chain[i]})~~`;
        }
        ans = ans + `(${this.chain[this.chain.length - 1]})`;
        this.chain = [];
        return ans;
    },
};

module.exports = {
  chainMaker
};
