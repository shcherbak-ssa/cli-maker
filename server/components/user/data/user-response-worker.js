'use strict';

const UserResponseCreator = require('./src/user-response');

class UserResponseWorker {
  createErrorResponse(type, message) {
    const creator = new UserResponseCreator();
    return creator
      .setErrorFlag(true)
      .setType(type)
      .setMessage(message)
      .getResponse();
  }
  createSuccessResponse(data) {
    const creator = new UserResponseCreator();
    return creator
      .setData(data)
      .getResponse();
  }
}

const userResponseWorker = new UserResponseWorker();
module.exports = userResponseWorker;