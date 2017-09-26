var express = require('express');
var app = express();

var session = require('express-session');
var cookie = require('cookie-parser');

app.use(session({
        secret: 'secrey key',
        resave: false,
        saveUninitialized: true,
}));
app.use(cookie());

app.use(function (request, response){
      request.session.fuck = (new Date()).toUTCString();

      response.send(request.cookies);
});

app.listen(52273, function(){
        console.log('Server Running');
});
