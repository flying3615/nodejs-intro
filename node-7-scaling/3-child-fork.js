var fork = require('child_process').fork

//run based on spawn, and worked as a node thread
var child = fork(__dirname+'/honorstudent.js')


//like akka actor model
child.on('message',(m)=>{
    console.log('The answer is ',m.answer)
    child.send({cmd:'done'})
})

child.send({cmd:'double',number:20})