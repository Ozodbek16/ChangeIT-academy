const { Schema, model } = require('mongoose');

module.exports = model('techs', new Schema({
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
}))