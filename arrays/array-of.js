const a1 = [];
const a2 = new Array();
const a3 = Array.of();

const a1_5 = [5];
const a2_5 = new Array(5);
const a3_5 = Array.of(5);

console.log(a1);  //[]
console.log(a2);  //[]
console.log(a3);  //[]

console.log(a1_5);  //[5]
console.log(a2_5);  //[undefined,undefined,undefined,undefined]
console.log(a3_5);  //[5]

const b = [1,2,3,4,5];
const c = Array.of(b);
const d = new Array(b);
console.log(c); //[ [ 1, 2, 3, 4, 5 ] ]
console.log(d); //[ [ 1, 2, 3, 4, 5 ] ]

const c1 = new Array(1,2,3,4,5);
const c2 = Array.of(1,2,3,4,5);
console.log(c1);  //[1, 2, 3, 4, 5]
console.log(c2);  //[1, 2, 3, 4, 5]
