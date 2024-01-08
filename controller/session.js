module.exports. getSession = (req,res,next)=>
{
   req.session.isLoggedIn = true
   console.log("session data: ",req.session.isLoggedIn)
   res.redirect('/')
}

module.exports.home = (req,res,next)=>
{
console.log(req.session.isLoggedIn)
  return res.json({
    value: req.session.isLoggedIn
  })
}