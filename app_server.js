var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);

app.set('port', (process.env.PORT || 5000));
app.use(express.static('src'));
app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/index.html');
});

var voteTally = [0,0];
var votePercentage = [0,0];
var calculatePercentage = function(a,b,id){
	votePercentage[a] = voteTally[a]/(voteTally[a]+voteTally[b])*100;
	votePercentage[b] = 100-votePercentage[a];
	console.log(votePercentage);
	return {percent: votePercentage, id: id}
};


io.on('connection', function(socket) {
	socket.on('start debate', function(){
		io.emit('start debate');
	}); 
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
		message.id = parseInt(message.id);
		if (message.selections[0] === true){
			voteTally[0] += 1;
			if (message.first[message.id] === false)
				voteTally[1] -=1;
		}
		else{
			voteTally[1] += 1;
			if (message.first[message.id] === false)
				voteTally[0] -=1;
		}
		io.emit('voted', calculatePercentage(0,1,message.id));
	}); 
});

server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});