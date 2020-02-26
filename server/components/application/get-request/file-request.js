'use strict';

const responseCreator = {
  isValid(url) {
    return true;
  },
  createResponse(url) {
    return {};
  },
  createErrorResponse(code) {
    return {};
  }
};

class FileRequest {
  INVALID_URL_PATHNAME_CODE = 404;

  async run(parsedURL) {
    const pathname = parsedURL.getPathname();
    return responseCreator.isValid(pathname)
     ? responseCreator.createResponse(pathname)
     : responseCreator.createErrorResponse(this.INVALID_URL_PATHNAME_CODE);
  }
}