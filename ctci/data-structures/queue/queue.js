/**
 * With a queue its first in, first out FIFO
 * so 1 -> 2 -> 3 -> 4 -> 5
 * in a stack, thie 1 is the last element pushed on and would be the first to be popped off
 * in a queue the 5 was the first item pushed on, and would be the first item to get popped off
 */

class Queue {
  constructor() {
    this.count = 0;
    this.queue = {};
  }

  /**
   * Add an item to the Queue
   */
  push(item) {
    this.queue[this.count] = item;
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
    if (this.isEmpty()) {
      return false;
    } else {
      const item = this.queue[this.count-1];
      this.count--;
      return item;
    }
  }

  isEmpty() {
    return this.count <= 0;
  }

  print() {
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

console.log('pop: ' + queue.pop()); //5
console.log('pop: ' + queue.pop()); //4
console.log('pop: ' + queue.pop()); //3
console.log('pop: ' + queue.pop()); //2
console.log('pop: ' + queue.pop()); //1
