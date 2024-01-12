const http = require('http');

const express = require('express');
const { log } = require('console');

const app = express();

const postMiddleware = (req,res,next)=>
{
    if(req.method === 'POST')
    {
        console.log("Inside Post Middleware")
        next();
    }
    else
    {
        res.status(405).send('Not a valid request')
    }
}

app.post('/route',postMiddleware,(req,res)=>
{
    res.send('This is POST request')
})

app.get('/route',(req,res)=>
{
    res.send(
        `<form method="POST">
        <div><input name = 'username'/></div>
        <div><button>send</button></div>
        </form>`
    )
})

const server = http.createServer(app)

server.listen(7777);