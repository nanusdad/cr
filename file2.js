var file2 = {};
var ocr = require('./ocr.js');

file2.ocrize = function(url) {
	ocr.run(url, function(text){
		return text;
	});
};

module.exports = file2;