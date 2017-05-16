/**
 * JS example illustrating usage of call and apply to utilize "parent" function calls and implement
 * inheritance-like features.
 * Source code from JSFiddle example: https://jsfiddle.net/0z3pyy27/2/
 */

var output = document.querySelectorAll('#output')[0];
var iverson;
var kobe;

/**
 * Print the value to the screen by writing the info to the innerHTML of our output div
 * @param {string} value the info to write to the DOM (i.e. print to screen)
 */
function print(value) {
    output.innerHTML += value;
    output.innerHTML += '<br>';
}

/**
 * Player function used to create a new player
 * @param {String} name - name of the player
 * @param {Number} number - the number on the player's jersey
 */
function Player(name, number) {
    this.name = name;
    this.number = number;
}

/**
 * Player function used to create a new point guard
 * @param {String} name - name of the player
 * @param {Number} number - the number on the player's jersey
 */
function PointGuard(name, number) {
    //note usage of call
    Player.call(this, name, number);
    this.position = 'PG';
}

/**
 * Player function used to create a new shooting guard
 * @param {String} name - name of the player
 * @param {Number} number - the number on the player's jersey
 */
function ShootingGuard(name, number) {
    //note usage of apply
    Player.apply(this, arguments);
    this.position = 'SG';
}

iverson = new PointGuard('Allen Iverson', 3);
kobe = new ShootingGuard('Kobe Bryant', 24);

print(iverson.name + ' ' + iverson.number + ' ' + iverson.position);
print(kobe.name + ' ' + kobe.number + ' ' + kobe.position);
