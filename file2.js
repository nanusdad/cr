var file2 = {};
var ocr = require('./ocr.js');

file2.ocrize = function(url, lang, psm, callback) {
	console.log(url +  ':' + lang + ':', psm);
	ocr.run(url, lang, psm, function(text){
		if (typeof callback === "function") {
			callback(text);
		}
	});
};

module.exports = file2;