const http = require('http')

const express = require('express');


const app = express();

app.use('/company',(req, res, next)=> // only for HTTP GET method
{
    res.send('<h1>Thinkitive</h1>')
    
})
app.use('/name',(req, res, next)=>
{
    res.send('<h1>Arkam</h1>')
    
})
app.use('/',(req, res, next)=> // for all HTTP method
{
   
    res.send('<h1>From Middleware 1</h1>')
})
const server = http.createServer(app);


server.listen(4500);