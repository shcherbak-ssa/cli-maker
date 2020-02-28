'use strict';

const {existsSync} = require('fs');
const {STATUS_CODES} = require('http');

const filenameCreator = require('./src/filename-creator');
const getFileExtension = require('./src/file-extension');
const headersCreator = require('./src/headers-creator');
const ResponseObjectCreator = require('../data/response-object');

const SUCCESS_CODE = 200;

class ResponseCreator {
  isValid(pathname) {
    const filename = filenameCreator.createFilename(pathname);
    return existsSync(filename);
  }
  async createResponse(pathname) {
    return this._createResponseObject(pathname, SUCCESS_CODE);
  }
  async createErrorResponse({pathname, statusCode}) {
    return this._createResponseObject(pathname, statusCode);
  }

  _createResponseObject(pathname, statusCode) {
    const responseObjectCreator = new ResponseObjectCreator();
    responseObjectCreator.setCode(statusCode);

    const message = STATUS_CODES[statusCode];
    responseObjectCreator.setMessage(message);

    if( pathname === null ) {
      responseObjectCreator.setFilename(null);
    } else {
      const fileExtension = getFileExtension(pathname);
      const headers = headersCreator.create(fileExtension);
      responseObjectCreator.setHeaders(headers);

      const filename = filenameCreator.createFilename(pathname);
      responseObjectCreator.setFilename(filename);
    }

    return responseObjectCreator.getResponseObject();
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;