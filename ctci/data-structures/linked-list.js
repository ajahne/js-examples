function linkedList() {
  let head = null;
  let tail = null;

  function add(value) {
    const node = makeNode(value);
    pointNodeToHead(node);
    pointHeadToNode(node);
  }

  function append(value) {
    if (isEmpty()) {
      add(value);
    } else {
      const node = makeNode(value);
      pointNodeToTail(node);
      pointLastNodeToCurrentNode(node);
    }
  }

  function pointLastNodeToCurrentNode(node) {
    //find last node
    const lastNode = findLastNode();
    //change link of last node to node
    lastNode.link = node;
  }

  function findLastNode() {
    //loop through all nodes
    //once node.link === null (i.e. tail), we've found it
    let currentNode = head;
    // console.log(head);
    let lastNode;
    do {
      if (currentNode.link === tail) {
        lastNode = currentNode;
        break;
      } else {
        currentNode = currentNode.link;
      }
    } while (currentNode)

    return lastNode;
  }

  function isEmpty() {
    return head === null;
  }

  function makeNode(value) {
    return {
      data: value,
      link: null
    }
  }

  function pointNodeToHead(node) {
    node.link = head;
  }

  function pointNodeToTail(node) {
    node.link = tail;
  }

  function pointHeadToNode(node) {
    head = node;
  }

  function print() {
    if (head) {
      //do algo
      let currentNode = head;
      do {
        console.log(`currentNode.data = ${currentNode.data}`);
        currentNode = currentNode.link;
      } while (currentNode)
    }
    else {
      console.log(`empty list`);
    }
  }

  return {
    add,
    append,
    isEmpty,
    print,
  }
}
