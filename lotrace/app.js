var fs = require('fs');
var http = require('http');
var express = require('express');

var client = require('mysql').createConnection({
        user: 'root',
        password: 'rla8292!@#',
        database: 'location'
});

client.query('USE Location');

var app = express();
var server = http.createServer(app);

app.get('/tracker', function(request, response){
        fs.readFile('Tracker.html', function (error, data){
                response.send(data.toString());
        });
});

app.get('/observer', function(request, response){
        fs.readFile('Observer.html', function (error, data){
                response.send(data.toString());
        });
});

app.get('/showdata', function (request, response){
        client.query('SELECT * FROM locations WHERE name=?', [request.query.name],
                function (error, data){
                        response.send(data);
                });
});

server.listen(52273, function (){

});

var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
        socket.on('join', function (data) {
                socket.join(data);
        });

        socket.on('location', function (data) {
            console.log(data);
                client.query('INSERT INTO locations(name, latitude, longitude, date) VALUES (?, ?, ?, NOW())', [data.name, data.latitude, data.longitude]);
                io.sockets.in(data.name).emit('receive', {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        date: Date.now()
                });
        });
});
