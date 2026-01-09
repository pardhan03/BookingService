const { StatusCodes } = require('http-status-codes');

class ServiceError extends Error {
    constructor(
        message = 'Somethig went wrong!',
        explanation = 'Service layer Error',
        statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    ) {
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
};

module.exports = ServiceError;