# empty-value
:package: Check if a given value is empty in JS extending his "truthy" and "falsy" nature

### Status
[![Build Status](https://travis-ci.org/juliomatcom/empty-value.svg?branch=master)](https://travis-ci.org/juliomatcom/empty-value)

### Installation
Using **npm**
```sh
npm install --save empty-value
```

##### The following values are considered to be empty:
- NaN
- 0 (0 as an integer)
- 0.0 (0 as a float)
- "0" (0 as a string)
- null
- false
- undefined
- "" (an empty string)
- "  " (an string with only spaces)
- array( ) / \[ \] (an empty array)
- { } (an empty object / no direct keys)

### Usage
```javascript
var empty = require('empty-value');

empty(true) //false
empty(12345) //false
empty(-12345) //false
empty('Lorem Ipsum is simply dummy text') //false
empty([1, 2, 3]) //false
empty({ foo: 'bar' }) //false
empty('{ "id" : 1 }') //false
empty(function () { }) //false

empty(NaN) //true
empty(0) //true
empty(0.0) //true
empty(null) //true
empty(false) //true
empty(undefined) //true
empty('0') //true
empty(''); //true
empty(' '); //true
empty([]) //true
empty({ }) //true

var proto = { foo: 'bar' };
var obj = Object.create(proto);
empty(obj) //true  Note: foo is not a directly property of obj
```

##### Using hooks
If *empty* can't guess the correct answer (IE: value is a function) before return FALSE you could use your own hook.      See example bellow:

```javascript
var myEmptyHook = function (value) {//i don't like functions
  return typeof value === 'function' ? true : false;
}
var func = function () {
  return 'bar';
}

empty(func, myEmptyHook); //true
```

###### License
 [MIT @juliomatcom](http://licsource.com/mit?name=Julio Cesar Martin&year=2016&email=juliomatcom@gmail.com&url=http://julces.com/)
