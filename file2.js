var file2 = {};
var ocr = require('./ocr.js');

file2.ocrize(url, function(res) {
	ocr.run(url, function(text){
		return text;
	})
});

module.exports = file2;