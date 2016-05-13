
/**
 * 似乎在生产环境中，应该使用 http.createServer(app).listen(port) 的方式来启动服务，
 * 而不是 app.listen(port)
 */

function startServer() {
	http.createServer(app).listen(app.get('port'), function(){
		console.log( 'Express started in ' + app.get('env') +
		' mode on http://localhost:' + app.get('port') +
		'; press Ctrl-C to terminate.' );
	});
}

if(require.main === module){
	// 应用程序直接运行；启动应用服务器
	// 例如：node server.js
	startServer();
} else {
	// 应用程序作为一个模块通过"require" 引入: 导出函数
	// 例如：require('./server')
	module.exports = startServer;
}
