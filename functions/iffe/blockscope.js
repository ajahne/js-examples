var a = 5;
var b = 10;

(() => {
  var b = 3;
  var add = () => (a+b);
  console.log(add());
})();

//explicit block scope
{let b, add;
  b = -4;
  add = b => (a+b);   //add sig is different just to experiment with arrow functions that have params
  console.log(add(b));
}
