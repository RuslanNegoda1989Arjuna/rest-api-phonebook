const express = require('express');

const ctrl = require("../../controllers/contacts");

const {isValidId} = require("../../middlewares")

const {contactValidation, putContactValidation, patchFavoriteValidation} = require("../../schemas/validation.js")

const router = express.Router();