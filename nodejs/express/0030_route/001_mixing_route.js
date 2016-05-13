var app = require('express')();

app.use(function(req, res, next){ 
	console.log('\n\nALLWAYS\n');
	next(); 
});

app.get('/a', function(req, res){ 
	console.log('/a: route terminated\n'); 
	res.send('a\n'); 
});
app.get('/a', function(req, res){ 
	console.log('/a: never called\n'); 
});
app.get('/b', function(req, res, next){ 
	console.log('/b: route not terminated\n');
	next();
});
app.use(function(req, res, next){
	console.log('SOMETIMES\n');
	next();
});
app.get('/b', function(req, res, next){
	console.log('/b (part 2): error thrown\n' );
	throw new Error('b failed');
});
app.use('/b', function(err, req, res, next){
	console.log('/b error detected and passed on\n');
	next(err);
});
app.get('/c', function(err, req){
	console.log('/c: error thrown\n');
	throw new Error('c failed');
});
app.use('/c', function(err, req, res, next){
	console.log('/c: error deteccted but not passed on\n');
	next();
});

app.use(function(err, req, res, next){
	console.log('unhandled error detected: ' + err.message + '\n');
	res.send('500 - server error\n');
});

app.use(function(req, res){
	console.log('route not handled\n');
	res.send('404 - not found\n');
});

app.listen(3000, function(){ 
	console.log('listening on 3000\n');
});