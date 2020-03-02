'use strict';

const UserResponseCreator = require('./src/user-response');

class UserResponseWorker {
  createErrorResponse(type, message) {
    const creator = new UserResponseCreator();
    
    creator
      .setErrorFlag(true)
      .setType(type)
      .setMessage(message);

    return creator.getResponse();
  }
  createSuccessResponse(data) {
    const creator = new UserResponseCreator();
    creator.setData(data);
    return creator.getResponse();
  }
}

const userResponseWorker = new UserResponseWorker();
module.exports = userResponseWorker;