const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
    socket.on('disconnect', () => console.log('User has left!'));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));