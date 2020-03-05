'use strict';

const successEntityResponse = require('./src/success-entity-response');

const IUserSuccessResponse = require('../../user/response/i-user-success-response');
const IProjectSuccessResponse = require('../../project/response/i-project-success-response');

class SuccessResponseImpl {
  async create(data, responseType) {
    return await successEntityResponse.create(data, responseType);
  }
}

function implementSuccessResponses() {
  const successResponseImpl = new SuccessResponseImpl();
  IUserSuccessResponse.create = successResponseImpl.create;
  IProjectSuccessResponse.create = successResponseImpl.create;
}

module.exports = implementSuccessResponses;