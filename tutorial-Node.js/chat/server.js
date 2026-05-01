const { Socket } = require('dgram');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = 3001;

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (Socket) => {
    console.log('ユーザーが接続しました');

    Socket.on('chat message', (meg) => {
        io.emit('chat message', meg);
    });

});

server.listen(PORT, () => {
    console.log('listening 0n 3001');
});
