/*
	1、Express 靠中间件处理静态文件和视图
	2、static 中间件可以将一个或多个目录指派为包含静态资源的目录，其中的资源不经过任何特殊处理直接发送到客户端
	3、static 中间件加在所有路由之前 app.use(express.static(__dirname + '/public'))
	4、路径直接指向 /img/logo.png，注意：路径中没有 public，这个目录对客户端来说是隐形的）
 */
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

app.get('/about', function(req, res){
	res.render('about');
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