//ES5
(function() {
  console.log('IFFE');
}());
  
//ES6 Arrow functions
//notice the ending call '()' is outside the enclosing parenthesis
(() => {
  console.log('IFFE - ES6');
})();
