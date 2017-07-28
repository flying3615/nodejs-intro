var fs = require('fs')

if(fs.existsSync('temp')){
    console.log('Directory exists removing...')
    if(fs.existsSync('temp/new.txt')){
        fs.unlinkSync('temp/new.txt')
    }
    fs.rmdirSync('temp')
}

fs.mkdir('temp',()=>{
    fs.exists('temp',(exists)=>{
        if(exists){
            process.chdir('temp')
            fs.writeFile('test.txt','This is some test text for the file',()=>{
                fs.rename('test.txt','new.txt',(err)=>{
                    fs.stat('new.txt',(err,stats)=>{
                        console.log('file has size '+stats.size+' byts')
                        fs.readFile('new.txt',(err,data)=>{
                            console.log('file contents '+data.toString())
                        })
                    })
                })
            })
        }
    })
})