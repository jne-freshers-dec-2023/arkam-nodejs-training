const http = require("http");

const server = http.createServer((req,res)=>
{
    console.log(req.method,req.headers,req.url);
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<header><title>Node JS Response</title><header>');
    res.write('<body>Hello From Arkam</body>');
    res.write('</html>')
    res.end();
})

server.listen(8000,()=>
{
    console.log("listning at port no 8000");
})