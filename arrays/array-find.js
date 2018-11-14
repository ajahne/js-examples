const numbers = [1,4,7,8,9,2];
const value = 8;

const index = numbers.indexOf(value);
console.log(index); //3

console.log(numbers.find(val => val === value)); //8
console.log(numbers.find(val => val === 5));     // undefined
