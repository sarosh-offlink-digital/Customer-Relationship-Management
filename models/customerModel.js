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
        contact_form_payment_status : {
            type: String,
        },
        contact_form_payment : {
            type: Number,
        },
        contact_form_payment_currency : {
            type: String,
        },
        contact_form_payment_mode : {
            type: String,
        },
        contact_form_product : {
            type: String,
        },
        contact_form_product_service : {
            type: String,
        },
    },
    {
        timestamps: true
    }
)

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;