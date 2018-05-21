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
