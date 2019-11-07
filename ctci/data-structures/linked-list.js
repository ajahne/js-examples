//Note: at this point, have not tested for empty, nore are handling empty very well (assuming)

function linkedList() {
  let head = null;
  let tail = null;

  function add(value) {
    const node = makeNode(value);
    pointNodeToHead(node);
    pointHeadToNode(node);
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
    //now should this be something like head.link = node?
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
    print
  }
}

const list = linkedList();
list.add(5);
list.add(2);
list.add(12);
list.add(15);
list.print(); //15, 12, 2, 5
