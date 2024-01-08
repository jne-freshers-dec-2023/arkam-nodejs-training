const jwt = require('jsonwebtoken')


module.exports.verifier = (req,res,next)=>
{
    const token = req.get('authorization')
    try
    {
    const decoded = jwt.verify(token,'secretkey')
    }
    catch(err)
    {
        err.statusCode = 401
        throw err
    }

    if(!decoded)
    {
        const err = new Error('token authintication failed')
        err.statusCode = 401
        throw err
    }

    req.userId = decoded.userId
}