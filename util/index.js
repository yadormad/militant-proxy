const genericListConverter = entries => (
    entries.map(({ _id, ...rest }) => ({
        id: _id,
        ...rest,
    }))
);

module.exports = {
    genericListConverter,
};
