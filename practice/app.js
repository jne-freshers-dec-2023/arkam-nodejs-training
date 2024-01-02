const express = require('express')
const bodyParser = require('body-parser')

const feedRoute = require('../Routes/feed')

const app = express();

app.use(bodyParser.json())

app.use('/post',feedRoute)

app.listen(8000)