const createError = require('http-errors');
const { genericListConverter } = require('../util');
const { fetchPosts } = require('../service/post');

const getPostList = async (rangeHeader, isPublished = true) => {
    try {
        const [from, to] = rangeHeader ? rangeHeader.split('/') : [null, null];
        const { data } = await fetchPosts(
            { from, to },
            ['title', 'image', 'excerpt', 'tags', 'author', 'date'],
            { published: isPublished },
            { _created: -1 },
        );
        return genericListConverter(data.entries);
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status) {
            throw createError(e.response.status);
        } else {
            throw createError(500);
        }
    }
};

const getPostById = async (id, isPublished = true) => {
    try {
        const { data } = await fetchPosts(
            {},
            ['title', 'image', 'content', 'tags', 'author', 'date'],
            { published: isPublished, _id: id },
        );
        if (!data.entries.length) return Promise.reject(createError(404));
        return data.entries[0];
    } catch (e) {
        console.log(e);
        if (e.response && e.response.status) {
            throw createError(e.response.status);
        } else {
            throw createError(500);
        }
    }
};

module.exports = {
    getPostList,
    getPostById,
};
