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
var votePercentage = [0,0];
var calculatePercentage = function(a,b){
	console.log(voteTally);
	console.log(votePercentage);
	votePercentage[a] = voteTally[a]/(voteTally[a]+voteTally[b])*100;
	votePercentage[b] = 100-votePercentage[a];
	return votePercentage
}


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
	socket.on('vote', function(message){
		if (message.selections[0] === true){
			voteTally[0] += 1;
			if (message.first === false)
				voteTally[1] -=1;
		}
		else{
			voteTally[1] += 1;
			if (message.first === false)
				voteTally[0] -=1;
		}
		io.emit('voted', calculatePercentage(0,1));
	}); 
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});