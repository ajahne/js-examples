class Stack {
  constructor() {
    this.count = 0;
    this.stack = {};
  }

  push(data) {
    this.stack[this.count] = data;
    this.count++;
  }

  pop() {
    this.count--;
    return this.stack[this.count];
  }

  size() {
    return this.count;
  }
}


const stack = new Stack();
console.log(stack.size());
stack.push(1);
console.log(stack.size());
console.log(stack.pop());
console.log(stack.size());
