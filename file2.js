var file2 = {};
var ocr = require('./ocr.js');

Object.getOwnPropertyNames(ocr).forEach(function(el) {

	file2[el] = function(url, lang, psm, callback) {
		console.log(url +  ':' + lang + ':', psm);
		ocr[el](url, lang, psm, function(text, err){
			if (typeof callback === "function") {
				callback(text, err);
			}
		});
	};
});

// file2.ocrize = function(url, lang, psm, callback) {
// 	console.log(url +  ':' + lang + ':', psm);
// 	ocr.run(url, lang, psm, function(text, err){
// 		if (typeof callback === "function") {
// 			callback(text, err);
// 		}
// 	});
// };

// file2.ocr = file2.ocrize;

module.exports = file2;