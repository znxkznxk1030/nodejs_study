var EventEmitter = require('events');
exports.timer = new EventEmitter();

setInterval(function() {
    console.log('ee');
    exports.timer.emit('tick');
}, 1000);
