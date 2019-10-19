const axios = require('axios');

const fetchHomeBannerImagePath = async () => {
    const { data } = await axios.get('/api/singletons/get/homeImage');
    return data.image.path;
};

module.exports = {
    fetchHomeBannerImagePath,
};
