ng-ocr
============

[![Build Status](https://travis-ci.org/zmatsh/OCR-NODEJS.svg?branch=master)](https://travis-ci.org/zmatsh/OCR-NODEJS)

Ngocr is an OCR library pure JavaScript for node.js.
We use [ocrad.js](https://github.com/antimatter15/ocrad.js/).

Install
---------

```bash
$ npm install ng-ocr -S
```

How to use
---------

![image](test/fixture/hello_world.png)

Simple :

```javascript
var Ngocr = require("Ngocr");
Ngocr.decodeFile("test/fixture/hello_world.png", function(error, data){
  console.log(data); // Hello World!
});
```

From Buffer:

```javascript
var Ngocr = require("Ngocr");
var fs = require("fs");
var buffer = fs.readFileSync("test/fixture/hello_world.png");
Ngocr.decodeBuffer(buffer, function(error, data){
  console.log(data); // Hello World!
});
```

From Stream:

```javascript
var Ngocr = require("Ngocr");
var fs = require("fs");
var stream = fs.createReadStream("test/fixture/hello_world.png");
Ngocr.decodeStream(stream, function(error, data){
  console.log(data); // Hello World!
});
```

Todo
----------

- JPG support
- gif support
- stream interface (i love pipe)
