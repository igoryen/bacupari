var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////



// Returns x + 2 and x + 4 as "x" and "y", returns result
var alpha = function( par ) { // alpha shall be a function
  return {                // which will return ...
    x: (par + 2),   // a json object, the parent of all arrays
    y: (par + 4)
  };
}

describe("alpha()", function() {
  it('should return {x: 2, y: 4} if passed 0,', function() {
    var retval = alpha(0); // we are passing 0

    // I assert that there is an equality
    // between what I get and what I want 
    // if there is no equality, then I have a problem
    assert.equal( retval.x, 2 ); // how do I know what I want?
    assert.equal( retval.y, 4 );
  });
});