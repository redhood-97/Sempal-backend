// Server side script

var app = require('express')();

var http = require('http').Server(app);

var io = require('socket.io')(http);

const min = 0;
const max = 20;

const port = 3000;

app.get('/', function(req, res) 
{
  res.sendFile('index.html');
});

io.on('connection', function(socket)
{
	console.log('New WS connection successfully established !!!')
});

setInterval(function() 
{
  var voltage = Math.floor(Math.random() * (max - min) * 100);

  io.emit('Voltage value latest : ', voltage);
}, 200);

http.listen(port, function() 
{
  console.log('Server listening on : ' + port);
});
