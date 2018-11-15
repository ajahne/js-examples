var arr = [10,20,30,40,50];
var value

function existsInArray(array, value) {
  //before would use index of
  for (var i = 0; i < array.length; i++) {
    if (array.indexOf(value) !== -1) {
      return true;
    }
  }
  return false;
}

console.log(existsInArray(arr, 40));      //true
console.log(existsInArray(arr, 4));       //false
console.log(existsInArray(arr, 'hello')); //false

console.log(arr.includes(40));            //true
console.log(arr.includes(4));             //false
console.log(arr.includes('hello'));       //false
