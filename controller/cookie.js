module.exports.cookie = (req,res,next)=>
{
    res.setHeader('set-Cookie','value=itiscookie; HttpOnly; Secure; Max-Age = 20')
    console.log('redirecting to /')
    res.redirect('/')
}
module.exports.home = (req,res,next)=>
{
   const cookieValue = req.get('cookie')
    return res.json({msg:"Hello from home"})
   console.log(cookieValue)
}