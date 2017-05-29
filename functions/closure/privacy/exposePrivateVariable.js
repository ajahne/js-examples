"use strict";

var gadgetMaker;
var gadgetA;
var gadgetB;
var gadgetC;

function gadgetFactory() {
  var numberOfGadgets = 0;
  return function(name) {
    var id;
    numberOfGadgets++;
    id = numberOfGadgets;
    return {
      getId:function() {
        return id;
      },
      name:name
    }
  }
}

gadgetMaker = gadgetFactory();
gadgetA = gadgetMaker("TV");
gadgetB = gadgetMaker("Switch");
gadgetC = gadgetMaker("Laptop");

console.log("The %o has id is: %o", gadgetA.name, gadgetA.getId());
console.log("The %o has id is: %o", gadgetB.name, gadgetB.getId());
console.log("The %o has id is: %o", gadgetC.name, gadgetC.getId());
