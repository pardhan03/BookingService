class AppError extends Error {
    constructor(
        name,
        message,
        explanation,
        statusCode,
    ) {
        super();
        this.name = this.name;
        this.message = this.message;
        this.explanation = explanation;
        this.statusCode = statusCode;
    }
};

module.exports = AppError;