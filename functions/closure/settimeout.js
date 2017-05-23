/**
 * use setttimeout as an example to show where closure can be utilized
 */

/**
 * Closure: because of the scope chain, the message and seconds parameters of the
 * wait function are available to the inner anonymous function
 */
function wait(message, seconds) {
   setTimeout(function() {
     console.log('%o is displayed after %o seconds', message, seconds);
   },seconds * 1000);
 }

wait('hello world', .1);

function loopAndPrint() {
  var i;
  var count = 4;
  for (i = 0; i < count; i++) {
    function doIt(i) {
      setTimeout(function() {
        console.log('setTimeout %o', i);
      }, 1000);
    }
    doIt(i);
  }
}

function loopAndPrint2() {
  var i;
  var count = 4;
  for (i = 0; i < count; i++) {
      (function(i) {
        setTimeout(function() {
          console.log('setTimeout %o', i);
        }, 1000);
      }(i));
  }
}


//loopAndPrint();
loopAndPrint2();
