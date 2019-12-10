class Node {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
  }
}

const node = new Node('A');

console.log(node.left);
console.log(node.val);
