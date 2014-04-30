var express = require("express");
var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname);
app.use(express.static(__dirname + '/assets'));

var jsonBody = require("body/json");
var ocr = require('./ocr.js');
var file2 = require('./file2.js');

// Index page
app.get('/', function(req, res) {
	res.render('index');
});

// file2 paths
app.post('/file2', function(req, res) {
	console.log(req.params.transform);

	function send(err, body) {
		file2[body.transform](body.url, body.lang, body.psm, function(text) {
			res.send({
				"text": text
			});
		});
	}
	jsonBody(req, res, send);
});

// OCRize path
app.post('/ocrize', function(req, res) {
	function send(err, body) {
		ocr.run(body.url, body.lang, body.psm, function(text) {
			res.send({
				"text": text
			});
		})
	}
	jsonBody(req, res, send);
});

// client.js
app.get('/client.js', function(req, res) {
	res.sendfile(__dirname + '/client.js');
});

// bootstrap.css
app.get('/bootstrap.css', function(req, res) {
	res.sendfile(__dirname + '/assets/css/bootstrap.css');
});

// loader.gif
app.get('/loader.gif', function(req, res) {
	res.sendfile(__dirname + '/assets/imgs/spinnerLarge.gif');
});

app.listen(3100);
console.log('app listening on port 3100');