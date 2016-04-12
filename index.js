'use strict';

function empty (value, hook) {
  let test = false;

  if (!value || value === '0') { //test "","0", 0, NaN, null, undefined, false, -0
    test = true;
  }
  else if (typeof value === 'string'){
    test = value.replace(/\ /g, '').length ? false : true;
  }
  else if (typeof value === 'object') { // arrays and objects
    test = Object.keys(value).length ? false : true;
  }
  else if (typeof hook === 'function') {
    return hook(value);
  }

  return test;
}

module.exports = empty;
