const express = require('express');

const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

// const ctrl = require("../../controllers/auth");
const {auth: ctrl } = require("../../controllers/");

const router = express.Router();



// signup
router.post('/register', validateBody(schemas.registerSchema), ctrl.register);

router.get('/verify/:verificationCode', ctrl.verifyEmail);
router.post('/verify', validateBody(schemas.verifySchema), ctrl.resendVerifyEmail)
// singin
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);


router.get("/current", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

// маршрут для аватарки
router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;