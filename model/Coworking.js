const { Schema, model } = require('mongoose');

module.exports = model('coworking', new Schema({
    title_h1: {
        type: String,
        required: true
    },
    title_left: {
        type: String,
    },
    title_left_txt: {
        type: String,
        required: true
    },
    title_right: {
        type: String,
        required: true
    },
    title_right_txt: {
        type: String,
        required: true
    },
    home_right_h3: {
        type: String,
        required: true
    },
    home_right_p: {
        type: String,
        required: true
    },
    home_right_button: {
        type: String,
        required: true
    },
    all_title_h3: {
        type: String,
        required: true
    },
    premium_botom: [{
        type: String,
        required: true
    }],
    form_info_title_in_no_change: {
        type: String,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    second: {
        type: String,
        required: true
    },
    form_submit_btn: {
        type: String,
        required: true
    },
}))