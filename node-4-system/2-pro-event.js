process.stdin.resume()

process.stdin.on('data',(chunk) => {
    process.stdout.write('Data!->'+chunk)
})

process.stdin.on('end',() => {
    process.stdout.write('End!')
})

process.stdin.on('SIGTERM',() => {
    process.stderr.write('Try to terminate?')
})

console.log("Node is running as process #"+process.pid)
