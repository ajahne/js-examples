const arr = [10,20,30,40,50];
const foo = arr.copyWithin(1, 0);
console.log(arr);   //[ 10, 10, 20, 30, 40 ]
console.log(foo);   //[ 10, 10, 20, 30, 40 ]
