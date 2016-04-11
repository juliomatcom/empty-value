'use strict';

function empty (value, goDeep) {
  return isEmpty(value, goDeep ? goDeep : false)
}

function isEmpty (value, goDeep, deep) {
  let test = false;

  if (!value) { //test "", 0, NaN, null, undefined, false, -0
    test = true
  }
  else if (typeof value === 'string'){
    test = value.replace(' ', '') .length ? false : true
  }
  else if (typeof value === 'object') { // arrays and objects
    test = Object.keys(value).length ? false : true
  }
  else if (goDeep && typeof value === 'function') { //functions
    test = deep ? false : isEmpty(value(), goDeep, 1)
  }

  return test;
}

module.exports = empty
