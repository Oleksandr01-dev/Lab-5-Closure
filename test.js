
'use strict';

const assert = require('node:assert/strict');

const { seq } = require('./1-seq');
const { array } = require('./2-array');


assert.equal(seq(x => x + 7)(x => x * 2)(5), 17);
assert.equal(seq(x => x * 2)(x => x + 7)(5), 24);

assert.equal(
  seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7),
  3
);

console.log('Завдання 1: усі тести пройдено');


const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

assert.equal(arr(0), 'first');
assert.equal(arr(1), 'second');
assert.equal(arr(2), 'third');

assert.equal(arr.pop(), 'third');
assert.equal(arr.pop(), 'second');
assert.equal(arr.pop(), 'first');
assert.equal(arr.pop(), undefined);

console.log('Завдання 2: усі тести пройдено');
