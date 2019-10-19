const express = require('express');
const { getHomeBannerImagePaths } = require('../controller/home');

const router = express.Router();

/* GET list of posts. */
router.get('/bannerImage', async (req, res, next) => {
    try {
        const imageUrls = await getHomeBannerImagePaths();
        res.send(imageUrls);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
