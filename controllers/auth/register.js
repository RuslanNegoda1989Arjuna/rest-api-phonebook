const { User } = require('../../models/user');
const bcrypt = require("bcrypt");
const { HttpError, sendEmail } = require('../../helpers');
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { BASE_URL } = process.env;


const register = async (req, res) => {
    // для кастумного відображення помилки що email вже є
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) { 
        throw HttpError(409, "Email already in use");
    }
    // ===========================
    const hashPassword = await bcrypt.hash(password, 10);

    const avatarURL = gravatar.url(email, { s: '250', f: 'y' });
    const verificationCode = nanoid();

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationCode });
    
    const verifyEmail = {
        to: email,
        subject: "Veryfy email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${verificationCode}">Click verify email</a>`,
    };

    await sendEmail(verifyEmail);

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
}

module.exports = register;