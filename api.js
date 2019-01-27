// Server side script

var app = require('express')();

var http = require('http').Server(app);

var path = require('path');

var io = require('socket.io')(http);

const min = 0;
const max = 20;
const min_freq = 50;

const port = 3000;

app.get('/', function(req, res) 
{
  res.sendFile(path.resolve('index.html'));
});

io.on('connection', function(socket)
{
	console.log('New WS connection successfully established !!!')
});

setInterval(function() 
{
  var voltage = Math.floor(Math.random() * (max - min) * 100);
  var current = Math.floor(Math.random() * (max - min) * 100);
  var frequency = min_freq - Math.random();

  io.emit('Voltage value latest : ', voltage);
  io.emit('Current value latest : ', current);
  io.emit('Frequency value latest : ', frequency);
}, 200);

http.listen(port, function() 
{
  console.log('Server listening on : ' + port);
});
