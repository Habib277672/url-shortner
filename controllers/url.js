const { nanoid } = require('nanoid');
const URL = require('../models/url');

const handleGenerateNewShortUrl = async (req, res) => {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({
            success: false,
            message: 'Redirect URL is required'
        });
    }
    const shortID = nanoid(8);
    await URL.create({
        shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id
    })

    return res.redirect("/?id=" + shortID)
};


const handleRedirect = async (req, res) => {
    const shortID = req.params.shortID;
    const entry = await URL.findOneAndUpdate({ shortID }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        }
    })

    if (!entry) {
        return res.status(404).json({
            success: false,
            message: 'Short URL not found'
        });
    }
    return res.redirect(entry.redirectURL);
}


const handleGetAnalytics = async (req, res) => {
    const shortID = req.params.shortID;
    const result = await URL.findOne({ shortID });

    if (!result) {
        return res.status(404).json({
            success: false,
            message: 'Short URL not found'
        });
    }
    return res.status(200).json({
        success: true,
        message: 'Analytics fetched successfully',
        data: {
            totalClicks: result.visitHistory.length,
            visitHistory: result.visitHistory
        }
    })
}


module.exports = {
    handleGenerateNewShortUrl,
    handleRedirect,
    handleGetAnalytics
}