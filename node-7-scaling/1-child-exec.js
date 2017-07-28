var exec = require('child_process').exec


//pass in unix command
var child = exec('uptime | cut -f 1',function(err,stdout,stderr){
    if(err){
        console.log('Error: '+stderr)
    }else{
        console.log('Output is: '+stdout)
    }
})

console.log("PID is "+child.pid)