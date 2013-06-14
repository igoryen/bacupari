var assert = require("assert");  // 11
var request = require('request');
/////////////////////////////////////////////////////////////////////

var foxtrot = function(f){
  return ("The earth is " + f);
}



var echo = function(e){
  return (e + "is Lord");
}



var fruit = ['apples', 'peaches', 'pears', 'plums'];




// Returns x + 2 and x + 4 as "x" and "y", returns result
var alpha = function( par ) { // alpha shall be a function
  return {                // which will return ...
    x: (par + 2),   // a json object, the parent of all arrays
    y: (par + 4)
  };
}

// Returns x + 4 and x + 6 as "x" and "y", returns result
var bravo = function( par ) {
  return {
    x: (par + 4),
    y: (par + 6) 
  };
}


// Returns "Jenica is my wife"
var charlie = function( name ) {
  return {
    a: name + " is my wife",
    b: name + " is a man"
  };
}




// Returns Ottawa is the capital of Canada, if passed 'Ottawa'
var delta = function( city ) {
  return {
    a: city + " is in Canada",
    b: city + " is the capital of Canada"
  };
}









/*

function projectRequest (url, authHeader, callback) {
  //console.log('url is '+url, '\nauthHeader is ' + authHeader, '\ncallback is ' + callback);
  request.get({ url: url, headers: {'Authorization': authHeader}}, function(error, response, body) { // 16 , 19
    if (error) {
      callback(error);
    }
    if (response.statusCode !== 200) {
      callback(Error(url + " returned " + response.statusCode));
    }
    callback(null, body);      //return response.statusCode;
     return response.statusCode;

  }); // end of request
       //console.log('response >>> '+ response);


}; // end of projectRequest

*/

function projectRequest ( url, authHeader, callback ) {
  var data = "didn't change";

  request.get({
    url: url, 
    headers: {'Authorization': authHeader} 
  }, function(error, response, body) { 
         console.log('response.statusCode >>> '+ response.statusCode);
    callback( response.statusCode );
             console.log('response.statusCode >>> '+ response.statusCode);

  });
}


///////////////////////////////////////////////////////////////////////



describe('projectRequest()', function(){
  it('should return 200 if passed url and authHeader ', function(){
    var url = 'https://www.transifex.com/api/2/project/amore/?details';
    var authHeader = 'Basic aWdvcnllbjpsMGNhbGl6ZXI=';
    projectRequest(url, authHeader, function ( data ) {
           console.log('data >>> ' + data);
      assert.equal(data, 300, '[' + data + '] is not 200' );
    });
  });
});

/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////


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








describe("bravo()", function() {
  it('should return {x: 4, y: 6}, if passed 0,', function() {
    var retval = bravo(0);

    assert.equal( retval.x, 4, '['+retval.x + "] is not what I want (4)" );
    assert.equal( retval.y, 6 );
  });
});
/////////////////////////////////////////////////////////////////////





describe("charlie()", function() {
  it('should return "Jenica is my wife" if passed "Jenica"', function() {
    var retval = charlie('Jenica');

    assert.equal( retval.a, 'Jenica is my wife' );
    //assert.equal( retval.b, 'Vasya is a man');
    
  });
});
/////////////////////////////////////////////////////////////////////





describe("delta()", function() {
  it('should return "Ottawa is the capital of Canada" if passed "Ottawa"', function() {
    var retval = delta('Ottawa');

    assert.equal( retval.a, "Ottawa is in Canada" );
    assert.equal( retval.b, "Ottawa is the capital of Canada");
    
  });
});
/////////////////////////////////////////////////////////////////////






describe("echo()", function(){
  it ('should return Jesus is Lord, if passed "Jesus"', function() {
    var retval = echo("Jesus ");

    assert.equal(retval, "Jesus is Lord");  
  });
  
});
/////////////////////////////////////////////////////////////////////




