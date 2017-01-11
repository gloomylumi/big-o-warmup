'use strict';

// O(1) - Constant
function sumTwoNumbers( num1, num2 ) {
  return num1 + num2;
}

// O(n) - Linnear
function arrayMinusOne( array ) {
  for ( var i = 0; i < array.length; i++ ) {
    array[ i ] -= 1;
  }
}

// O(n^2) - Quadratic
function sumNestedArrays( arr ) {
  var arrayOfSums = [];
  for ( var i = 0; i < arr.length; i++ ) {
    arrayOfSums.push( arr[ i ].reduce( ( a, b ) => a + b, 0 ) );
  }
  return arrayOfSums;
}

var nestedArray = [
  [ 1, 0 ],
  [ 1, 1 ],
  [ 1, 1, 1 ]
];
console.log( sumNestedArrays( nestedArray ) );
