var express = require('express');  
var app = express();  
var path = require("path");
var server = require('http').createServer(app);  
var io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'static')));



var port = process.env.PORT || 8000;




io.on('connection', function(socket) {
        console.log('Connected!'+socket.id);

        socket.emit("connectclient",socket.id)
       
    });


server.listen(port); 