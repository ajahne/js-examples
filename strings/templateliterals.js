//equality
console.log(`1` === '1'); //true
console.log(`1` === "1"); //true
console.log('1' === "1"); //true

//initial tests
const message = `hello world`;
const greeting = 'hello';
const planet = 'world';
let msg = greeting + ' ' + planet;
let templateMsg = `${greeting} ${planet}`;
console.log(msg);
console.log(templateMsg);
console.log(templateMsg === msg); //true

//multi-line strings
const multiLine = `line 1
line 2`;
const multiLineTheOldWay = `line 1\nline 2`;
const multiLineTheOldWayWithReturnChar = `line 1\rline 2`;
console.log(multiLine);
console.log(multiLineTheOldWay);
console.log(multiLineTheOldWayWithReturnChar);
console.log(multiLine === multiLineTheOldWay); //true
console.log(multiLine === multiLineTheOldWayWithReturnChar); //false

//string concatenation and template literal
const a = 5;
const b = 5;
const add = (a,b) => a+b;
//standard concatenation
const oldAndBusted = a + ' + ' + b + ' = ' + add(a,b);
//template literal
const newHotness = `${a} + ${b} = ${add(a,b)}`;


console.log(oldAndBusted);                    //5 + 5 = 10
console.log(newHotness);                      //5 + 5 = 10
console.log(oldAndBusted === newHotness);     //true  


//console support, but would not help if we need the result 
//to use in our code and not just something that we need to log out
console.log('%o + %o = %o', a, b, add(a,b));  //5 + 5 = 10
