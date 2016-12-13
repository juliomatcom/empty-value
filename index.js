'use strict';

function empty (value, hook) {
  if (!value || value === '0') { //test "","0", 0, 0.0, NaN, null, undefined, false, -0
    return true;
  }

  if (typeof value === 'string') {
    return value.replace(/\ /g, '').length ? false : true;
  }

  if (typeof value === 'object') { // arrays and objects
    return Object.keys(value).length ? false : true;
  }

  if (typeof hook === 'function') {
    return hook(value);
  }
  
  return false;
}

module.exports = empty;
