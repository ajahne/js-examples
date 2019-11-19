//TODO: turn this into a unit test

// const list = new LinkedList();
// list.add(5);
// list.add(4);
// list.add(3);
// list.print();

// console.log();
// list.append(6);
// list.add(2);
// list.print();


const list = new LinkedList();
console.log(list.delete(5));
list.print();
list.add(5);
list.print();
const isDeleted = list.delete(5);
console.log(isDeleted);
list.print();

console.log();
list.add(3);
list.add(2);
list.add(1);
list.append(4);
list.append(5);
list.print();

console.log();
list.delete(3);
list.print();

console.log();
list.delete(5);
list.print();

console.log();
list.append(7);
list.add(0);
list.print();

console.log();
list.delete(0);
list.print();

console.log();
list.delete(1);
list.add(-1);
list.append(10)
list.print();


//get and getData tests
const list = new LinkedList();
list.add('e');  //4
list.add('d');  //3
list.add('c');  //2
list.add('b');  //1
list.add('a');  //0

list.print();

console.log(list.get(2)) //c
console.log(list.get(0)) //a
console.log(list.get(4)) //e
console.log(list.get(17)) //undefined
console.log(list.get(-1)) //null


console.log(list.getData(2)) //c
console.log(list.getData(0)) //a
console.log(list.getData(4)) //e
console.log(list.getData(17)) //undefined
console.log(list.getData(-1)) //undefined

list.delete('e');  //4
list.delete('d');  //3
list.delete('c');  //2
list.delete('b');  //1
list.delete('a');  //0

console.log();
console.log(list.getData(2))  //undefined
console.log(list.getData(0))  //undefined
console.log(list.getData(4))  //undefined
console.log(list.getData(17)) //undefined
console.log(list.getData(-1)) //undefined
