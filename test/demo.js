var ngocr = require("../");
var fs = require("fs");
var buffer = fs.readFileSync("test/fixture/hello_world.png");
ngocr.decodeBuffer(buffer, function(error, data){
    console.log(data); // .....
});