var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, 'public/views')));
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));

app.get('/', function(req, res) {
	res.sendFile('index.html');
})

var server = app.listen(3000, function() {
	console.log('Listening on http://localhost:%s', server.address().port);
})