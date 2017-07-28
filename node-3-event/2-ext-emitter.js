var Resource = require('./resource')

var r = new Resource(7)

r.on('start',()=> console.log("I've started"))

r.on('data',(d)=>console.log("I've received data "+d))

r.on('end',(t)=> console.log("I'm done with "+t+" data events"))