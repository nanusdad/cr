var ocr = {};

ocr.run = function(imgurl, callback) {
var ncr = require('nodecr'),
	request = require('request'),
	fs = require('fs'),
	test_img = imgurl;

var imgName = test_img.split('/').pop()

	function ncrHandler() {

		ncr.process(__dirname + '/' + imgName, function(err, text) {

			if (err) return console.error(err)

			//console.log("Here is the text: \n")
			//console.log(text);
			if (typeof callback === "function") {
				callback(text);
			}

		}, 'eng', 6)

	}
request(test_img, ncrHandler).pipe(fs.createWriteStream(imgName))
}

module.exports = ocr;
