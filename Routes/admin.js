const express = require('express')
const path = require('path');

const router = express.Router();


router.get('/add-product',(req,res)=>
{
    res.send(
      `<form action = "/product" method="POST">
      <input type = "text" name = "title"/>
      <button type = "submit">submit</button>
      </form>`
    )
})

router.post('/product',(req,res)=>
{
   console.log(req.body) 
   res.redirect('/')
})

module.exports = router;