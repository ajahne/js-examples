const a = 5;
const b = 10;

(() => {
  let b = 3;
  let add = () => (a+b);
  console.log(add());
})();

//explicit block scope
{let b, add;
  b = -4;
  add = b => (a+b);   //add sig is different just to experiment with arrow functions that have params
  console.log(add(b));
}
