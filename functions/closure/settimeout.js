/**
 * use setTimeout as an example to show where closure can be utilized
 */

/**
 * Closure: because of the scope chain, the message and seconds parameters of the
 * wait function are available to the inner anonymous function
 */
function wait(message, seconds) {
  console.log('wait');
  setTimeout(function() {
    console.log('%o is displayed after %o seconds', message, seconds);
  },seconds * 1000);
 }

/**
 * Illustrate the use of closure by wrapping a function around setTimeout to
 * ensure the anonymous function obtains the correct loop index.
 */
function loopAndPrint() {
  var i;
  var count = 4;
  for (i = 0; i < count; i++) {
    function doIt(i) {
      setTimeout(function() {
        console.log('loopAndPrint - setTimeout %o', i);
      }, 1000);
    }
    doIt(i);
  }
}

/**
 * Same example as loopAndPrint, except using an IFFE to wrap the setTimeout in
 * order to ensure the anonymous function passed into setTimeout has the correct
 * index.
 * Note: 'i' is passed into the IFFE and the parameter is 'index', to show that
 * the parameter name can be changed within the function signature
 */
function loopAndPrintWithIFFE() {
  var i;
  var count = 4;
  for (i = 0; i < count; i++) {
      (function(index) {
        setTimeout(function() {
          console.log('loopAndPrintWithIFFE - setTimeout %o', index);
        }, 1000);
      }(i));
  }
}

wait('hello world', .1);
loopAndPrint();
loopAndPrintWithIFFE();
