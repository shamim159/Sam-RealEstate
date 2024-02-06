export const errorHandler = (statusCode, message) => {
    const error = new Error();//jserror constructor
    error.statusCode = statusCode;
    error.message = message;
    return error;
}