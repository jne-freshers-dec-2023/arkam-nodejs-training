const http = require('http')
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('../Routes/admin')
const shopRoutes = require('../Routes/shop')

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res)=>
{
    res.sendFile(path.join(__dirname,"../","views","notFound.html"))
})
const server = http.createServer(app);

server.listen(2500,()=>
{
    console.log("Listning to 2500")
})