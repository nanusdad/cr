var file2 = {};
var ocr = require('./ocr.js');

file2.ocrize = function(url, callback) {
	ocr.run(url, function(text){
		if (typeof callback === "function") {
			callback(text);
		}
	});
};

module.exports = file2;