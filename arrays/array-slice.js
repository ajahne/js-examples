const array = [1,3,4,5];
const index = 1;
const part1 = array.slice(0,index);
const part2 = array.slice(index, array.length);
const whole = part1.concat([2]).concat(part2);

console.log(`part1: '${part1}' and part2: '${part2}'`);   //part1: '1' and part2: '3,4,5'
console.log(whole);   //[1,2,3,4,5]
