'use strict';
// map()takes an array and calls the callback on each member of the array
// returning a new Array with all the results of these operations.
let map = function(array, callback) {
  let result = [];

  for( let i = 0, max = array.length ; i < max ; i++) {
    result.push(callback(array[i]));
  }
  return result;
};

module.exports = map;

// example
let numbers = [1,4,9];

let roots = map(numbers, Math.sqrt);
// did not change original array but gives new array with new values
// roots = [1,2,3];
// numbers = [1,4,9];
