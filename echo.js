var assert = require("assert");  // 11
var request = require('request');

var echo = function(e){
  return (e + " is Lord");
}




describe("echo()", function(){
  it ('should return Jesus is Lord, if passed "Jesus"', function() {
    var retval = echo("Jesus");

    assert.equal(retval, "Jesus is Lord");  
  });
  
});