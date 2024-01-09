const jwt = require('jsonwebtoken')

module.exports.middleware = (req, res, next)=>
{
    const authHeader = req.headers.authorization

    if(!authHeader)
    {
        const error = new Error('authuntication error')
        error.statusCode = 401;
        throw error
    }
    const token = authHeader
    let decodedToken;
    try 
    {
       decodedToken = jwt.verify(token,'secretsecret'); 
    }
    catch(err)
    {
        err.statusCode = 500;
        throw "User is not authenticated";
    }

    if(!decodedToken)
    {
        const error = new Error('Not authunticated')
        error.statusCode = 401;
        throw error
    }

    req.userId = decodedToken.userId
    next()

}