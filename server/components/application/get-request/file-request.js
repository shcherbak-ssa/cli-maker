'use strict';

const responseCreator = require('../response/response-creator');
const {NotFoundError} = require('../errors/request-errors');

class FileRequest {
  INVALID_URL_PATHNAME_CODE = 404;

  async run(parsedURL) {
    const pathname = parsedURL.getPathname();
    if( responseCreator.isValid(pathname) )
      return responseCreator.createResponse(pathname)

    throw new NotFoundError(`file ${pathname} did not find`);
  }
}

const fileRequest = new FileRequest();
module.exports = fileRequest;