describe("foxtrot()", function(){
  it("should return 'The earth is round', if passed 'round'", function(){
    var retval = foxtrot("round");

    assert.equal(retval, "The earth is round");
  });

});
/////////////////////////////////////////////////////////////////////






 describe('Array fruit', function(){   // 12
   describe('#indexOf()', function(){   // 

     it('should return -1 when the value is not present in the array', function(){ // the value which you look for

       assert.equal(-1, fruit.indexOf('mangos'), 'got mangos among ['+fruit + ']');  // 'aaa' to show up in case of error
     });

     it('should return -1 when the value is not present in the array', function(){
       assert.equal(-1, fruit.indexOf('avocados'), 'got avocados among ['+fruit + ']');  // 
       assert.equal(-1, fruit.indexOf('a'), 'got a among ['+fruit + ']');  // 'aaa' to show up in case of error

     });
   });
 });
/////////////////////////////////////////////////////////////////////
/*
/*
  11) 'assert' is Node's regular module
  12)  to check an array??
*/

//========= same as the above =============
/*
describe('A', function(){   // 'Array'
  describe('B', function(){   // #indexof()
    describe('C', function(){
      describe('D', function(){

        it('should return -1 when the value is not present', function(){
          [1,2,3].indexOf(5).should.equal(-1);
          [1,2,3].indexOf(0).should.equal(-1);
        })
      })
    })
  })
})
*/
//=======================
/*
describe( 'basicauth', function() {      // 1

  var api = 'http://wrong:combo@' 
             + hostAuth.split("@")[1] 
             + "/isAdmin?id=";

  before( function( done ) { // 2
    startServer( done );     // 4
  });

  after( function() {   // 3
    stopServer();        // 5
  });

  it( 'should error when auth is incorrect', function( done ) {
    var user = unique();

    apiHelper( 'post',  hostNoAuth + '/user', 200, user, done, function ( err, res, body, done ) { // 6
      apiHelper( 'get', api + user.email, 401, {}, done);
    });
  });
});

/*
  1) to check besic authentication 
  2) set up the environment for the test.
     before() does ...
  3) cllean up after the test
    after() does ...
  4) start the server
  5) stops the server
  6) Create a user, then attempt to check it

*/
//==================================
/*
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){
      var user = new User('Luna');
      user.save(function(err){
        if (err) throw err;
        done(); // 1) 
      });
    })
  })
})
/*
   1) Tell Mocha to wait for completion. It's a callback, that's its usual name. 
*/

//====================================
/*
describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(done){  // 1
      var user = new User('Luna');
      user.save(done);  
    })
  })
})

/*
   1) done() accepts an error
*/

//===================================

/*
describe('Connection', function(){
  /*var db = new Connection
    , tobi = new User('tobi')    // 1
    , loki = new User('loki')
    , jane = new User('jane');

  beforeEach(function(done){
    db.clear(function(err){
      if (err) return done(err);
      db.save([tobi, loki, jane], done);
    });
})*/
/*
  describe('#find()', function(){
    it('respond with matching records', function(done){
      db.find({ type: 'User' }, function(err, res){
        if (err) return done(err);
        res.should.have.length(3);
        done();
      })
    })
  })
})
/* 
   1) populate retvalbase with dummy content before the test is done
*/


//===================================================
/*
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present')
  })
})
*/
//=================================================
/*
var assert = require("assert")  // 11

assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  Error
);
*/
// ========================================

/*
var assert = require("assert")  // 11

assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  /value/
);
*/
//============================
/*
var assert = require("assert")  // 11


assert.throws(
  function() {
    throw new Error("Wrong value");
  },
  function(err) {
    if ( (err instanceof Error) && /value/.test(err) ) {
      return true;
    }
  },
  "unexpected error"
);

// ==========================
*/

//=========================
/*
var assert = require("assert");  // 11
var equal = require("equal");

test( "a test", function() {
equal( 1, "1", "String '1' and number 1 have the same value" );
});

/*

*/
//=========================



