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

  /**
   *
   * Return undefined (instead of null) as undefined means this that a value was never
   * set for this index. If undefined, we could get confused between an object that was
   * set to null and this function not finding an element in that index
   */
  get(index) {
    let counter = 0;
    let currentNode = this.head;

    if (this.isEmpty()) {
      return undefined;
    }

    while (currentNode) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }

    return undefined;
  }

  getData(index) {
    let counter = 0;
    let currentNode = this.head;

    while(currentNode) {
      if(counter === index) {
        return currentNode.data;
      }
      currentNode = currentNode.next;
      counter++;
    }

    return undefined;
  }

  indexOf(data) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data == data) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
    return undefined;
  }

  insertAfter(data, index) {
    if (index > -1) {
      let i = 0;
      let currentNode = this.head;

      while (currentNode) {
        if (i === index) {
          const node = new Node(data);
          node.next = currentNode.next;
          currentNode.next = node;
          return true;
        }
        currentNode = currentNode.next;
        i++;
      }
      return false;
    } else {
      return false;
    }
  }

  dedup() {
    let currentNode = this.head;
    let runner;
    let runnerPrev;

    while (currentNode) {
      runner = currentNode.next;
      runnerPrev = currentNode;
      while (runner) {
        if (currentNode.data == runner.data) {
          let nodeToDelete = runner;
          runnerPrev.next = runner.next
          runner = runnerPrev.next;
          nodeToDelete = null;
        } else {
          runnerPrev = runner;
          runner = runner.next;
        }
      }
      currentNode = currentNode.next;
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


const list = new LinkedList();
list.add(1);
list.add(2);
list.add(1);
list.add(2); //head;
list.print();

list.dedup();
console.log();
list.print();

list.delete(2);
list.delete(1);
console.log();
list.print();

console.log();
list.dedup();
list.print();

console.log();
list.add(10);
list.dedup();
list.print();
