const express = require('express');
const { GET_LIST, GET_BY_ID } = require('./constants');
const { getPostList, getPostById } = require('../controller/post');

const router = express.Router();

/* GET list of posts. */
router.get(GET_LIST, async (req, res) => {
    const posts = await getPostList(req.header('Range'));
    res.send(posts);
});

/* GET list of posts. */
router.get(GET_BY_ID, async (req, res) => {
    const post = await getPostById(req.params.id);
    res.send(post);
});

module.exports = router;
