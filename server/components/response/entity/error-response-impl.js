'use strict';

const errorEntityResponse = require('./src/error-entity-response');

class ErrorResponseImpl {
  async create(type, message) {
    return await errorEntityResponse.create(type, message);
  }
}

function implementErrorResponses() {
  const errorResponseImpl = new ErrorResponseImpl();
}

module.exports = implementErrorResponses;