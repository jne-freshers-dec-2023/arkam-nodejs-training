const jwt = require('jsonwebtoken')


module.exports.verifier = (req,res,next)=>
{

    const token = req.get('authorization')?.split(" ")[1]
    try
    {
    const decoded = jwt.verify(token,'arkam')
    console.log(decoded)

    }
    catch(err)
    {
        console.log(err)
        const error = new Error('token authintication failed 1')
        error.statusCode = 401
        throw error
    }

    if(!decoded)
    {
        const err = new Error('token authintication failed 2')
        err.statusCode = 401
        throw err
    }

    req.userId = decoded.userId
    next()
}