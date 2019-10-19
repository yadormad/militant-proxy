const axios = require('axios');

const fetchImageUrl = async (path, config) => {
    const { data } = await axios.post('/api/cockpit/image', {
        src: path,
        ...config,
    });
    return data;
};

module.exports = {
    fetchImageUrl,
};
