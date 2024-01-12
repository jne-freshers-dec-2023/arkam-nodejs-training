const fs = require('fs')

const data = fs.readFileSync('event.js')
console.log(data.toString())