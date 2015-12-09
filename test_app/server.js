// =============================
// Requirements
// =============================
var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	logger = require('morgan'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');


// =============================
// Middleware
// =============================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));


// =============================
// DB
// =============================
mongoose.connect('mongodb://localhost/contact_app');

// =============================
// Listen
// =============================
app.listen(port);

app.get('/', function(req, res) {
	console.log("Server works");
});