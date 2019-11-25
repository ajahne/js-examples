function findFirstNonRepeatedChar(string) {
  let length = string.length;
  const duplicates = [];
  for (let i = 0; i < length; i++) {
    if (typeof duplicates[string.charAt(i)] === 'undefined') {
      duplicates[string.charAt(i)] = false;
    }
    //we have seen this char, its a dup, keep moving
    if (duplicates[string.charAt(i)]) continue;

    for (let j = i + 1; j < length; j++) {
      if (string.charAt(j) === string.charAt(i)) { //duplicate
        duplicates[string.charAt(i)] = true;
        break; //found a dup, leave
      }
    }
    if (duplicates[string.charAt(i)] === false) {
      return string.charAt(i);
    }

  }
}

console.log(findFirstNonRepeatedChar('total'));
console.log(findFirstNonRepeatedChar('teeter'));
console.log(findFirstNonRepeatedChar('foobarfrqbt'));
