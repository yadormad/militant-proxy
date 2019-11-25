const createError = require('http-errors');
const { genericListConverter } = require('../util');
const { fetchPosts } = require('../service/post');
const { getImagePaths } = require('../controller/image');
const { processPost } = require('../util/post');

const getPostList = async (rangeHeader, isPublished = true) => {
    try {
        const [from, to] = rangeHeader ? rangeHeader.split('/') : [null, null];
        const { data } = await fetchPosts(
            { from, to },
            ['title', 'image', 'excerpt', 'tags', 'author', 'date', 'time', '_modified'],
            { published: isPublished },
            { _created: -1 },
        );
        const imagePaths = await Promise.all(
            data.entries.map(
                ({ image }) => getImagePaths(image._id, 600),
            ),
        );
        return genericListConverter(
            data.entries.map((entry, index) => processPost(entry, imagePaths[index])),
        );
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
            ['title', 'image', 'content', 'tags', 'author', 'date', '_modified'],
            { published: isPublished, _id: id },
        );
        if (!data.entries.length) return Promise.reject(createError(404));
        const entry = data.entries[0];
        const imagePaths = await getImagePaths(entry.image._id, 900);
        return processPost(entry, imagePaths);
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
