var express = require("express");
var app = express();

app.post('/ocrize', function(req, res) {
  var filterstat = req.body.url;
  console.log(filterstat);
});
app.listen(3100);
console.log('app listening on port 3100');
