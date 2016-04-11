'use strict';

var assert = require('chai').assert;
var empty = require('../');

describe('empty-value', function() {

  describe('Booleans', function () {
    it('should return FALSE if true', function () {
      assert.equal(empty(true), false);
    });

    it('should return TRUE if false', function () {
      assert.equal(empty(false), true);
    });
  });

  describe('Null', function () {
    it('should return TRUE if value is null', function () {
      assert.equal(empty(null), true);
    });
  });

  describe('Undefined', function () {
    it('should return TRUE if value is undefined', function () {
      assert.equal(empty(undefined), true);
    });
  });

  describe('Number', function () {
    it('should return TRUE if value is Number === 0 or NaN', function () {
      assert.equal(empty(0), true);
      assert.equal(empty(NaN), true);
    });

    it('should return FALSE if value is Number !== 0', function () {
      assert.equal(empty(1), false);
      assert.equal(empty(-1), false);
    });
  });

  describe('Strings', function () {
    it('should return TRUE if empty', function () {
      assert.equal(empty(''), true);
    });

    it('should return FALSE if \'0\'', function () {
      assert.equal(empty('0'), false);
    });

    it('should return TRUE if only contain spaces', function () {
      assert.equal(empty('   '), true);
    });

    it('should return FALSE if contain chars differents than spaces ', function () {
      assert.equal(empty(' foo '), false);
    });
  });

  describe('Arrays', function () {
    it('should return TRUE if empty', function () {
      assert.equal(empty([]), true);
    });

    it('should return FALSE if not empty', function () {
      assert.equal(empty([1, 'bar']), false);
    });
  });

  describe('Objects', function () {
    it('should return TRUE if empty', function () {
      assert.equal(empty({}), true);
    });

    it('should return FALSE if not empty', function () {
      assert.equal(empty({ foo : 'bar' }), false);
    });

    it('should return TRUE if not have directly properties', function () {
      let proto = {
        foo : 'bar'
      };
      let obj = Object.create(proto);

      assert.equal(empty(obj), true);
    });
  });

  describe('Hooks', function () {

    it('should return FALSE if value is a function and theres is NO Hook', function () {
      let func = function () {
        return 'foo';
      }
      assert.equal(empty(func), false);
    });
    it('should return TRUE if value is a function and pass a Hook', function () {
      let myHook = function (value) {
        return typeof value === 'function';
      }
      let func = function () {
        return 'foo';
      }

      assert.equal(empty(func, myHook), true);
    });
  });

});
