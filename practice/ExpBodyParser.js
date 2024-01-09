const http = require('http')


const express = require('express');
 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.get('/user/add',(req,res)=>
{
    res.send(
        `<form method="POST">
        <div><input name = 'username'/></div>
        <div><button>send</button></div>
        </form>`
    )
})

app.post('/user/add',(req,res)=>
{
   console.log(req.body) 
   res.redirect('/')
})

app.get('/',(req,res,next)=>
{
res.send('<h1>Root page</h1>'
    )
})

const server = http.createServer(app);

server.listen(2500,()=>
{
    console.log("Listning to 2500")
})