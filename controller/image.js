const createError = require('http-errors');
const { fetchImageUrl } = require('../service/image');

const getImagePaths = async (
    path,
    fullWidth,
    fullHeight,
    quality = 10,
    overlayWidth = 200,
    overlayHeight,
) => {
    try {
        const fullImageConfig = {
            w: fullWidth,
            h: fullHeight,
        };
        const overlayImageConfig = {
            q: quality,
            w: overlayWidth,
            h: overlayHeight,
        };
        const [fullImageUrl, overlayImageUrl] = await Promise.all([
            fetchImageUrl(path, fullImageConfig),
            fetchImageUrl(path, overlayImageConfig),
        ]);
        return { fullImageUrl, overlayImageUrl };
    } catch (e) {
        if (e.response && e.response.status) {
            throw createError(e.response.status);
        } else {
            throw createError(500);
        }
    }
};

module.exports = {
    getImagePaths,
};
