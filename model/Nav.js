const { Schema, model } = require('mongoose')

const navSchema = new Schema({
    number: {
        type: String,
        required: true
    },
    courses: {
        type: String,
        required: true
    },
    coworking: {
        type: String,
        required: true
    },
    contacts: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    },
    open_lessons:{
        type: String,
        required: true
    }
})

module.exports = model('nav', navSchema)