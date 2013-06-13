/*
var assert = require("assert")  // 11
describe('Array', function(){   // 12
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})
//=================================
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
   1) populate database with dummy content before the test is done
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

var assert = require("assert")  // 11

test( "a test", function() {
equal( 1, "1", "String '1' and number 1 have the same value" );
});
//=========================