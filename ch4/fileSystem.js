const fs = require('fs');
try{
        var text = fs.readFileSync('textfile.txt', 'utf-8');
        console.log(text);
}catch(e){
        console.log(e);
}

fs.readFile('textfile.txt', 'utf-8', function (error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});

var writefile = 'writefile.txt';
var data = 'Hello World';


fs.writeFile(writefile, data, 'utf-8', function(error){
    if(errors){
        console.log(error);
    }else{
        console.log('ASYNC');
    }
});

try{
        fs.writeFileSync(writefile, data, 'utf-8');
        console.log('SYNC');
}catch(e){
        console.log(e);
}


