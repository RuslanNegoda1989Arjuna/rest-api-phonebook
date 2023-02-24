const express = require('express');

const ctrl = require("../../controllers/contacts");

const {contactValidation, putContactValidation} = require("../../schemas/validation.js")

const router = express.Router();

router.get('/', ctrl.getAll)

// router.get('/:contactId', ctrl.getById)

router.post('/', contactValidation, ctrl.add)

// router.delete('/:contactId', ctrl.deleteById)

// router.put('/:contactId', putContactValidation, ctrl.updateById)

module.exports = router


