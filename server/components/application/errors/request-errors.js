'use strict';

class RequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'RequestError';
  }
}

class NotFoundError extends RequestError {
  errorData = {
    statusCode: 404,
    pathname: '404.html'
  };
  
  constructor(message) {
    super(message);
  }
}
class BadRequestError extends RequestError {
  errorData = {
    statusCode: 400,
    pathname: null
  };
  
  constructor(message) {
    super(message);
  }
}
class MethodNotAllowed extends RequestError {
  errorData = {
    statusCode: 405,
    pathname: null
  };

  constructor(message) {
    super(message);
  }
}

module.exports = {
  NotFoundError,
  BadRequestError,
  MethodNotAllowed
};