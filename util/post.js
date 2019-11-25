
const processPost = ({ _modified, ...rest }, imagePaths) => ({
    ...rest,
    modified: `${_modified}000`,
    image: imagePaths,
});

module.exports = {
    processPost,
};
