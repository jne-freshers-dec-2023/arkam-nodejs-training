const http = require('http')

const express = require('express');
const { log } = require('console');

const app = express();

app.use((req, res, next)=> // for all HTTP method
{
    console.log("In the Middleware 1");
    next();
})
app.get((req, res, next)=> // only for HTTP GET method
{
    console.log("In the Middleware 2");
})
app.use((req, res, next)=>
{
    console.log("In the Middleware 3");
    next();
    res.send("From Middleware 3")
})
const server = http.createServer(app);


server.listen(4500);