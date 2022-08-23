const { Schema, model } = require('mongoose')

const homeSchema = new Schema({
    header_title:{
        type: String,
        required: true
    },
    header_desc:{
        type: String,
        required: true
    },
    header_actions_course:{
        type: String,
        required: true
    },
    header_actions_register:{
        type: String,
        required: true
    },
    main_course_data_info_txt_title:{
        type: String,
        required: true
    },
    main_course_data_info_txt_text:{
        type: String,
        required: true
    },
    main_course_data_info_txt_btn:{
        type: String,
        required: true
    },
    main_course_data_techs_title:{
        type: String,
        required: true
    },
    programming_steps_info_title:{
        type: String,
        required: true
    },
    programming_steps_info_items: [
        {
            steps_item_title:{
                type: String,
                required: true
            },
            steps_item_text:{
                type: String,
                required: true
            },
            steps_item_text_b:{
                type: String,
            }
        }
    ],
    course_about_info:{
        type: String,
        required: true
    },
    course_about_info_items:[
        {
            course_about_info_itme_title:{
                type: String,
                required: true
            },
            course_about_info_itme_text:{
                type: String,
                required: true
            }
        }
    ],
    course_about_month: {
        type: String,
        required: true
    },
    course_about_month_text: {
        type: String,
        required: true
    },
    practice_items:[
        {
            practices_info_title: {
                type: String,
                required: true
            },
            practices_info_text: {
                type: String,
                required: true
            },
            mentor_info_b:{
                type: String,
            }
        }
    ],
    reviews_title: {
        type: String,
        required: true
    },
    slider_item: [
        {
            slider_item_info: {
                type: String,
                required: true
            },
            slider_item_info_owner: {
                type: String,
                required: true
            },
            slider_item_info_owner_work: {
                type: String,
                required: true
            }
        }
    ],
    news_title:{
        type: String,
        required: true
    },
    newcard: [
        {
            new_card_info_text: {
                type: String,
                required: true
            },
            new_card_info_time: {
                type: String,
                required: true
            }
        }
    ]
})

module.exports = model('home', homeSchema)