var file2 = {};
var ocr = require('./ocr.js');

var func_names = Object.getOwnPropertyNames(ocr).filter(function(property) {
	return typeof ocr[property] === 'function';
});

func_names.forEach(function(el) {
	file2[el] = function(url, lang, psm, callback) {
		console.log(url + ':' + lang + ':', psm);
		ocr[el](url, lang, psm, function(text, err) {
			if (typeof callback === "function") {
				callback(text, err);
			}
		});
	};
});

module.exports = file2;