var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////


// Returns x + 4 and x + 6 as "x" and "y", returns result
var bravo = function( par ) {
  return {
    x: (par + 4),
    y: (par + 6) 
  };
}

describe("bravo()", function() {
  it('should return {x: 4, y: 6}, if passed 0,', function() {
    var retval = bravo(0);

    assert.equal( retval.x, 4, '['+retval.x + "] is not what I want (4)" );
    assert.equal( retval.y, 6 );
  });
});