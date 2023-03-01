const express = require('express');

const ctrl = require("../../controllers/contacts");

const {isValidId} = require("../../middlewares")

const {contactValidation, putContactValidation, patchFavoriteValidation} = require("../../schemas/validation.js")

const router = express.Router();

router.get('/', ctrl.getAll)

router.get('/:contactId', isValidId, ctrl.getById)

router.post('/', contactValidation, ctrl.add)

router.delete('/:contactId', isValidId, ctrl.deleteById)

router.put('/:contactId', isValidId, putContactValidation, ctrl.updateById)

router.patch('/:contactId/favorite', isValidId, patchFavoriteValidation, ctrl.updateFavorite)

module.exports = router


