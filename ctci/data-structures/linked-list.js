function linkedList() {
  let head = null;
  let tail = null;

  function add(value) {
    const node = makeNode(value);
    pointNodeToHead(node);
    pointHeadToNode(node);
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
    isEmpty,
    print
  }
}

const list = linkedList();
console.log(list.isEmpty()); //true
list.add(5);
console.log(list.isEmpty()); //false
list.add(2);
list.add(12);
list.add(15);
console.log(list.isEmpty()); //false
list.print(); //15, 12, 2, 5
