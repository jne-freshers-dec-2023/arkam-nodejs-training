const http = require("http");

const server = http.createServer((req,res)=>
{
    console.log(req.method,req.headers,req.url);
})

server.listen(8000,()=>
{
    console.log("listning at port no 8000");
}) 