'use strict';

const ResponseObjectCreator = require('../../data/response-object');

function createErrorResponseObject(config) {
  const responseObjectCreator = new ResponseObjectCreator();
  const {statusCode, headers = {}, filename = null} = config;

  responseObjectCreator
    .setStatusCode(statusCode)
    .setHeaders(headers)
    .setFilename(filename);

  return responseObjectCreator.getResponseObject();
}

module.exports = createErrorResponseObject;