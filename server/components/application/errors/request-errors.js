'use strict';

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

class NotFoundError extends RequestError {
  statusCode = 404;
  
  constructor(message) {
    super(message);
  }
}
class BadRequestError extends RequestError {
  statusCode = 400;
  
  constructor(message) {
    super(message);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError
};