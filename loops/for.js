const list = [1, 2, 3, 4, 5, 6, 7];
list.name = 'My Awesome List';

console.log('for');
for (let i = 0; i < list.length; i++) {
  console.log(`list[${i}]: ${list[i]}`);
}

//can perform the same, but cannot use break and continue
console.log('\nforEach');
list.forEach((element, index, array)=>{
  console.log(`list[${index}]: ${element}`);
});

console.log('\nfor with a break');
for (let i = 0; i < list.length; i++) {
  //skip the 2nd index
  if (i == 2) {
    continue;
  }
  
  //do not execute after the 5th element
  if (i == 5) {
    break;
  }
  console.log(`list[${i}]: ${list[i]}`);
}

//iterates over property names, so 'name' is looped over
//e.g. the keys of your object
console.log('\nfor in');
for (let i in list) {
  console.log(`list[${i}]: ${list[i]}`); 
}


//for of iterates through the values in the array
console.log('\nfor of');
for (let i of list) {
  console.log(i);
    // console.log(`list[${i}]: ${list[i]}`); 
}

console.log('\nfor of');
for (let [key,value] of list.entries()) {
  console.log(`${key} ${value}`); 
}

console.log('\nfor of without destructuring');
const a = ['a', 'b', 'c'];
const iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}

