var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////



// Returns Ottawa is the capital of Canada, if passed 'Ottawa'
var delta = function( city ) {
  return {
    a: city + " is in Canada",
    b: city + " is the capital of Canada"
  };
}


describe("delta()", function() {
  it('should return "Ottawa is the capital of Canada" if passed "Ottawa"', function() {
    var retval = delta('Ottawa');

    assert.equal( retval.a, "Ottawa is in Canada" );
    assert.equal( retval.b, "Ottawa is the capital of Canada");
    
  });
});