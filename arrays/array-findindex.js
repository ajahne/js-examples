//ES5 was cool and all...
var arr = [10,20,30,40,50];
var value = 25;
var index;

//say I wanted to find the index of the first value > 25
//I might create a function like this...

function getIndex(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > value) {
      return i;
    }
  }
}

index = getIndex(arr, value);
console.log(index);           //2

//ES6 in the building with that new hotness!
const indexWithNoWork = arr.findIndex(num => num > value);
console.log(indexWithNoWork); //2
