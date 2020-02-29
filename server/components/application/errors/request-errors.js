'use strict';

const {join} = require('path');
const PUBLIC_PATH = join(process.cwd(), 'public');

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