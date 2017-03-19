var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);


app.use(express.static('src'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/src/index.html');
});




io.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socket.emit('welcome', { message: 'Welcome!', id: socket.id });

    socket.on('i am client', console.log);
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});