"use strict";

var gadgetMaker;
var gadgetA;
var gadgetB;

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

gadgetMaker = gadgetFactory();
gadgetA = gadgetMaker("TV");
gadgetB = gadgetMaker("Switch");

console.log("The %o has id is: %o", gadgetA.name, gadgetA.id);
console.log("The %o has id is: %o", gadgetB.name, gadgetB.id);
