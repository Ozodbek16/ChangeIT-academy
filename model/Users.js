const { Schema, model } = require('mongoose')

module.exports = model('users', new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
}))