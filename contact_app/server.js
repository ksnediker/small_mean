var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/contactlist')

app.listen(3000);
console.log("server running");