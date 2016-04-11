
var express = require('express');

var app = express();

// 设置handlebars 视图引擎
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('host', process.env.HOST || '0.0.0.0')
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home');
});

var fortune = require('./lib/fortune.js');

app.get('/about', function(req, res){
	res.render('about', { fortune: fortune.getFortune() });
});

// 定制404 页面
app.use(function(req, res){
	res.status(404);
	res.render('404');
});

// 定制500 页面
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://' + app.get('host') + ':' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});