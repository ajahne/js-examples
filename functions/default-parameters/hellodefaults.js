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
