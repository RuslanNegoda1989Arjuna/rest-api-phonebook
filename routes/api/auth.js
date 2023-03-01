const express = require('express');

const { validateBody } = require("../../middlewares");
const { schemas } = require("../../models/user");

// const ctrl = require("../../controllers/contacts");

// const {isValidId} = require("../../middlewares")

// const {contactValidation, putContactValidation, patchFavoriteValidation} = require("../../schemas/validation.js")

const router = express.Router();



// signup
router.post('/register', validateBody(schemas.registerSchema))

module.exports = router;