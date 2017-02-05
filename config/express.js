var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();

app.set('json spaces', 4);


app.use(express.static('./public'));
app.use(bodyParser.json());

consign({cwd: 'app', verbose: false})
	.include('models')
	.then('api')
	.then('routes')
	.into(app);

module.exports = app;
