var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////

var foxtrot = function(f){
  return ("The earth is " + f);
}


describe("foxtrot()", function(){
  it("should return 'The earth is round', if passed 'round'", function(){
    var retval = foxtrot("round");

    assert.equal(retval, "The earth is round");
  });

});