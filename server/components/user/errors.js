'use strict';

const userResponseWorker = require('./data/user-response-worker');

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserError';
    this.errorType = '';
    this.userResponse = userResponseWorker
      .createErrorResponse(this.errorType, message);
  }
}

class UserServerError extends UserError {
  constructor(message) {
    super(message);
    this.errorType = 'Server error'
  }
}
class UserDoesNotExist extends UserError {
  constructor(message) {
    super(message);
    this.errorType = 'Action error'
  }
}

module.exports = {
  UserServerError,
  UserDoesNotExist
};