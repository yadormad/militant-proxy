const express = require('express');
const { getHomeBannerImagePaths, getAboutUsHome } = require('../controller/home');

const router = express.Router();

/* GET banner image on home page. */
router.get('/bannerImage', async (req, res, next) => {
    try {
        const imageUrls = await getHomeBannerImagePaths();
        res.send(imageUrls);
    } catch (e) {
        next(e);
    }
});

/* GET banner image on home page. */
router.get('/aboutUs', async (req, res, next) => {
    try {
        const aboutUs = await getAboutUsHome();
        res.send(aboutUs);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
