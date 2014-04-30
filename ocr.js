var ocr = {};

ocr.run = function(imgurl, lang, psm, callback) {
	var ncr = require('nodecr'),
		request = require('request'),
		fs = require('fs'),
		test_img = imgurl,
		lang = lang,
		psm = psm;
	console.log(lang + ' :: ' + psm);
	if (!lang) { lang = 'eng'; }
	if (!psm)  { psm = 6 };
	console.log(imgurl + ' :: ' + lang + ' :: ' + psm);

	var imgName = test_img.split('/').pop()

		function ncrHandler(lang, psm) {

			ncr.process(__dirname + '/' + imgName, function(err, text) {

				if (err) {
					return console.error(err);
				}

				if (typeof callback === "function") {
					callback(text);
				}

			}, 'eng', 6)
			// }, lang, psm)

		}
	request(test_img, ncrHandler(lang, psm)).pipe(fs.createWriteStream(imgName))
}

module.exports = ocr;