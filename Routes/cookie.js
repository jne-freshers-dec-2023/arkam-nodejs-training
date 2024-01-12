const express = require('express')
const controllerCookie = require('../controller/cookie')

const router = express.Router()

router.get('/cookie',controllerCookie.cookie)

router.get('/',controllerCookie.home)

module.exports = router;