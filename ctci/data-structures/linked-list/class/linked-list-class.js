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
