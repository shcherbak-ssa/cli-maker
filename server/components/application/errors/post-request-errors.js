'use strict';

class PostRequestError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PostRequestError';
  }
}

class BadRequestError extends PostRequestError {
  constructor(message) {
    super(message);
  }
}

module.exports = {
  BadRequestError
};