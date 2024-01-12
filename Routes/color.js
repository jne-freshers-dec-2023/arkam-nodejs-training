const express = require('express')

const colorColntroller = require('../controller/color')

const router = express.Router()

router.get('/color-name',colorColntroller.getColorName)

module.exports = router;