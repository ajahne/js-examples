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


 /************************
 * Trying out properties
 ************************/
function awesomeDeclaration() {}
const awesomeArrow = () => {};

function printProps(fn) {
  console.log(fn.name);
}

printProps(awesomeDeclaration);
printProps(awesomeArrow);

/************************
 * Trying out Constructors and new
 ************************/

function Constructor() {
  console.log(new.target);
}

const Constructor2 = () => {
  //SyntaxError: new.target only allowed within functions
  //console.log(new.target);
}

const c = Constructor();        //undefined
const c2 = new Constructor();   //[Function: Constructor]

const ca = Constructor2();        //Fine, exectues as expected
const ca2 = new Constructor2();   //TypeError: Constructor2 is not a constructor
