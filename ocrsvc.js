var express = require("express");
var app = express();
var jsonBody = require("body/json");

app.post('/ocrize', function(req, res) {
  function send(err, body) {
        res.send(body.url);
    }
  jsonBody(req, res, send);
});
app.listen(3100);
console.log('app listening on port 3100');