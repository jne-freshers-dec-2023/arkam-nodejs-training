const fs = require('fs')
const express = require('express')

const app = express()

app.get('/', (req,res)=>
{
    const stream = fs.createReadStream('note.txt')
    stream.on('data',(chunk)=>
    res.write(chunk))
    stream.on('end',()=> res.end)
})

app.listen(1234)