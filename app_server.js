var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


app.use(express.static('src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/index.html');
});

var voteTally = [0,0];


io.on('connection', function(socket) {
	socket.on('chat message', function(message){
		io.emit('chat message', message);
	}); 
	socket.on('like update', function(messages){
		io.emit('like update', messages);
	});
	socket.on('top comment', function(message){
		io.emit('top comment', message);
	});    
	socket.on('vote0', function(message){
		if (message === true)
			voteTally[0] += 1;
		else
			voteTally[0] -=1;
		io.emit('votepro', voteTally[0]);
	});   
	socket.on('vote1', function(message){
		if (message === true)
			voteTally[1] += 1;
		else
			voteTally[1] -=1;
		io.emit('votecon', voteTally[1]);
	});   
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});