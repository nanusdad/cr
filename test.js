var ocr = require('./ocr.js');

ocr.run('https://www.filepicker.io/api/file/gXtKMIfLQRefznBZPQMA', 'eng', 6, function(res)
{
	console.log("resss " + res);
});
