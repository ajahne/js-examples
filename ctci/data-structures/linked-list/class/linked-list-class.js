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
    lastNode.link = node;
  }

  findLastNode() {
    let lastNode;
    let currentNode = this.head;
    do {
      if (currentNode.link === this.tail) {
        lastNode = currentNode;
        break;
      } else {
        currentNode = currentNode.link;
      }
    } while (currentNode)

    return lastNode;
  }

  isEmpty() {
    return this.head === null;
  }

  makeNode(value) {
    return {
      data: value,
      link: null
    }
  }

  pointNodeToHead(node) {
    node.link = this.head;
  }

  pointNodeToTail(node) {
    node.link = this.tail;
  }

  pointHeadToNode(node) {
    this.head = node;
  }

  print() {
    if (this.head) {
      let currentNode = this.head;
      do {
        console.log(`currentNode.data = ${currentNode.data}`);
        currentNode = currentNode.link;
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
list.print();
