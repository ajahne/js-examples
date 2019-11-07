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
    const lastNode = findLastNode();
    lastNode.link = node;
  }

  function findLastNode() {
    let lastNode;
    let currentNode = head;
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
