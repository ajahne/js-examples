function gadgetFactory() {
  var id = 0;
  return function(name) {
    id++;
    return {
      id:id,
      name:name
    }
  }
}

var gadgetMaker = gadgetFactory();
var gadgetA = gadgetMaker("TV");
var gadgetB = gadgetMaker("Switch");

console.log("The %o has id is: %o", gadgetA.name, gadgetA.id);
console.log("The %o has id is: %o", gadgetB.name, gadgetB.id);
