const crypto = require('crypto');

// Hash
var shasum = crypto.createHash('sha256');

shasum.update('youngsoo');
var output = shasum.digest('hex');

console.log(output);

// Cipher
var key = 'younsoo'
var input = 'kim2'

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log(input + ' ' + cipheredOutput + ' ' + decipheredOutput);
