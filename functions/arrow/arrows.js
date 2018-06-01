/************************
 * No params
 * - Need parens when no params
 ************************/

const greet = () => {
  console.log('Hello World');
}

//automatically returns result of statment when no brackets exist
const getMessage = () => 'Hola, Mars';

//most explicitily return statement when brackets are used
const getMessage2 = () => {
  return 'Hola, Mars';
}

greet();
console.log(getMessage());

/************************
 * One param
 * - can have parens or not
 ************************/

const echo = msg => msg;
console.log(echo('hey'));
console.log(echo(getMessage()));

//can also have parens with one param
const echo2 = (msg) => 'echo 2: ' + msg;
console.log(echo2('hey'));
console.log(echo2(getMessage()));

/************************
 * Multiple params (i.e. more than one)
 * - must use parens
 ************************/
 const add = (a,b) => a+b;
 const multiply = (x,y) => {
   return x*y;
 }
