var a = 5;
var b = 10;

(() => {
  var b = 3;
  var add = () => (a+b);
  console.log(add(a,b));
})();
