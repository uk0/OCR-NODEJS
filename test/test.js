var assert = require("assert");
var nocr = require("../");
var fs = require('fs');

describe("nocr", function(){
  it("decodeFile test.png", function(done){
      nocr.decodeFile("test/fixture/hello_world.png", function(error, data){
      assert.equal(data, "Hello World!\n");
      done();
    });
  });
  it("decodeBuffer test.png", function(done){
    var buffer = fs.readFileSync("test/fixture/hello_world.png");
      nocr.decodeBuffer(buffer, function(error, data){
      assert.equal(data, "Hello World!\n");
      done();
    });
  });
  it("decodeStream test.png", function(done){
    var stream = fs.createReadStream("test/fixture/hello_world.png");
      nocr.decodeStream(stream, function(error, data){
      assert.equal(data, "Hello World!\n");
      done();
    });
  });
});
