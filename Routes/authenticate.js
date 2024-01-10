const express = require('express')

const router = express.Router()

const authenticateController = require('../controller/authenticate')

router.post('/signup',authenticateController.signup)
router.post('/login',authenticateController.login)
router.get('/',authenticateController.home)
router.get('/postlogin',authenticateController.postLogin)

module.exports = router