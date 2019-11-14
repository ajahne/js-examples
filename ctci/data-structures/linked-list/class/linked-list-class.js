class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = this.makeNode(data);
    this.pointNodeToHead(node);
    this.pointHeadToNode(node);
  }

  append(data) {
    if (this.isEmpty()) {
      this.add(data);
    } else {
      const node = this.makeNode(data);
      this.pointNodeToTail(node);
      this.pointLastNodeToCurrentNode(node);
    }
  }

  delete(data) {
    if (this.isEmpty()) {
      return false;
    }

    //if only one element
    if (this.head.next === null) {
      this.head = null;
      return true;
    }

    //else find the node to delete
    let currentNode = this.head;

    //if head node to be deleted
    if (currentNode.data === data) {
      this.head = this.head.next;
      currentNode = null;
      return true;
    }

    while(currentNode) {
      //if node found
      if (currentNode.next.data === data) {
        let nodeToDelete = currentNode.next;
        currentNode.next = nodeToDelete.next;
        nodeToDelete = null;
        // break;
        return true;
      }
      currentNode = currentNode.next;
    }

    return false;
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

// const list = new LinkedList();
// list.add(5);
// list.add(4);
// list.add(3);
// list.print();

// console.log();
// list.append(6);
// list.add(2);
// list.print();


const list = new LinkedList();
console.log(list.delete(5));
list.print();
list.add(5);
list.print();
const isDeleted = list.delete(5);
console.log(isDeleted);
list.print();

console.log();
list.add(3);
list.add(2);
list.add(1);
list.append(4);
list.append(5);
list.print();

console.log();
list.delete(3);
list.print();

console.log();
list.delete(5);
list.print();

console.log();
list.append(7);
list.add(0);
list.print();

console.log();
list.delete(0);
list.print();

console.log();
list.delete(1);
list.add(-1);
list.append(10)
list.print();
