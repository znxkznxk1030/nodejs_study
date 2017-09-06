var fs = require('fs');
var http = require('http');

http.createServer(function (request, response){
        fs.readFile('gochi.jpg', function(error, data){
                response.writeHead(200, { 'Content-Type' : 'image/jpeg' });
                response.end(data);
        });
}).listen(52273, function(){

});


http.createServer(function (request, response){

}).listen(52274, function(){

});
