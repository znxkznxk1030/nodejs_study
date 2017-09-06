var http = require('http');
var fs = require('fs');

http.createServer(function (request, response){
    if (request.method  == 'GET'){
        fs.readFile('HTMLPage2.html', function (error, data){
                response.writeHead(200, { 'Content-Type' : 'text/html' });
                response.end(data);
        });
    }else if (request.method == 'POST'){
        request.on('data', function (data) {
                response.writeHead(200, { 'Content-Type' : 'text/html' });
                response.end('<h1>' + data + '</h1>');
        });
    }else {
        console.log(request);
        console.log('Something wrong');
    }
}).listen(52273, function(){
    console.log('Server Running');
});
