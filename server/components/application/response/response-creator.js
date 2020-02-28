'use strict';

const {STATUS_CODES} = require('http');
const ResponseObjectCreator = require('../data/response-object');

const SUCCESS_STATUS_CODE = 200;

class ResponseCreator {
  async createResponse(publicFileObject, statusCode = SUCCESS_STATUS_CODE) {
    const responseObjectCreator = new ResponseObjectCreator();
    responseObjectCreator.setStatusCode(statusCode);

    const message = STATUS_CODES[statusCode];
    responseObjectCreator.setMessage(message);

    const headers = publicFileObject.getHeaders();
    responseObjectCreator.setHeaders(headers);

    return responseObjectCreator.getResponseObject();
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;