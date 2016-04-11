/*
	以下代码并没有返回HTML，而只是向你的浏览器传递了一条普通的文本消息“Hello world!”。
	如果你想要尝试发送HTML，可以试验一下：只要把text/plain 换成text/html，再把'Hello world!' 
	换成一个包含有效HTML 的字符串就行了。
 */

var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello world!\n');
}).listen(3000);

console.log('Server started on localhost:3000; press Ctrl-C to terminate....');