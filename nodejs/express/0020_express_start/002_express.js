/*
	注意，我们对定制的404 和500 页面的处理与对普通页面的处理应有所区别：用的不是app.get，而是app.use。
	重点！
	1、app.use 是Express 添加中间件的一种方法。
	2、在Express 中，路由和中间件的添加顺序至关重要。
	如果我们把404 处理器放在所有路由上面，那首页和关于页面就不能用了，访问这些URL 得到的都是404。
*/

var express = require('express');

var app = express();

app.set('host', process.env.HOST || '0.0.0.0')
app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Meadowlark Travel\n');
});

app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About Meadowlark Travel\n');
});

// 定制404 页面
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found\n');
});

// 定制500 页面
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error\n');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://' + app.get('host') + ':' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});