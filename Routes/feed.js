const express = require('express')

const feedController = require('../controller/feed')

const router = express.Router();

router.get('/' ,feedController.getPosts);
router.post('/' ,feedController.createPost);


module.exports = router;