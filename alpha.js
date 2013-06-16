var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////



// Returns x + 2 and x + 4 as "x" and "y", returns result
var alpha = function( par ) { // 3 
  return {           
    x: (par + 2),  
    y: (par + 4)
  };
}

describe("alpha()", function() {
  it('should return {x: 2, y: 4} if passed 0,', function() {
    var retval = alpha(0); // we are passing 0

    // 1 
    assert.equal( retval.x, 2 ); // 2
    assert.equal( retval.y, 4 );
  });
});

// 1) I assert that there is an equality
    // between what I get and what I want 
    // if there is no equality, then I have a problem
// 2) how do I know what I want?
// 3) alpha() will be a function which will return a json object (the parent of all arrays)