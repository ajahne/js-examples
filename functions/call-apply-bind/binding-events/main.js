/**
 * JS example illustrating usage of bind with event handlers
 * Created Navigation "widget" as a very simplified version of TCS widgets. 
 * JSFiddle: https://jsfiddle.net/f5vs5jug/11/
 */

//div to print our output
var output = document.querySelectorAll('#output')[0];
//instance of HeaderNavigation
var nav;

/**
 * HeaderNavigation component 
 * @example
 * var myNav = new HeaderNavigation();
 */
var HeaderNavigation = (function() {
    'use strict';

    /**
     * Instantiate Navigation and then initialize
     */
    function Navigation() {
        this.name = 'navigation';
        this.init();
    }

    /**
     * Initialize our Nagivation object
     * Grab the DOM elements that make up our nav: help, back, and next buttons
     * Add event listenrs to each button
     */
    Navigation.prototype.init = function() {
        this.element = document.querySelectorAll('.navigation')[0];
        this.buttonHelp = this.element.querySelectorAll('.button-help')[0];
        this.buttonBack = this.element.querySelectorAll('.button-back')[0];
        this.buttonNext = this.element.querySelectorAll('.button-next')[0];
  
        //using this as an example to show binding on an anonymous function
        this.buttonHelp.addEventListener('click', function() {
            this.showHelp();            
        }.bind(this));

        //do not bind the value of this to the back button
        //notice that 'back button' is printed to the screen, but not "going to stage: ..."
        //NOTE: By hitting "F12" to see the developer tools console, you will
        //notice that there is an error "uncaught TypeError: this.goToStage is not a function"
        //This occurs because the "this" in the case below refers to the back button
        //not to our Navigation
        this.buttonBack.addEventListener('click', this.click);

        //bind the click function to our Navigation Object
        //the this in .bind(this) refers to the Navigation Object
        this.buttonNext.addEventListener('click', this.click.bind(this, 'Stage 1'));
    };

    /**
     * Handle button click event
     * print the name of "this" (for tracking/testing)
     * go to the corresponding stage
     */
    Navigation.prototype.click = function() {
        print('click: ' + this.name);
        this.goToStage(arguments[0]);
    };

    /**
     * Print the stage we need to navigate to
     * @param {string} stage the stage to nagivate to (current prints)
     */
    Navigation.prototype.goToStage = function(stage) {
        print('going to stage: ' + stage);
    };
    
    Navigation.prototype.showHelp = function() {
    	alert('You are now being helped :)');
    }

    return Navigation;
}());

/**
 * Print the value to the screen by writing the info to the innerHTML of our output div
 * @param {string} value the info to write to the DOM (i.e. print to screen)
 */
function print(value) {
    output.innerHTML += value;
    output.innerHTML += '<br>';
}

nav = new HeaderNavigation();
