const EventEmmiter = require('node:events')

const eventEmmiter = new EventEmmiter();

eventEmmiter.on('start',()=>
{
    console.log('Event Started SuccessFully')
})

eventEmmiter.emit('start')

