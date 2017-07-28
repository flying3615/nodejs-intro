var maxTime = 1000
var evenDoubler = function(v,callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1))
    if(v%2){
        setTimeout(()=>callback(new Error("Odd input")),waitTime)
    }else{
        setTimeout(()=>callback(null,v*2,waitTime),waitTime)
    }
}

module.exports.evenDoubler = evenDoubler
module.exports.foo = "bar"