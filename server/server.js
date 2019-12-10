const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { getUser, addUser } = require('./user');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if(error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `Welcome, ${user.name}!`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined this conversation`});

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        socket.emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => console.log('User has left!'));
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));