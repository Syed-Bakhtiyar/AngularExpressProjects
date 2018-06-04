const sendErrorResponseWithMessage = (res, errorCode, message) => {
    res.status(errorCode).json(message);
}

module.exports = sendErrorResponseWithMessage