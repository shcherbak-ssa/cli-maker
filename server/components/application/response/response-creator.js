'use strict';

const FS = require('fs');

const filepathCreator = require('./src/filepath-creator');
const getFileExtension = require('./src/file-extension');
const headersCreator = require('./src/headers-creator');

const SUCCESS_CODE_RESPONSE = 200;

class ResponseCreator {
  isValid(pathname) {
    const filepath = filepathCreator.create(pathname);
    return FS.existsSync(filepath);
  }
  createResponse(pathname) {
    const fileExtension = getFileExtension(pathname);
    const headers = headersCreator.create(fileExtension);
    const filepath = filepathCreator.create(pathname);

    return {
      code: SUCCESS_CODE_RESPONSE,
      headers: headers,
      filename: filepath
    }
  }
  createErrorResponse(code) {
    return {};
  }
}

const responseCreator = new ResponseCreator();
module.exports = responseCreator;