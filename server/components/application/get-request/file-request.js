'use strict';

const responseCreator = require('../response/response-creator');

class FileRequest {
  INVALID_URL_PATHNAME_CODE = 404;

  async run(parsedURL) {
    const pathname = parsedURL.getPathname();
    const isValidPathname = responseCreator.isValid(pathname);
    const getResponse = isValidPathname
     ? responseCreator.createResponse(pathname)
     : responseCreator.createErrorResponse(this.INVALID_URL_PATHNAME_CODE);

    return getResponse;
  }
}

const fileRequest = new FileRequest();
module.exports = fileRequest;