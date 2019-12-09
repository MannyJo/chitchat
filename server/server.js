const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();

const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));