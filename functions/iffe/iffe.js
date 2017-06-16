const message = 'Hello World';

//ES5
(function() {
  console.log('IFFE');
}());

//ES5 with arguments
(function(msg) {
  console.log(msg);
}(message));
  
//ES6 Arrow functions
//notice the ending call '()' is outside the enclosing parenthesis
(() => {
  console.log('IFFE - ES6');
})();
