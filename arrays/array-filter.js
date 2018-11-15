var arr = [10,20,30,40,50];
var value = 25;
var filteredArray;

function filter(array, value) {
  var temp = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > value) {
      temp.push(array[i]);
    }
  }
  return temp;
}

filteredArray = filter(arr, value);
console.log(filteredArray);           //[ 30, 40, 50 ]

const newArray = arr.filter(num => num > value);
console.log(newArray);                //[ 30, 40, 50 ]
