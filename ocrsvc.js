var express = require("express");
var app = express();
var jsonBody = require("body/json");
var ocr = require('./ocr.js');

app.post('/ocrize', function(req, res) {
  function send(err, body) {
  		ocr.run(body.url, function(text){
	        res.send(text);
  		})
    }
  jsonBody(req, res, send);
});
app.listen(3100);
console.log('app listening on port 3100');
