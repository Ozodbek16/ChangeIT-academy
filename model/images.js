const { Schema, model } = require('mongoose')

module.exports = model('images', new Schema({
    main_course_data_info_img: {
        type: String,
    },
    programming_steps_img: {
        type: String,
    },
    practices_img: {
        type: String,
    },
    mentor_img: {
        type: String,
    },
    home_left_second_img: {
        type: String,
    },
    coworking_left: {
        type: String,
    }
}))