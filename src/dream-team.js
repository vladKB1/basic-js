const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let ans = '';

  members.forEach(name => {
    if (typeof name === 'string') {
      let i = 0;
      while (name[i] === ' ') i++;
      ans = ans + name[i].toUpperCase();
    }
  });

  ans = ans.split('').sort().join('');

  return ans === '' ? false : ans;
}
