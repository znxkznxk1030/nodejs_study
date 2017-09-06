const url = require('url');
const querystring = require('querystring');

var parseObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160', true, true);

console.log(parseObject);
console.log(parseObject['host']);
console.log(parseObject.query);
console.log(querystring.parse(parseObject.query));
