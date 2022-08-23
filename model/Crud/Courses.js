const { Schema, model } = require('mongoose');

module.exports = model('courses', new Schema({
    bg: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    for_title: [{  type: String,   required: true }],
    for_description: [{ type: String, required: true }],
    learns_title: [{ type: String, required: true }],
    learns_description: [{ type: String, required: true }],
    learns_img: [{ type: String, required: true }],
    salary: {
        type: String,
        required: true
    },
    salary_info: {
        type: String,
        required: true
    },
    salary_desc: {
        type: String,
        required: true
    },
    program: [{
        type: String,
        required: true
    }],
}))