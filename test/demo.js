var nocr = require("../");
var fs = require("fs");
var buffer = fs.readFileSync("test/fixture/hello_world.png");
nocr.decodeBuffer(buffer, function(error, data){
    console.log(data); // .....
});