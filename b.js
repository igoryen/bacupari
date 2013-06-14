var assert = require("assert");  // 11
var request = require('request');

var url = 'https://www.transifex.com/api/2/project/amore/?details'; // 2
var authHeader = 'Basic aWdvcnllbjpsMGNhbGl6ZXI=';


function projectRequest ( url, authHeader, callback ) { // 1
  var data = "didn't change";

  request.get({                                  // 4
    url: url,                                    // 5
    headers: {'Authorization': authHeader}       // 6
  }, function(error, response, body) {           // 7
    
   callback( response.statusCode );              // 8

 }); // request.get(); 

} // projectRequest()

///////////////////////////////////////////////////////////////////////

describe('projectRequest()', function(){
  
  it('should return 200 if passed url and authHeader ', function(){

    projectRequest(url, authHeader, function ( data ) {  // 3

      assert.equal(data, 200, '[' + data + '] is not 200' );
    }); // projectRequest()

  }); // it()
}); // describe()

/////////////////////////////////////////////////////////////////////
// 1) $url will take in url, 
//    $authHeader will take in authHeader, 
//    $callback is defined not here, but in the test as function(data){...}
// 2) these assignments seem to influence any code both before and after themselves
// 3) function(data) is the callback() from above. $data gets its value from #8 
// 4) request sends:
// 5) url
// 6) headers
// 7) request gets response and puts it an asynchronous function
//    response into $response, and content into $body
// 8) this asynchronous function invokes callback() and passes it $response.statusCode.