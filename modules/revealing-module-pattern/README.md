## Outline
- Definition
- Examples
- References

## Definition
The revealing module pattern is a way to organize our code to obtain reusability and obtain separation between public and private functionality. At its core the pattern is a function that returns an object.

Note: use [Modern Modules](https://ajahne.github.io/blog/javascript/2018/01/23/javascript-import-export-intro.html) where available.

### Why use it?
- reduce global scope pollution
- promote code reuse
- encapsulate functionality
- privacy

## Examples:
Note: All examples provided in ES5 syntax, if using modern browsers, utilize [modern modules](https://ajahne.github.io/blog/javascript/2018/01/23/javascript-import-export-intro.html)
```
var module = function() {
  function privateMethod() {
    //do private thing
  }
  function publicMethod() {
    //do public thing
  }
  
  return {
    publicMethod: publicMethod
  }

};

//use it
var myModule = module();
myModule.publicMethod();
```


Revealing Module Pattern with [IFFE](https://github.com/ajahne/js-examples/tree/master/functions/iffe)
```
var myModule = (function() {
  function privateMethod() {
    //do private thing
  }
  function publicMethod() {
    //do public thing
  }
  
  return {
    publicMethod: publicMethod
  }

})();

//use it
myModule.publicMethod();
```

## Reference links
- [Original Post on the Revealing Module Pattern](https://christianheilmann.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/) by Christian Heilmann 
- Revealing Module Pattern from [O'REILLY](https://www.safaribooksonline.com/library/view/learning-javascript-design/9781449334840/ch09s03.html)
- [Todd Moto On Mastering the Module Pattern](https://toddmotto.com/mastering-the-module-pattern/)
- Revealinbg Module Pattern defintion on [JargonJS](http://jargon.js.org/_glossary/REVEALING_MODULE_PATTERN.md)

