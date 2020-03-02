'use strict';

const {PUBLIC_PATH} = require('../../../utils/public-path');
const createErrorResponseObject = require('./src/create-error-response-object');

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

class NotFoundError extends RequestError {
  responseObject = createErrorResponseObject({
    statusCode: 404,
    headers: {
      'Content-Type': 'text/html'
    },
    filename: join(PUBLIC_PATH, 'html', '404.html')
  });
  
  constructor(message) {
    super(message);
  }
}
class MethodNotAllowedError extends RequestError {
  responseObject = createErrorResponseObject({
    statusCode: 405,
  });

  constructor(message) {
    super(message);
  }
}
class BadRequestError extends PostRequestError {
  constructor(message) {
    super(message);

    this.responseObject = createErrorResponseObject({
      type: 'json',
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {message}
    });
  }
}
class InternalSeverError extends RequestError {
  responseObject = createErrorResponseObject({
    statusCode: 500,
  });

  constructor(message) {
    super(message);
  }
}

module.exports = {
  NotFoundError,
  MethodNotAllowedError,
  InternalSeverError
};