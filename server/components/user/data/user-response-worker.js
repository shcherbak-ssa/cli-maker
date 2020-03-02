'use strict';

const UserResponseCreator = require('./user-response');

class UserResponseWorker {
  createErrorResponse(type, message) {
    const creator = new UserResponseCreator();
    
    creator.setErrorFlag(true);
    creator.setType(type);
    creator.setMessage(message);

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