// const shallowCopy = (a) => {
//   const copy = [];
//   a.forEach(function(value){
//     copy.push(value);
//   });
//   return copy;
// }

function shallowCopy (a) {
  var temp = [];
  a.forEach(function(value){
    temp.push(value);
  });
  return temp;
};

const arr = [1,2,3,4,5];
const temp = shallowCopy(arr);
console.log(temp);  //[ 1, 2, 3, 4, 5 ]

//let's simplify all of that!
const a = Array.from(arr);
console.log(a);     //[ 1, 2, 3, 4, 5 ]


//A note about Array.of()
//a shallow copy, copies the values, not the reference
//so the two arrays are not equal, as opposed to
//assigning an array to another variable, which ensures
//they point to the same reference
const b = a;

console.log (a === arr);  //false
console.log (a === b);    //true
