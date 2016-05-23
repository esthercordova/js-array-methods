'use strict';
//
let every = function(array, callback) {

  let bool = true;

  for (let i = 0 , max = array.length ; i < max ; i++) {
    if (!callback(array[i])) {
      return false;
    }
  }
  return true;

};

//eg
let numbers = [1,2,3];
every(numbers, (n) => n > 4);
//false
every(numbers, (n) => n < 4);
//true

module.exports = every;
