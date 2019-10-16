const express = require('express');
const { GET_LIST, GET_BY_ID } = require('./constants');
const { getPostList, getPostById } = require('../controller/post');

const router = express.Router();

/* GET list of posts. */
router.get(GET_LIST, async (req, res, next) => {
    try {
        const posts = await getPostList(req.header('Range'));
        res.send(posts);
    } catch (e) {
        next(e);
    }
});

/* GET list of posts. */
router.get(GET_BY_ID, async (req, res, next) => {
    try {
        const post = await getPostById(req.params.id);
        res.send(post);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
