const str = 'abc';

//we want bc to print
let index = 0;
let start = str.substring(0, index);
let end = str.substring(index+1, str.length);
let result = start + end;
console.log(result);

//we want ac to print
index = 1;
start = str.substring(0, index);
end = str.substring(index+1, str.length);
result = start + end;
console.log(result);

//we want ab to print
index = 2;
start = str.substring(0, index);
end = str.substring(index+1, str.length);
result = start + end;
console.log(result);
