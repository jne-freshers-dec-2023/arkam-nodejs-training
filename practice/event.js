const EventEmmiter = require('node:events')


const eventEmmiter = new EventEmmiter()

eventEmmiter.on('display',(msg)=>
{
    console.log(msg)
})

eventEmmiter.emit('display','Hello')