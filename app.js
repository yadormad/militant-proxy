require('dotenv').config();
const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const postRouter = require('./routes/post');

axios.defaults.baseURL = process.env.CMS_URL;
axios.defaults.headers['Cockpit-Token'] = process.env.REACT_APP_API_KEY;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/post', postRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

module.exports = app;
