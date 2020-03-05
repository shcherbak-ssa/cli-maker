'use strict';

const EntityResponseCreator = require('./entity-response');

function createErrorEntityResponse(type, message) {
  const creator = new EntityResponseCreator();
  return creator
    .setErrorFlag(true)
    .setType(type)
    .setMessage(message)
    .getResponse();
}

module.exports = createErrorEntityResponse;