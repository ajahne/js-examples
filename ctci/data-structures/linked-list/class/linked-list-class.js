class Node {
  constructor (data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = this.makeNode(value);
    this.pointNodeToHead(node);
    this.pointHeadToNode(node);
  }

  append(value) {
    if (this.isEmpty()) {
      this.add(value);
    } else {
      const node = this.makeNode(value);
      this.pointNodeToTail(node);
      this.pointLastNodeToCurrentNode(node);
    }
  }

  pointLastNodeToCurrentNode(node) {
    const lastNode = this.findLastNode();
    lastNode.next = node;
  }

  findLastNode() {
    let lastNode;
    let currentNode = this.head;
    do {
      if (currentNode.next === this.tail) {
        lastNode = currentNode;
        break;
      } else {
        currentNode = currentNode.next;
      }
    } while (currentNode)

    return lastNode;
  }

  isEmpty() {
    return this.head === null;
  }

  makeNode(data) {
    return new Node(data, null);
  }

  pointNodeToHead(node) {
    node.next = this.head;
  }

  pointNodeToTail(node) {
    node.next = this.tail;
  }

  pointHeadToNode(node) {
    this.head = node;
  }

  print() {
    if (this.head) {
      let currentNode = this.head;
      do {
        console.log(`currentNode.data = ${currentNode.data}`);
        currentNode = currentNode.next;
      } while (currentNode)
    }
    else {
      console.log(`empty list`);
    }
  }
}

const list = new LinkedList();
list.add(5);
list.add(4);
list.add(3);
list.print();

console.log();
list.append(6);
list.add(2);
list.print();
