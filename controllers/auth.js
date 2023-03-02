const { User } = require('../models/user');
const bcrypt = require("bcrypt")

const { HttpError, ctrlWrapper } = require('../helpers');

const register = async (req, res) => {
    // для кастумного відображення помилки що email вже є
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user) { 
        throw HttpError(409, "Email already in use");
    }
    // ===========================
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({...req.body, password: hashPassword});

    res.status(201).json({
        email: newUser.email,
        name: newUser.name,
    })
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email or password invalid");
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        throw HttpError(401, "Email or password invalid");
    }
    const token = "assdasasdasd.asdasdasdasd.asdasdasd";

    res.json({
        token,
    })
}
module.exports = { 
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
}