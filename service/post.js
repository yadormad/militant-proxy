const axios = require('axios');

const fetchPosts = ({ from, to } = {}, fields, filter, sort) => {
    const body = {
        filter,
        sort,
        fields: {},
    };
    if ((from === 0 || from) && to) {
        body.limit = from + to;
        body.skip = from;
    }
    fields.forEach((field) => {
        body.fields[field] = 1;
    });
    return axios.post('/api/collections/get/posts', body);
};

module.exports = {
    fetchPosts,
};
