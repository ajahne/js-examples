class Stack {
  constructor() {
    this.count = 0;
    this.stack = {};
  }

  /**
   * Adds an item to the top of the stack
   */
  push(item) {
    if (item) {
      this.stack[this.count] = item;
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
   * Return a string of the items in the stack
   */
  print() {
    let string = '';
    for (let i = this.size()-1; i >= 0; i--) {
      // console.log(`\tthis.stack[${i}]: ${this.stack[i]}`);
      string += this.stack[i] + ',';
    }
    console.log(string.substring(0, string.length -1));
  }

  /**
   * Returns true if there are not any elements in the stack
   */
  isEmpty() {
    return this.count <= 0;
  }

  /**
   * Returns the number of items in the stack
   */
  size() {
    return this.count;
  }

  /**
   * Swap the first two items in the stack.
   * so if stack had a,b then after swap it would be b,a
   */
  swap() {
    if (this.count > 1) {
      //top item is count -1 (or size-1)
      let topItem = this.stack[this.count-1];
      //second item is count -2 (or size-2)
      let secondItem = this.stack[this.count-2];

      //swap the items
      this.stack[this.count-1] = secondItem;
      this.stack[this.count-2] = topItem;  
    }
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
stack.print();
console.log('isEmpty: ' + stack.isEmpty()); //true
console.log('push a: ' + stack.push('a'));
console.log('push b: ' + stack.push('b'));
console.log('push c: ' + stack.push('c'));
console.log('push d: ' + stack.push('d'));
console.log('push e: ' + stack.push('e'));
stack.print();
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
stack.print();                        //b,a
console.log('isEmpty: ' + stack.isEmpty()); //false
//after swap, stack should be a,b
stack.swap();
stack.print();                        //a,b
stack.swap();
stack.print();                        //b,a
stack.pop();
stack.print();                        //a
stack.swap();
stack.print();                        //a


// console.log();
// const array = [];
// console.log(array.length);
// console.log(array.push());
// console.log(array.pop());
// console.log(array.pop());
// console.log(array.push(5));
// console.log(array.pop());
//
//
// console.log();
// const o = {};
// o.foo = 'bar';
// console.log(`o.foo = ${o.foo}`);
// delete o.foo;
// console.log(`o.foo = ${o.foo}`);
