'use strict';

const EntityResponseCreator = require('./entity-response');

function createErrorResponse(type, message) {
  const creator = new EntityResponseCreator();
  return creator
    .setErrorFlag(true)
    .setType(type)
    .setMessage(message)
    .getResponse();
}

module.exports = createErrorResponse;