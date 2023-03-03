const express = require('express');

const ctrl = require("../../controllers/contacts");

const {isValidId, authenticate} = require("../../middlewares")

const { contactValidation, putContactValidation, patchFavoriteValidation } = require("../../schemas/validation.js")

// const { schemas } = require("../../models/user");

const router = express.Router();

router.get('/', authenticate, ctrl.getAll)

router.get('/:contactId', authenticate, isValidId, ctrl.getById)

router.post('/', authenticate, contactValidation, ctrl.add)

router.delete('/:contactId', authenticate, isValidId, ctrl.deleteById)

router.put('/:contactId', authenticate, isValidId, putContactValidation, ctrl.updateById)

router.patch('/:contactId/favorite', authenticate, isValidId, patchFavoriteValidation, ctrl.updateFavorite)

module.exports = router


