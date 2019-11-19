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
