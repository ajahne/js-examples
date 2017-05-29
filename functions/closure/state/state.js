"use strict";

var number = '271-7713';
var addNewYorkAreaCode;

/**
 * While the results of these two approaches are the same, this first non-closure
 * approach is not DRY.  Each time, I needed to make a new areaCode function
 * I would have to repeat the 'addAreaCode(AREA_CODE, NUMBER)'
 */
function addAreaCode(areaCode, number) {
  return areaCode + number;
}

function addSpringfieldAreaCocde(number) {
  return addAreaCode('413-', number);
}

/**
 * Same end result as above, however, using closure can keep "state".
 */
function addAreaCodeUsingClosure(areaCode) {
  return function(number) {
    return areaCode + number;
  }
}

addNewYorkAreaCode = addAreaCodeUsingClosure('212-');

console.log('Your Springfield number is: ' + addSpringfieldAreaCocde(number));
console.log('Your New York number is: ' + addNewYorkAreaCode(number));
