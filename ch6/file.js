var fs = require('fs');

require('http').createServer(function (request, response){
        fs.readFile('HTMLpage.html', function (error, data){
                response.writeHead(200, { 'Content-type':'text/html'});
                response.end(data);
        });
}).listen(52273, function(){
    console.log('Server Running at http://127.0.0.1:52273');
});
