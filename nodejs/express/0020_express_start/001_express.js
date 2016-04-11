var express = require('express');

var app = express();

app.set('host', process.env.HOST || '0.0.0.0')
app.set('port', process.env.PORT || 3000);

// 定制404 页面
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
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