const express = require('express')

const authController = require('../controller/auth')
const { middleware } = require('../Middleware/auth')
// const { authMiddleware } = require('../Middleware/middleware')


const router = express.Router()

router.put('/signup',authController.signup)

router.post('/login',authController.login)

// router.get('/login-cookie',authController)
router.get('/verify', middleware,authController.verify)


module.exports = router