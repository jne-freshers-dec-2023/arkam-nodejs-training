const http = require('http');

const server = http.createServer((req,res)=>
{
    const url = req.url;

    if(url === '/')
    {
        res.write('<html>')
        res.write('<head><title>Node JS</title></head>')
        res.write(
            '<body> <form action="/massage" methos="POST"><input type = "text" name = "myMassage"><button type = "submit">Submit</button></form></bosy>'
        );
        res.write('</html>')
        return res.end();
    }
    console.log(req.method,req.headers,req.url);
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<header><title>Node JS Response</title><header>');
    res.write('<body>Hello From Arkam</body>');
    res.write('</html>')
    res.end();
});

server.listen(3600)