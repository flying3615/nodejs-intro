var request = require('request')
var fs = require('fs')
var zlib = require('zlib')

//write page to a file
// request('http://www.pluralsight.com').pipe(fs.createWriteStream('pluralsight.html'))


//compress the page
request('http://www.pluralsight.com').pipe(zlib.createGzip()).pipe(fs.createWriteStream('pluralsight.html.gz'))