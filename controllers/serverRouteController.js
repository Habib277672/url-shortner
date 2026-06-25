const URL = require('../models/url');

const handleHomeRender = async (req, res) => {
    const allUrls = await URL.find({ createdBy: req.user._id })
    return res.render("home", {
        urls: allUrls,
        id: req.query.id || null,
        baseUrl: process.env.BASE_URL || "https://url-shortner-fz1u.onrender.com"
    });
}

const handleHomeRenderAll = async (req, res) => {
    const allUrls = await URL.find({})
    return res.render("home", {
        urls: allUrls,
        baseUrl: process.env.BASE_URL || "https://url-shortner-fz1u.onrender.com"
    });
}
const handleSignUpRender = async (req, res) => {
    return res.render("signUp");
}

const handleSignInRender = async (req, res) => {
    return res.render('signIn');
}

module.exports = { handleHomeRender, handleHomeRenderAll, handleSignUpRender, handleSignInRender }