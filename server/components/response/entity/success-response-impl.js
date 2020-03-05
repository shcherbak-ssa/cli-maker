'use strict';

const successEntityResponse = require('./src/success-entity-response');

class SuccessResponseImpl {
  async create(data, responseType) {
    return await successEntityResponse.create(data, responseType);
  }
}

function implementSuccessResponses() {
  const successResponseImpl = new SuccessResponseImpl();
}

module.exports = implementSuccessResponses;