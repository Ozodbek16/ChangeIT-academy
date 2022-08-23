const { Schema, model } = require('mongoose')

const contactSchema = new Schema({
    open_classes_title: {
        type: String,
        required: true
    },
    open_classes_text: {
        type: String,
        required: true
    },

    hero_title_left_title:{
        type: String,
        required: true
    },
    hero_title_left_text:{
        type: String,
        required: true
    },
    phone_text:{
        type: String,
        required: true
    },
    right_form_form_title:{
        type: String,
        required: true
    },
    right_form_form_text:{
        type: String,
        required: true
    },
    right_form_form_name_input:{
        type: String,
        required: true
    },
    right_form_form_phone_input:{
        type: String,
        required: true
    },
    right_form_form_btn:{
        type: String,
        required: true
    },
    coworking_left_title:{
        type: String,
        required: true
    },
    coworking_left_text:{
        type: String,
        required: true
    },
    coworking_left_time:{
        type: String,
        required: true
    },
    coworking_right_title:{
        type: String,
        required: true
    },
    coworking_right_list_items:[
        {
            coworking_right_item_text:{
                type: String,
                required: true
            }
        }
    ]

})

module.exports = model('contactPage', contactSchema)