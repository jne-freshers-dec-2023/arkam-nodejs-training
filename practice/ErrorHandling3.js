const { error } = require('console');
const http = require('http')

const server = http.createServer((req,res)=>
{
    res.writeHead(200,{'Content-Type': 'text/plain'})
    throw error("server error 2");

    res.end('Hello World\n');
})

server.on('error',(err)=>
{
    // console.error('Server Error',err)
})

server.listen(8600)