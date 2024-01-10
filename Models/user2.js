const mongodb = require('mongoose')

const schema = mongodb.Schema

const newSchema = new schema ({
    
        name:
        {
            type: String
        },
        email:
        {
            type: String,
            required :true,
            unque:true
        },
        password:
        {
            type: String,
            required :true

        }
    
})

module.exports = mongodb.model('User2',newSchema)