'use strict';

const {PUBLIC_PATH} = require('../../../utils/public-path');
const errorResponse = require('./src/error-response');

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

/** Client errors */
class BadRequestError extends PostRequestError {
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
      filename: join(PUBLIC_PATH, 'html', '404.html')
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