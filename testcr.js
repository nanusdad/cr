var ncr = require('nodecr'),
	request = require('request'),
	fs = require('fs'),
	test_img = 'https://www.filepicker.io/api/file/gXtKMIfLQRefznBZPQMA';

var imgName = test_img.split('/').pop()

	function ncrHandler() {

		ncr.process(__dirname + '/' + imgName, function(err, text) {

			if (err) return console.error(err)

			console.log("Here is the text: \n")
			console.log(text)

		}, 'eng', 6)

	}
request(test_img, ncrHandler).pipe(fs.createWriteStream(imgName))