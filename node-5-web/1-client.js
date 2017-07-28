var http = require('http')

var options = {
    host:'www.google.co.nz',
    port:80,
    path:'/'
}

console.log('Going to make request...')

http.get(options,(response)=>{
    console.log(response.statusCode)
    response.pipe(process.stdout)
})
