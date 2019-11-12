function removeDuplicates(in_arr) {
  const out_arr = [];
  for (let i = 0; i < in_arr.length; i++) {
    let exists = false;
    for (j = 0; j < out_arr.length; j++) {
      if (in_arr[i] === out_arr[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      out_arr.push(in_arr[i]);
    }
  }
  return out_arr;
}

const duplicates = [5,2,3,2,5,5,1,7,2,1,5,8];

console.log(removeDuplicates(duplicates)); //[ 5, 2, 3, 1, 7, 8 ]
