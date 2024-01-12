const http = require('http');
const Module2 = require('./TestModeule2')

const server = http.createServer(Module2.handler
    )

server.listen(2000)