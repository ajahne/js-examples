class Stack {
  constructor() {
    this.count = 0;
    this.stack = {};
  }

  /**
   * Adds an item to the top of the stack
   */
  push(data) {
    if (data) {
      this.stack[this.count] = data;
      this.count++;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Removes (returns) the top item on the stack
   */
  pop() {
    if (this.count > 0) {
      this.count--;
    }
    //get the value at the key to return
    let value = this.stack[this.count];
    //delete the key
    delete this.stack[this.count];
    //return the value
    return value;
  }

  /**
   * Returns the item on top of the stack without deleting it
   */
  peek() {
    return this.stack[this.count];
  }

  /**
   * Returns true if there are not any elements in the stack
   */
  empty() {
    return this.count <= 0;
  }

  /**
   * Returns the number of items in the stack
   */
  size() {
    return this.count;
  }
}


const stack = new Stack();
console.log(stack.pop());
console.log(stack.size());
console.log(stack.push(1));
console.log(stack.push());
console.log(stack.push());
console.log(stack.push());
console.log(stack.size());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());

console.log();
const array = [];
console.log(array.length);
console.log(array.push());
console.log(array.pop());
console.log(array.pop());
console.log(array.push(5));
console.log(array.pop());


console.log();
const o = {};
o.foo = 'bar';
console.log(`o.foo = ${o.foo}`);
delete o.foo;
console.log(`o.foo = ${o.foo}`);
