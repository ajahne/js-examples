const mySet = new Set();

mySet.add(5);
mySet.add(5);

for (let item of mySet) {
  console.log(item);
}

console.log(mySet);

const uniqueArray = [];
const arrayWithDuplicates = [5,2,3,2,5,5,1,7];
const uniqueSet = new Set(arrayWithDuplicates);

console.log(uniqueSet);

for (let item of uniqueSet) {
  console.log(item);
  uniqueArray.push(item);
}

console.log(uniqueArray);

const unique2 = [...uniqueSet];

console.log(`unique2: ${unique2}`);
