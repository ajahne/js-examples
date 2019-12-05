class Node {
  constructor(value) {
    this.children = [];
    this.value = value;
  }

  addChild(node) {
    this.children.push(node);
  }

  hasChildren() {
    return this.children.length > 0;
  }
}

const node = new Node('A');
console.log(node.hasChildren());
node.addChild(new Node('B'));
node.addChild(new Node('C'));
console.log(node.hasChildren());
