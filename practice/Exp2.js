const http = require('http')

const express = require('express');
const { log } = require('console');

const app = express();

app.use((req, res, next)=>
{
    console.log("In the Middleware 1");
    next();
})
app.use((req, res, next)=>
{
    console.log("In the Middleware 2");
})

const server = http.createServer(app);


server.listen(4500);