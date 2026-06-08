const User = require("../models/users")
const { setUser } = require("../service/auth")

const handleUserSignUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    await User.create({
        name,
        email,
        password,
        role: "NORMAL"
    })
    return res.redirect("/signin")
}


const handleUserSignIn = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const user = await User.findOne({
        email,
        password
    })
    if (!user) return res.render("signIn", {
        error: "Invalid Cridentials"
    })

    const token = setUser(user)
    res.cookie("uid", token, {
        httpOnly: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
    })
    return res.redirect("/");
}

const handleUserLogout = (req, res) => {
    res.clearCookie("uid")
    return res.redirect("/signin")
}

module.exports = {
    handleUserSignUp,
    handleUserSignIn,
    handleUserLogout
}