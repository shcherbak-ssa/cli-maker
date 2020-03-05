'use strict';

const entityErrorResponse = require('./src/error-entity-response');

async function createErrorResponse(type, message) {
  return await entityErrorResponse.create(type, message);
}

function implementErrorsResponses() {}

module.exports = implementErrorsResponses;