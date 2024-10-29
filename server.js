const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/script.js', (req, res) => {
	res.sendFile(__dirname + '/script.js');
});

app.get('/style.css', (req, res) => {
	res.sendFile(__dirname + '/style.css');
});

io.on('connection', (socket) => {
	console.log('a user connected');

	// Step 1 TODO: Handle the client sending a chat message and log the message
	socket.on('chat message', (msg) => {
		socket.broadcast.emit('chat message', msg);
	})



	// Step 6 TODO: Handle Confetti event

	// Step 6 TODO: Handle Pumpkin event

	// Step 7 TODO: Handle Color Change event
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});