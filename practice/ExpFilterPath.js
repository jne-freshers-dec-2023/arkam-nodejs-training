const http = require('http')


const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./Routes/admin2')
const shopRoutes = require('./Routes/shop2')

app.use(adminRoutes);
app.use(shopRoutes);

app.use(bodyParser.urlencoded({extended: false}));






const server = http.createServer(app);

server.listen(2500,()=>
{
    console.log("Listning to 2500")
})