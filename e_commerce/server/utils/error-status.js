const sendErrorResponseWithMessage = (res, errorCode, message, data) => {
    res.status(errorCode).json({message, data});
}

module.exports = sendErrorResponseWithMessage