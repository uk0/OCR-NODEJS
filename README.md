n-ocr
============

[![Build Status](https://travis-ci.org/zmatsh/OCR-NODEJS.svg?branch=master)](https://travis-ci.org/zmatsh/OCR-NODEJS)

n-ocr is an OCR library pure JavaScript for node.js.
We use [ocrad.js](https://github.com/antimatter15/ocrad.js/).

Install
---------

```bash
$ npm install n-ocr -S
```

How to use
---------

![image](test/fixture/hello_world.png)

Simple :

```javascript
var okrabyte = require("n-ocr");
okrabyte.decodeFile("test/fixture/hello_world.png", function(error, data){
  console.log(data); // Hello World!
});
```

From Buffer:

```javascript
var okrabyte = require("n-ocr");
var fs = require("fs");
var buffer = fs.readFileSync("test/fixture/hello_world.png");
okrabyte.decodeBuffer(buffer, function(error, data){
  console.log(data); // Hello World!
});
```

From Stream:

```javascript
var okrabyte = require("n-ocr");
var fs = require("fs");
var stream = fs.createReadStream("test/fixture/hello_world.png");
okrabyte.decodeStream(stream, function(error, data){
  console.log(data); // Hello World!
});
```

Todo
----------

- JPG support
- gif support
- stream interface (i love pipe)
