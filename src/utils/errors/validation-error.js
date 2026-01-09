const { StatusCodes } = require('http-status-codes');

class ValidationeError extends Error {
    constructor(error) {
        super();
        let explanation = [];
        error.errors.forEach((err) => {
            explanation.push(error.message)
        });
        this.name = 'ValidationError';
        this.message = 'Not able to validate the data sent in request';
        this.explanation = explanation;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
};

module.exports = ValidationeError;