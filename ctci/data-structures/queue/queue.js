/**
 * With a queue its first in, first out FIFO
 * so 1 -> 2 -> 3 -> 4 -> 5
 * in a stack, thie 1 is the last element pushed on and would be the first to be popped off
 * in a queue the 5 was the first item pushed on, and would be the first item to get popped off
 */

class Queue {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  /**
   * Add an item to the Queue
   */
  push(item) {
    this.items[this.count] = item;
    this.count++;
  }

  /**
   * Remove the next item in the queue
   * 1 -> 2 -> 3 -> 4 -> 5 //size is 5, index is 0
   * 1 -> 2 -> 3 -> 4 //size is 4, index is 0
   * pop() //5
   * pop() //4
   */
  pop() {
    if (!this.isEmpty()) {
      const item = this.items[0];
      //shift elements down
      for (let i = 0; i < this.count; i++) {
        this.items[i] = this.items[i+1];
      }
      delete this.items[this.count-1];
      this.count--;
      return item;
    }
  }

  isEmpty() {
    return this.count <= 0;
  }

  print() {
    let str = '';

    for (let i = 0; i < this.count; i++) {
      str += `${this.items[i]},`;
    }
    console.log(str.substring(0, str.length-1));
  }
}

const queue = new Queue();
queue.push(5);
let item = queue.pop();
console.log(item);
console.log(queue.pop());
queue.push(5);
queue.push(4);
queue.push(3);
queue.push(2);
queue.push(1);
queue.print();

console.log('pop: ' + queue.pop()); //5
console.log('pop: ' + queue.pop()); //4
console.log('pop: ' + queue.pop()); //3
console.log('pop: ' + queue.pop()); //2
console.log('pop: ' + queue.pop()); //1
console.log('pop: ' + queue.pop()); //undefined
queue.push(7);
console.log('pop: ' + queue.pop()); //7