'use strict';

const userResponseWorker = require('./data/user-response-worker');

function createErrorResponse(type, message) {
  return userResponseWorker.createErrorResponse(type, message);
}

class UserError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserError';
  }
}

class UserServerError extends UserError {
  constructor(message) {
    super(message);
    this.userResponse = createErrorResponse('Server error', message);
  }
}
class UserDoesNotExist extends UserError {
  constructor(message) {
    super(message);
    this.userResponse = createErrorResponse('Action error', message);
  }
}

module.exports = {
  UserServerError,
  UserDoesNotExist
};