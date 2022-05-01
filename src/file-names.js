const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

let map = new Map();

function setName(str) {
  if (!map.has(str)) {
    map.set(str, 1);
    return str;
  } else {
    let k = map.get(str);
    map.set(str, k + 1);

    str = str + `(${k})`;
    return setName(str);
  }
}

function renameFiles(names) {
  for (let i = 0; i < names.length; i++) {
    names[i] = setName(names[i]);
  }

  return names;
}

module.exports = {
  renameFiles
};

//console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));