var fs = require('fs')

var http = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    if(req.url==='file.txt'){
        fs.createReadStream(__dirname+'/file.txt').pipe(res)
    }else{
        res.end('hello world')
    }
}).listen(process.env.PORT,process.env.IP)
console.log('Server running!')