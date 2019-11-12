function isNested(str) {
  let left = 0;
  let right = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '(') {
      left++;
    }

    if (str.charAt(i) === ')' && left > right) {
      right++;
    }
  }

  return ((left === right) && (left + right === str.length));
}

console.log(isNested(')'));     //false
console.log(isNested('('));     //false
console.log(isNested('()'));    //true
console.log(isNested('()()'));  //true
console.log(isNested('(())'));  //true
console.log(isNested(')('));    //false
console.log(isNested('(()))('));//false
