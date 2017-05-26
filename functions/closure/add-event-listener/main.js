"use strict";

/**
 * addEventListener to each button
 * when button is clicked, log index
 */

var buttonIds = ["help", "back", "next"];
var buttons = [];

function addEventListenerToButtons() {
  var i;
  var numberOfButtons = buttonIds.length;
  for (i = 0; i < numberOfButtons; i++) {
    (function() {
      var j = i;
      buttons[i].addEventListener('click', function() {
          logIndex(j);
      });
    }());
  }
}
function addEventListenerToButtonsUsingCallback() {
  var i;
  var numberOfButtons = buttonIds.length;
  for (i = 0; i < numberOfButtons; i++) {
      buttons[i].onclick = onButtonClick(i);
  }
}

function getButtons() {
  var i;
  var numberOfButtons = buttonIds.length;
  for (i = 0; i < numberOfButtons; i++) {
    buttons.push(getElementById(buttonIds[i]));
  }
}

function getElementById(id) {
  return document.getElementById(id);
}

function logIndex(index) {
  console.log(index);
}

function main() {
  getButtons();
  // addEventListenerToButtons();
  addEventListenerToButtonsUsingCallback();
}

function onButtonClick(index) {
  return function() {
    logIndex(index);
  }
}


main();
