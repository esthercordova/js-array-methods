'use strict';

// it reduced the diamension of data:
// takes an array and reduces it to the individual number values
// takes a list of things and turns it into individual things

//eg. [1,2,3].reduce(function(previousValue, currentValue)) {
//return previousValue + currentValue;
//});

//it provides the callbaack with previous and current arguments,
// and accumaltes a final result, it should return result


let reduce = function(array, callback, init) {
  let result; // don't know if its a sting or number

  if (init !== undefiend) {
  let result = init ; //only if init is passed otherwise 0
};
  for (let i =0 , max = array.length ; i < max ; i++) {

    result = callback(result, array[i];
  }
  return  result;
};

//eg

let numbers =[1,2,3];
reduce(numbers, (a,b) => {
  return a + b;
}, 0);

// 6


module.exports = reduce;
