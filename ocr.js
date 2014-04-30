var ocr = {};

ocr.run = function(imgurl, lang, psm, callback) {
	var ncr = require('nodecr'),
		request = require('request'),
		fs = require('fs'),
		test_img = imgurl,
		lang = lang,
		psm = psm;
	if (!lang) { lang = 'eng'; }
	if (!psm)  { psm = 6 };

	var imgName = test_img.split('/').pop();

		function ncrHandler() {
			ncr.process(__dirname + '/' + imgName, function(err, text) {
				
				if (typeof callback === "function") {
					callback(text, err);
				}

			}, lang, psm)

		}
	request(test_img, ncrHandler).pipe(fs.createWriteStream(imgName));
}

module.exports = ocr;
