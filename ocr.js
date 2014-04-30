var ocr = {};

ocr.run = function(imgurl, callback) {
	var ncr = require('nodecr'),
		request = require('request'),
		fs = require('fs'),
		test_img = imgurl;

	var imgName = test_img.split('/').pop()

		function ncrHandler(lang, psm) {

			ncr.process(__dirname + '/' + imgName, function(err, text) {

				if (err) {
					return console.error(err);
				}

				if (typeof callback === "function") {
					callback(text);
				}

			// }, 'eng', 6)
			}, lang, psm)

		}
	request(test_img, ncrHandler(lang, psm)).pipe(fs.createWriteStream(imgName))
}

module.exports = ocr;