const express = require('express')
// const bodyParaser = require('body-parser')

const routColor = require('../Routes/color')

const app2 = express();

app2.use(routColor)

app2.listen(3000);