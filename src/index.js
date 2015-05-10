var express = require('express');
var app = express();
var path    = require("path");

app.use(express.static(path.join(__dirname, 'images')));

// Constants
var PORT = 8080;

// App

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname+'/home.htm'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);