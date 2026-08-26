const appErrors = require('./app-errors');
const errorHandler = require('./error-handler');

module.exports = {
    ...appErrors,
    ErrorHandler: errorHandler,
};
