"use strict";

/**
 * Example utilizing closure to create private methods
 * setOvenTemperature and bake are both private methods. These methods cannot
 * be directly accessed.  Because of scoping rules (i.e. closure) both bakeChicken
 * and bakeFish have access to the private methods.
 */
var myDinnerMaker;

function makeDinner() {
  var temperature = 0;
  function setOvenTemperature(value) {
    temperature = value;
  }

  function bake(food) {
    console.log('baking %o', food);
  }

  function bakeChicken() {
    setOvenTemperature(425);
    bake('chicken');
  }

  function bakeFish() {
    setOvenTemperature(350);
    bake('fish');
  }

  return {
    bakeChicken:bakeChicken,
    bakeFish:bakeFish
  }
}

//calling the function makeDinner returns an object, this return triggers the closure.
myDinnerMaker = makeDinner();
myDinnerMaker.bakeChicken();
myDinnerMaker.bakeFish();
