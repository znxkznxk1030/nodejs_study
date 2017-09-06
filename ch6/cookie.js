require('http').createServer(function (request, response){
        if(request.headers.cookie){
                var cookie = request.headers.cookie.split(';').map(function (element){
                        var element = element.split('=');
                        return {
                            key: element[0],
                            value: element[1],
                        };
                });
                console.log(request.headers.cookie); 
                response.end('<h1>' + JSON.stringify(cookie) + '</h1>');
        }else {

            response.writeHead(200, {
                'Content-Type' : 'text/html',
                'Set-Cookie' : ['name = ysKim', 'region = suwon']
            });

            response.end('<h1>create cookie</h1>');

        }
}).listen(52273, function(){

});
