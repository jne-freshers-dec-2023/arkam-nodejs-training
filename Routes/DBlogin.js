const express = require('express')

const controller = require('../controller/DBlogin')

const router = express.Router();

router.post('/login',controller.userDeatils)

module.exports = router 