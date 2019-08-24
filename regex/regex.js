const str1 = 'extract function (106)';
const str2 = 'foo bar baz extract function (106) lorem ipsum';
const str3 = 'ExtracT Function (106)';
const str4 = 'extract new function (106)';

const re = /extract\sfunction\s\(106\)/ig;
// const myRe = new RegExp('extract\\sfunction\\s\\(106\\)', 'ig');

console.log(str1.match(re)); //[ 'extract function (106)' ]
console.log(str2.match(re)); //[ 'extract function (106)' ]
console.log(str3.match(re)); //[ 'ExtracT Function (106)' ]
console.log(str4.match(re)); //null

console.log('test');
console.log(re.test(str1)); //true
console.log(re.test(str2)); //false --> because the regex is stateful, should be true
console.log(re.test(str3)); //true
console.log(re.test(str4)); //false
