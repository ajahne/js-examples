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
    return this.stack[this.count-1];
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
console.log('pop: ' + stack.pop());
console.log('size: ' + stack.size());
console.log('peek: ' + stack.peek());
console.log('push a: ' + stack.push('a'));
console.log('push ' + stack.push());
console.log('push ' + stack.push());
console.log('push ' + stack.push());
console.log('size: ' + stack.size());
console.log('peek: ' + stack.peek());
console.log('pop: ' + stack.pop());
console.log('peek: ' + stack.peek());
console.log('pop: ' + stack.pop());
console.log('pop: ' + stack.pop());
console.log('size: ' + stack.size());

console.log();
console.log('empty: ' + stack.empty()); //true
console.log('push a: ' + stack.push('a'));
console.log('push b: ' + stack.push('b'));
console.log('push c: ' + stack.push('c'));
console.log('push d: ' + stack.push('d'));
console.log('push e: ' + stack.push('e'));
console.log('size: ' + stack.size()); //5
console.log('push ' + stack.push());
console.log('push ' + stack.push());
console.log('push ' + stack.push());
console.log('size: ' + stack.size()); //5
console.log('peek: ' + stack.peek()); //e
console.log('pop: ' + stack.pop());   //e
console.log('peek: ' + stack.peek()); //d
console.log('pop: ' + stack.pop());   //d
console.log('pop: ' + stack.pop());   //c
console.log('size: ' + stack.size()); //2
console.log('empty: ' + stack.empty()); //false

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
