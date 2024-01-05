module.exports.getSession = (req,res,next)=>
{
   req.session.isLoggedIn = true
   res.redirect('/')
}

module.exports.home = (req,res,next)=>
{
console.log(req.session.isLoggedIn)
  return res.json({
    Value: req.session.isLoggedIn
  })
}