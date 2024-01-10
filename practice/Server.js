const http = require("http");

const server = http.createServer((req,res)=>
{
    console.log("Running Server");
    res.end("Hello there");
})

server.listen(8000,()=>
{
    console.log("listning at port no 8000");
})