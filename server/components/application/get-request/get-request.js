'use strict';

const rootRequest = require('./root-request');
const fileRequest = require('./file-request');

const responseCreator = require('../response/response-creator');
const responseSender = require('../response/response-sender');
const urlParser = require('../request-parsers/url-parser');

class GetRequest {
  async run(request, response) {
    let responseObject = null;

    try {
      responseObject = await this._tryToRun(request);  
    } catch (error) {
      if( error.name !== 'RequestError' ) {
        console.log(error);
        process.exit(1);
      }

      console.log('get-request: ', error.message);
      responseObject = await responseCreator.createErrorResponse(error.statusCode);
    } finally {
      if( responseObject === null ) return response.end();
      await responseSender.send(responseObject, response);
    }
  }

  async _tryToRun(request) {
    const parsedURL = urlParser.parse(request.url);
    const pathname = parsedURL.getPathname();

    return rootRequest.isRootRequest(pathname)
      ? await rootRequest.run(parsedURL, request)
      : await fileRequest.run(parsedURL);
  }
}

const getRequest = new GetRequest();
module.exports = getRequest;