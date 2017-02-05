var express = require('express');
var consign = require('consign');
var app = express();

app.set('json spaces', 4);

app.use(express.static('./public'));

consign({cwd: 'app', verbose: false})
	.include('api')
	.then('routes')
	.into(app);

module.exports = app;
