function getMax(array) {
  let max = -1;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

console.log(getMax([1,7,12,4,4,8]));  //12
console.log(getMax([0]));             //0
console.log(getMax([1]));             //1
console.log(getMax([10,5,8,3,6]));    //10
console.log(getMax([2,5,9,3,16]));    //16

//one question to ask would've been is there a specific way our program
//needs to handle empty array?

/**
 * Edge cases
 * - empty array
 * - array fille with negative numbers
 */
