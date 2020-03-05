'use strict';

const successEntityResponse = require('./src/success-entity-response');

async function createSuccessResponse(data, responseType) {
  return await successEntityResponse.create(data, responseType);
}

function implementSuccessResponses() {}

module.exports = implementSuccessResponses;