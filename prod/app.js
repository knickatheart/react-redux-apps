var express = require('express');
var app = express();

app.listen('8080', function() {
	console.info('[PORT] 8080');
});

app.use('', express.static(__dirname));

app.use('/*', function(req, res) {
	res.sendFile(__dirname + '/html/');
});

module.exports = app;