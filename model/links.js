const { Schema, model } = require('mongoose')

module.exports = model('links', new Schema({
    instagram: {
        type: String
    }, telegram: {
        type: String,
    }, facebook: {
        type: String,
    }
}))