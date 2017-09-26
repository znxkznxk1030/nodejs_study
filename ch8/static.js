var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function (request, response){
        response.writeHead(200, { 'Content-Type' : 'text/html'});
        response.end('<img src="/sulri.jpeg" widtd="100%" />');
});

app.listen(52273, function(){
        console.log('Server Running');
});
