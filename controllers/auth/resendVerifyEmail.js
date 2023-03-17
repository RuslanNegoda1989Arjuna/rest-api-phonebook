const { User } = require('../../models/user');
const { HttpError, sendEmail } = require('../../helpers');
const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email} = req.body;
    const user = await User.findOne({ email });

    if (!user) { 
        throw HttpError(401, "Email not found");
    }
    if (user.verify) {
        throw HttpError(401, "Email already verify");
    }

    const verifyEmail = {
        to: email,
        subject: "Veryfy email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationCode}">Click verify email</a>`,
    };
    await sendEmail(verifyEmail);

    res.json({
        message: 'Verify email send success',
    })
}

module.exports = resendVerifyEmail;