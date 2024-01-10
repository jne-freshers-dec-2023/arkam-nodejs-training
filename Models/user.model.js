const mongoose = require('mongoose')

const schema = mongoose.Schema

const UserSchema = new schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    age:
    {
        type:Number,
        min: 18,
        max: 60
    },
    createdAt:
    {
        type: Date,
        default: () => Date.now()
    },
    updatedAt:
    {
        type: Date,
        default: () => Date.now()
    }
},
{timestamps:true})

const user = mongoose.model('Usezr',UserSchema)

module.exports = user

