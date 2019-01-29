const express = require('express');
const http = require('http');
const path = require('path');
const socket = require('socket.io');

const app = express();

app.set('port', 3000 || process.env);
app.use(express.static(path.join(__dirname, 'public')));

const server = http.createServer(app);

server.listen(3000, () => {
    console.log(`Server is ready! on port: ${app.get('port')}`);
});

// io is the connection of server with socket.io
const io = socket.listen(server);
require('./sockets')(io);

