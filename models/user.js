const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../helpers");

const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        // перевіряєм чи немає вже такого обєкту з таким email
        unique: true,
        required: [true, 'Email is required']
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, 'Set password for user']
    },
    token: {
        type: String,
        default: "",
    },
    avatarURL: {
        type: String,
        require: true,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
        default: "",
    },

}, { versionKey: false, timestamps: true });

userSchema.post("save", handleMongooseError);

const registerSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})

const verifySchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
})

const loginSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required(),
    password: Joi.string().min(6).required()
})

const schemas = { 
    registerSchema,
    loginSchema,
    verifySchema,
}

const User = model('user', userSchema);

module.exports = { 
    User,
    schemas,
}