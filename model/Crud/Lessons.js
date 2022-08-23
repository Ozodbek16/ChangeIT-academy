const { Schema, model } = require('mongoose');

module.exports = model('lessons', new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
}))