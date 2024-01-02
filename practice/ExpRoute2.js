const http = require('http')


const express = require('express')

const app = express();

app.get('/',(req, res)=>
{
    console.log('inside get method')
})

app.post('/',(req, res)=>
{
    console.log('inside post method')
})

app.put('/',(req, res)=>
{
    console.log('inside put method')
})

app.delete('/',(req, res)=>
{
    console.log('inside delete method')
})

app.patch('/',(req, res)=>
{
    console.log('inside patch method')
})

app.options('/',(req, res)=>
{
    console.log('inside options method')
})

app.head('/',(req, res)=>
{
    console.log('inside options method')
})



const server = http.createServer(app);

server.listen(2400)