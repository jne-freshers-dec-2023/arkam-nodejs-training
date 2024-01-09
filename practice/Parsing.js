const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>
{
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.write('<html>')
        res.write('<head><title>Node JS</title></head>')
        res.write(
            '<body> <form action="/massage" method="POST"><input type = "text" name = "myMassage"><button type = "submit">Submit</button></form></bosy>'
        );
        res.write('</html>');
        return res.end();
    }

    if(url === '/massage' && method === 'POST')
    {
        const body = [];

        req.on('data',(piece)=>
        {
            body.push(piece);
        })

        req.on('end',()=>
        {
            const myData = Buffer.concat(body).toString();
            console.log(myData)
            fs.writeFileSync('demo.txt',myData)

        })
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>');
    res.write('<header><title>Node JS Response</title><header>');
    res.write('<body>Hello From Arkam</body>');
    res.write('</html>')
    res.end();
});

server.listen(5000)