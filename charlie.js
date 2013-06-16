var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////


// Returns "Jenica is my wife"
var charlie = function( name ) {
  return {
    a: name + " is my wife",
    //b: name + " is a man"
  };
}



describe("charlie()", function() {
  it('should return "Jenica is my wife" if passed "Jenica"', function() {
    var retval = charlie('Jenica');

    assert.equal( retval.a, 'Jenica is my wife' );
    //assert.equal( retval.b, 'Vasya is a man');
    
  });
}); 