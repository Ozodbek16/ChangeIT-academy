const { Schema, model } = require('mongoose');

module.exports = model('reviews', new Schema({
    img: {
        type: String,
        required: true
    },
    biography: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    info: {
        type: String,
        required: true
    },
}))