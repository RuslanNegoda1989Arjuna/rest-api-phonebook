const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");


const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },

}, { versionKey: false, timestamps: true });

contactSchema.post("save", (error, data, next) => {
    error.status = 400;
    next()
    
} );

const Contact = model("contact", contactSchema);

module.exports = Contact;