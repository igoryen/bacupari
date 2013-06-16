var assert = require("assert");  // 11
var request = require('request');


var fruit = ['apples', 'peaches', 'pears', 'plums'];


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