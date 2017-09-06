process.on('exit', function (code) {
    console.log('bye');
});

var onUncaughtException = function (error){
        console.log('error evoke');
        process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

var count = 0;
var test = function() {
        count = count + 1;
        if(count > 3) { return;}

        setTimeout(test, 2000);
        error.error.error();
};

setTimeout(test, 2000);
