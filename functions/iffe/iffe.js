const message = 'Hello World';

//ES5
(function() {
  console.log('IFFE');
}());

//ES5 with arguments
(function(msg) {
  console.log(msg);
}(message));
  
//ES5 named function expression
(function logMessage(msg) {
  console.log(msg);
}(message));

//ES6 Arrow functions
//notice the ending call '()' is outside the enclosing parenthesis
(() => {
  console.log('IFFE - ES6');
})();

//ES6 with aguments
(msg => {
  console.log(msg + 'ES6');
})(message);

//ES6 with two args
((msg,version) => {
  console.log(msg + version);
})(message, 'ES6');
