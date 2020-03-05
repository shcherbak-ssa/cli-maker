'use strict';

const errorEntityResponse = require('./src/error-entity-response');

async function createErrorResponse(type, message) {
  return await errorEntityResponse.create(type, message);
}

function implementErrorResponses() {}

module.exports = implementErrorResponses;