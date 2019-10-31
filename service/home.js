const axios = require('axios');

const fetchHomeBannerImagePath = async () => {
    const { data } = await axios.get('/api/singletons/get/homeImage');
    return data.image.path;
};

const fetchHomeAboutUs = async () => {
    const { data } = await axios.get('/api/singletons/get/aboutUsHome');
    return data;
};

module.exports = {
    fetchHomeBannerImagePath,
    fetchHomeAboutUs,
};
