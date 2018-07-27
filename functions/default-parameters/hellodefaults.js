function echo(msg='Hello World') {
  console.log(msg);
}

echo('Hola Mars');    //Hola Mars
echo();               //Hello World


//note: parens are required when using default parameters
const arrowEcho = (msg='Arrow it up') => {
  console.log(msg)
}

arrowEcho('Arrowing...'); //Arrowing...
arrowEcho();              //Arrow it up


/*
 * Default paramers with expressions 
 */

const defaultValue = 10;
function getValue(value=defaultValue) {
  return  value;
}

function printValue(msg, value=getValue()) {
  console.log(`${msg} ${value}`);
}

printValue('value =', 25);    //value = 25
printValue('defaultValue is'); //default value is 10


//setting second param to default to the value of the first
//only works if the first param is defined when the function is called, see examples below
const add = (a, b=a) => {
  return a + b
}

console.log(add(1));                //2
console.log(add(1,1));              //2
console.log(add(1,5));              //6
console.log(add(5,1));              //6
console.log(add(1,undefined));      //2
console.log(add(undefined,1));      //NaN

//setting first param to default to the value of the second
console.log('***add2 examples***');
const add2 = (a=b, b) => {
  return a + b
}

console.log(add2(1));                //NaN
console.log(add2(1,1));              //2
console.log(add2(1,5));              //6
console.log(add2(5,1));              //6
console.log(add2(1,undefined));      //NaN
console.log(add2(undefined,1));      //ReferenceError
