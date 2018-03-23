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
const multiLineTheOldWay = `line 3\nline 4`;
console.log(multiLine);
console.log(multiLineTheOldWay);
console.log(multiLine === multiLineTheOldWay); //false
