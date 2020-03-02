'use strict';

const errorResponse = require('./src/error-response');
const {NOT_FOUND_ERROR_PATH} = require('../../../utils/public-paths');

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

/** Client errors */
class BadRequestError extends RequestError {
  constructor(message) {
    super(message);
    this.responseObject = errorResponse.createJSONResponse({
      statusCode: 400,
      data: {message}
    });
  }
}
class NotFoundError extends RequestError {
  constructor(message) {
    super(message);
    this.responseObject = errorResponse.createFileResponse({
      statusCode: 404,
      headers: {
        'Content-Type': 'text/html'
      },
      filename: NOT_FOUND_ERROR_PATH
    });
  }
}
class MethodNotAllowedError extends RequestError {
  constructor(message) {
    super(message);
    this.responseObject = errorResponse.createSimpleResponse({
      statusCode: 405,
    });
  }
}

/** Server errors */
class InternalSeverError extends RequestError {
  constructor(message) {
    super(message);
    this.responseObject = errorResponse.createSimpleResponse({
      statusCode: 500,
    });
  }
}

module.exports = {
  BadRequestError,
  NotFoundError,
  MethodNotAllowedError,
  InternalSeverError
};