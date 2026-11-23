'use strict';

const seq = (f) => {
  const next = (value) => {
    if (typeof value === 'number') {
      return f(value);
    }

    return seq((x) => f(value(x)));
  };

  return next;
};

module.exports = { seq };
console.log(seq(x => x + 7)(x => x * 2)(5)); 

console.log(seq(x => x * 2)(x => x + 7)(5)); 

console.log(
  seq(x => x + 1)
     (x => x * 2)
     (x => x / 3)
     (x => x - 4)(7)
); 