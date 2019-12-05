class Node {
  constructor(value) {
    this.children = [];
    this.value = value;
  }

  addChild(node) {
    this.children.push(node);
  }

  hasChildren() {
    return this.children.length > 0;
  }

  get value() {
    return this.val;
  }

  set value(val) {
    this.val = val;
  }

  print(indent = '') {
    /**
     * A
     *   B
     *   C
     */
    console.log(`${indent}|_${this.value}`);
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].print(indent + '  ');
    }
  }
}

const nodeA = new Node('A');
const nodeB = new Node('B');
const nodeC = new Node('C');
const nodeD = new Node('D');
const nodeF = new Node('F');

//add children to B
nodeB.addChild(nodeD);
nodeB.addChild(new Node('E'));
nodeB.addChild(nodeF);

//add children to C
nodeC.addChild(new Node('G'));

//add children to D
nodeD.addChild(new Node('H'));
nodeD.addChild(new Node('I'));

//add children to F
const nodeJ = new Node('J');
nodeJ.addChild(new Node('K'));
nodeF.addChild(nodeJ);

//add B and C to A
nodeA.addChild(nodeB);
nodeA.addChild(nodeC);

//print out nodeA
nodeA.print();
