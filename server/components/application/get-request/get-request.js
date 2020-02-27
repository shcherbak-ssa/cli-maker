'use strict';

const rootRequest = require('./root-request');
const fileRequest = require('./file-request');
const responseSender = require('../response/response-sender');
const urlParser = require('../request-parsers/url-parser');

class GetRequest {
  async run(request, response) {
    const parsedURL = urlParser.parse(request.url);
    const isRootRequest = rootRequest.isRootRequest(parsedURL.getPathname());
    const getResponse = isRootRequest
      ? await rootRequest.run(parsedURL, request)
      : await fileRequest.run(parsedURL);

    responseSender.send(getResponse, response);
  }
}

const getRequest = new GetRequest();
module.exports = getRequest;