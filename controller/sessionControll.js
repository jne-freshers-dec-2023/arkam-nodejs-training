module.exports.sessionController = (req,res,next)=>
{
    req.session.isLoggedIn = true
    res.redirect('/')
}

module.exports.deleteSession = (req,res,next)=>
{
    req.session.destroy();
    
    res.redirect('/')
}

module.exports.home = (req,res,next)=>
{
    console.log(req.session.isLoggedIn)
   return res.json({
       msg: 'its working'
    })
}

