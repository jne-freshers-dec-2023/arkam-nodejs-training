const express = require('express')
const routeAuthenticate = require('../Routes/authenticate')
const mongoose = require('mongoose')

const app = express()

app.use(routeAuthenticate)
mongoose.connect("mongodb://localhost/testdb")
.then
{
    app.listen(3000,()=>
    {
        console.log('Listning 3000');
    })
}
