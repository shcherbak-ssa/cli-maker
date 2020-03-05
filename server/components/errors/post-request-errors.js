'use strict';

const errorResponse = require('./src/error-response');

class InvalidUserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidUserError';
    this.responseObject = errorResponse.createJSONResponse({
      statusCode: 200,
      data: {
        type: 'error',
        message: 'Invalid user'
      }
    });
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.responseObject = errorResponse.createJSONResponse({
      statusCode: 200,
      data: {type: 'error', message}
    });
  }
}

module.exports = {
  InvalidUserError,
  ValidationError
};