var express = require("express");
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);

var jsonBody = require("body/json");
var ocr = require('./ocr.js');

// Index page
app.get('/', function(req, res) {
  res.render('index');
});

// OCRize path
app.post('/ocrize', function(req, res) {
	function send(err, body) {
		ocr.run(body.url, function(text) {
			res.send({"text": text});
		})
	}
	jsonBody(req, res, send);
});
app.listen(3100);
console.log('app listening on port 3100');