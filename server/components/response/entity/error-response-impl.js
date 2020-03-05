'use strict';

const errorEntityResponse = require('./src/error-entity-response');

const IUserErrorResponse = require('../../user/response/i-user-error-response');
const IProjectErrorResponse = require('../../project/response/i-project-error-response');

class ErrorResponseImpl {
  async create(type, message) {
    return await errorEntityResponse.create(type, message);
  }
}

function implementErrorResponses() {
  const errorResponseImpl = new ErrorResponseImpl();
  IUserErrorResponse.create = errorResponseImpl.create;
  IProjectErrorResponse.create = errorResponseImpl.create;
}

module.exports = implementErrorResponses;