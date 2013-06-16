var assert = require("assert");  // 11
var request = require('request');

var url = 'https://www.transifex.com/api/2/project/amore/?details'; // 2
var authHeader = 'Basic aWdvcnllbjpsMGNhbGl6ZXI=';

console.log('10 - before projectRequest()');

function projectRequest ( url, authHeader, callback ) { // 1
  var data = "didn't change";

  console.log('20 - entered projectRequest()');

  request.get({                                  // 4
    url: url,                                    // 5
    headers: {'Authorization': authHeader}       // 6
  }, function(error, response, body) {           // 7
   
   console.log('22 - entered request.get s callback');

   console.log('response >>> '+ response);
   console.log('response.statusCode >>> '+ response.statusCode);

   console.log('24 - before calling callback');
   
   callback( response.statusCode );              // 8

   console.log('26 - before exiting request.get()');

 }); // request.get(); 

  console.log('40 - exited request.get, back in projectRequest()');

  //console.log('url >>> '+ url);
  //console.log('authHeader >>> '+ authHeader);
  //console.log('callback >>> '+ callback);
  console.log('50 data >>> '+ data);
  console.log('response.statusCode >>> '+ response.statusCode);
  console.log('exiting projectRequest()');

} // projectRequest()

console.log('60 - between projectRequest() and describe()');
///////////////////////////////////////////////////////////////////////

describe('projectRequest()', function(){

  console.log('100 - entered describe()');
  
  it('should return 200 if passed url and authHeader ', function(){

    console.log('110 - entered it()s callback');

    projectRequest(url, authHeader, function ( data ) {  // 3

      console.log('120 - entered callback()');
      console.log('data >>> '+ data);

      assert.equal(data, 200, '[' + data + '] is not 200' );
    }); // projectRequest()
    
    console.log('130 - just exited it()');
    console.log('data is >>> ' + data);

  }); // it()
  console.log('140 - just exited it()');
}); // describe()
console.log('150 - after describe()'); 
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