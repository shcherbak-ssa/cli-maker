'use strict';

const {
  SimpleResponseCreator,
  FileResponseCreator,
  JSONResponseCreator
} = require('../../data/response-creators');

class ErrorResponse {
  createSimpleResponse(config) {
    const {statusCode} = config;
    const creator = new SimpleResponseCreator();
    creator.setStatusCodeAndMessage(statusCode);
    return creator.getResponseData();
  }
  createFileResponse(config) {
    const {statusCode, headers, filename} = config;
    const creator = new FileResponseCreator();

    creator
      .setStatusCodeAndMessage(statusCode)
      .setHeaders(headers)
      .setFilename(filename);

    return creator.getResponseData();
  }
  createJSONResponse(config) {
    const {statusCode, data} = config;
    const creator = new JSONResponseCreator();

    creator
      .setStatusCodeAndMessage(statusCode)
      .setData(data);

    return creator.getResponseData();
  }
}

const errorResponse = new ErrorResponse();
module.exports = errorResponse;