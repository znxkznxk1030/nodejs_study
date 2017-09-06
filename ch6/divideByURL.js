var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (request, response){
        var pathname = url.parse(request.url).pathname.toLowerCase();

        if(pathname == '/'){
                fs.readFile('index.html', function(error, data){
                        response.writeHead(200, { 'Content-Type' : 'text/html'});
                        response.end(data);
                });
        } else if (pathname == '/other'){
               fs.readFile('other.html', function(error, data){
                        response.writeHead(200, { 'Content-Type' : 'text/html'});
                        response.end(data);
               }); 
        }
}).listen(52273, function(){

});
