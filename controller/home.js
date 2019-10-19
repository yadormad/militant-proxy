
const createError = require('http-errors');
const { fetchHomeBannerImagePath } = require('../service/home');
const { getImagePaths } = require('./image');

const getHomeBannerImagePaths = async () => {
    try {
        const homeBannerPath = await fetchHomeBannerImagePath();
        return await getImagePaths(homeBannerPath, 1920);
    } catch (e) {
        if (e.response && e.response.status) {
            throw createError(e.response.status);
        } else {
            throw createError(500);
        }
    }
};

module.exports = {
    getHomeBannerImagePaths,
};
