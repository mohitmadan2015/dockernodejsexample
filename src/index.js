var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, 'css')));

// Constants
var PORT = 8080;

// App

app.get('/', function(req, res) {
	res.sendfile(path.join(__dirname + '/home.htm'));
});

app.get('/blog', function(req, res) {
	res.redirect('http://www.mohitmadan.in:8888/')
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);