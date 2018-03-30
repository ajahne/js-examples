//includes, startsWidth, endsWidth()
const str = ' Hello World';

//includes
console.log(`
includes:`);    
console.log(str.includes('o'));           //true
console.log(str.includes('foo'));         //false
console.log(str.includes('llo W'));       //true

//startsWith
console.log(`
startsWith:`);
console.log(str.trim().startsWith('h'));  //false
console.log(str.trim().startsWith('H'));  //true

//endsWith
console.log(`
endsWith:`);
console.log(str.endsWith('d'));           //true
console.log(str.endsWith('D'));           //false
console.log(str.endsWith('World'));       //true
console.log(str.endsWith(' World'));      //true
