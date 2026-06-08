const express = require('express');

const { handleGenerateNewShortUrl, handleRedirect, handleGetAnalytics } = require('../controllers/url');

const router = express.Router();


router.post('/', handleGenerateNewShortUrl);
router.get("/analytics/:shortID", handleGetAnalytics);
router.get('/:shortID', handleRedirect);


module.exports = router;