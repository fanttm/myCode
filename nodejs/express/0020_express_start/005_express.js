var fortunes = [
"Conquer your fears or they will conquer you.",
"Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.",
"Whenever possible, keep it simple.",
];

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

/*
	模板代码：
	<p>Your fortune for the day:</p>
	<blockquote>{{fortune}}</blockquote>
	注意：
	1、这里的 {{fortune}} 和 layouts/main.handlebars文件中的 {{{body}}} 相比少了一层 {}
 */
app.get('/about', function(req, res){
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune });
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