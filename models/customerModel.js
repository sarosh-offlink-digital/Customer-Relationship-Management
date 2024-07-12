const mongoose = require('mongoose');

const customerSchema = mongoose.Schema(
    {
        contact_form_id: {
            type: Number,
            required: [true, "please enter ID"]
        },
        contact_form_name: {
            type: String,
            required: [true, "please enter name"]
        },
        contact_form_email: {
            type: String,
            required: [true, "please enter email"]
        },
        contact_form_phone : {
            type: String,
            required: [true, "please enter conact no "]
        },
        contact_form_service : {
            type: String,
            required: [true, "please enter service"]
        },
        contact_form_message : {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;