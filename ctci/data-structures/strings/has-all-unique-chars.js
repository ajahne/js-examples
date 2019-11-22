function hasAllUniqueChars(str) {
  const array = [str.charAt(0)];
  for (let i = 1; i < str.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] == str.charAt(i)) {
        return false;
      }
    }
    array.push(str.charAt(i));
  }
  return true;
}

console.log(hasAllUniqueChars('a')); //true
console.log(hasAllUniqueChars('aa')); //false
console.log(hasAllUniqueChars('abc')); //true
console.log(hasAllUniqueChars('abcdeaf')); //false


//No data structures
function hasAllUniqueChars2(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i+1; j < string.length; j++) {
      if (string.charAt(j) == string.charAt(i)) {
        return false;
      }
    }
  }
  return true;
}


console.log(hasAllUniqueChars2('a')); //true
console.log(hasAllUniqueChars2('aa')); //false
console.log(hasAllUniqueChars2('abc')); //true
console.log(hasAllUniqueChars2('abcdeaf')); //false


//one loop, runs in O(n) time
function hasAllUniqueCharsOneLoop(str) {
  const array = [];
  for (let i = 0; i < str.length; i++) {
    if (array[str.charAt(i)]) {
      return false;
    }
    array[str.charAt(i)] = true;
  }
  return true;
}

console.log(hasAllUniqueCharsOneLoop('a')); //true
console.log(hasAllUniqueCharsOneLoop('aa')); //false
console.log(hasAllUniqueCharsOneLoop('abc')); //true
console.log(hasAllUniqueCharsOneLoop('abcdeaf')); //false
