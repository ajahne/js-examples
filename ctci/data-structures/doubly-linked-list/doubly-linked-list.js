class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  add(data) {
    if (this.isEmpty()) {
      const node = new Node(data);
      this.head = node;
    }
    else {
      const node = new Node(data);
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  append(data) {
    if (this.isEmpty()) {
      this.add(data);
    }
    else {
      const node = new Node(data);
      this.tail = this.findTail();
      this.tail.next = node;
      node.prev = this.tail;
    }
  }

  findTail() {
    //loop through until you find node with next is null
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      // console.log(current);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();
console.log(list.isEmpty());

list.add(5);
console.log(list.isEmpty());

list.add(4);
list.add(3);
list.add(2);
list.add(1);

list.print();
console.log();
list.append(6);
list.print();
